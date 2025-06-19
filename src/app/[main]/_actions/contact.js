'use server'

import { sendEmail, sendAutoReply } from '@/models/email';

export async function submitContactForm(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Styled HTML for the email body
  const html = `
    <div>
      <div style="margin-bottom:16px;">
        <span style="color:#38bdf8;font-weight:500;">From:</span>
        <span style="color:#f1f5f9;">${name}</span> <span style="color:#a5b4fc;">(${email})</span>
      </div>
      <div style="margin-bottom:16px;">
        <span style="color:#38bdf8;font-weight:500;">Subject:</span>
        <span style="color:#f1f5f9;">${subject}</span>
      </div>
      <div style="margin-bottom:16px;">
        <span style="color:#38bdf8;font-weight:500;">Message:</span>
        <div style="color:#f1f5f9;white-space:pre-line;margin-top:8px;">${message}</div>
      </div>
    </div>
  `;

  // Send email to me
  const emailResult = await sendEmail(
    process.env.SENDGRID_EMAIL,
    `Portfolio Contact: ${subject}`,
    html
  );

  // Send auto-reply to sender
  const autoReplyResult = await sendAutoReply(email, name);

  if (!emailResult.success || !autoReplyResult.success) {
    return { 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    };
  }

  return { success: true };
}
