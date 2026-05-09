import { buildContactEmail } from '@/lib/contact/emailTemplate';

const RESEND_API_URL = 'https://api.resend.com/emails';
const DEFAULT_FROM_EMAIL = 'Gallant Travel Agency <onboarding@resend.dev>';

export async function sendContactNotification({ submission, timestamp, ipAddress, userAgent }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  const recipients = [process.env.CONTACT_RECEIVING_EMAIL_1, process.env.CONTACT_RECEIVING_EMAIL_2].filter(Boolean);

  if (recipients.length === 0) {
    throw new Error('At least one contact receiving email must be configured.');
  }

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL,
      to: recipients,
      reply_to: submission.email,
      subject: `New travel enquiry from ${submission.firstName} ${submission.lastName}`,
      html: buildContactEmail({ submission, timestamp, ipAddress, userAgent }),
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend email request failed: ${response.status} ${errorBody}`);
  }

  return response.json();
}
