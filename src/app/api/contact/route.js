import { NextResponse } from 'next/server';
import { isRateLimited } from '@/lib/contact/rateLimit';
import { validateContactPayload } from '@/lib/contact/validation';
import { appendContactToGoogleSheet } from '@/lib/integrations/googleSheets';
import { sendContactNotification } from '@/lib/integrations/resend';

export const runtime = 'nodejs';

function getClientIp(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

export async function POST(request) {
  const ipAddress = getClientIp(request);

  if (isRateLimited(ipAddress)) {
    return NextResponse.json(
      { success: false, message: 'Too many submissions. Please wait a few minutes and try again.' },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const { data, errors, isValid } = validateContactPayload(body);

  if (!isValid) {
    return NextResponse.json(
      { success: false, message: 'Please correct the highlighted fields.', errors },
      { status: 400 }
    );
  }

  const timestamp = new Date().toISOString();
  const userAgent = request.headers.get('user-agent') || 'unknown';
  const context = { submission: data, timestamp, ipAddress, userAgent };

  try {
    await sendContactNotification(context);
  } catch (error) {
    console.error('Contact email notification failed:', error);
    return NextResponse.json(
      { success: false, message: 'We could not send your message right now. Please try again or contact us directly.' },
      { status: 502 }
    );
  }

  appendContactToGoogleSheet(context).catch((error) => {
    console.error('Google Sheets append failed:', error);
  });

  return NextResponse.json({
    success: true,
    message: 'Thank you. Your message has been sent successfully.',
  });
}
