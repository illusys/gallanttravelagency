function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  
  function row(label, value) {
    return `
      <tr>
        <td style="padding:12px 16px;border-bottom:1px solid #eadfce;color:#5f6272;font-weight:700;width:180px;vertical-align:top;">${label}</td>
        <td style="padding:12px 16px;border-bottom:1px solid #eadfce;color:#17173a;">${escapeHtml(value)}</td>
      </tr>
    `;
  }
  
  export function buildContactEmail({ submission, timestamp, ipAddress, userAgent }) {
    const fullName = `${submission.firstName} ${submission.lastName}`.trim();
  
    return `
      <!doctype html>
      <html>
        <body style="margin:0;background:#fffaf3;font-family:Arial,Helvetica,sans-serif;color:#17173a;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#fffaf3;padding:28px 12px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #eadfce;box-shadow:0 18px 50px rgba(37,32,98,.10);">
                  <tr>
                    <td style="background:#252062;padding:28px 32px;color:#ffffff;">
                      <h1 style="margin:0;font-size:28px;line-height:1.2;">New Travel Enquiry</h1>
                      <p style="margin:8px 0 0;color:#ffffffcc;">Gallant Travel Agency website contact form</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:26px 32px;">
                      <p style="font-size:16px;line-height:1.6;margin:0 0 18px;">A new enquiry was submitted by <strong>${escapeHtml(fullName)}</strong>.</p>
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #eadfce;border-radius:12px;border-collapse:separate;border-spacing:0;overflow:hidden;">
                        ${row('Timestamp', timestamp)}
                        ${row('First Name', submission.firstName)}
                        ${row('Last Name', submission.lastName)}
                        ${row('Email', submission.email)}
                        ${row('Phone', submission.phone)}
                        ${row('Travel Interest', submission.travelInterest)}
                        ${row('Message', submission.message)}
                        ${row('IP Address', ipAddress)}
                        ${row('Browser / User Agent', userAgent)}
                      </table>
                      <p style="font-size:13px;line-height:1.6;color:#5f6272;margin:20px 0 0;">Reply directly to this email or contact the traveller using the phone number above.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
  }
  