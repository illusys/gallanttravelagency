// Configure GOOGLE_SHEETS_WEBHOOK_URL with a deployed Google Apps Script Web App URL.
// The Apps Script should accept JSON POST bodies and append the provided fields to your Sheet.
export async function appendContactToGoogleSheet({ submission, timestamp, ipAddress, userAgent }) {
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  
    if (!webhookUrl) {
      console.warn('GOOGLE_SHEETS_WEBHOOK_URL is not configured; skipping Google Sheets append.');
      return { skipped: true };
    }
  
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp,
        firstName: submission.firstName,
        lastName: submission.lastName,
        email: submission.email,
        phone: submission.phone,
        travelInterest: submission.travelInterest,
        message: submission.message,
        ipAddress,
        userAgent,
      }),
    });
  
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Google Sheets webhook failed: ${response.status} ${errorBody}`);
    }
  
    return response.json().catch(() => ({ ok: true }));
  }
  