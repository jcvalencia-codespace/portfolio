const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const EMAIL_THEME_STYLE = `
  background: linear-gradient(135deg, #0f172a 0%, #0e7490 60%, #a21caf 100%);
  color: #f1f5f9;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  padding: 32px 0;
  min-height: 100vh;
`;
const CARD_STYLE = `
  background: rgba(30,41,59,0.95);
  border-radius: 16px;
  box-shadow: 0 4px 32px 0 rgba(34,211,238,0.10);
  max-width: 480px;
  margin: 0 auto;
  padding: 32px 24px;
  border: 1px solid #334155;
`;
const HEADER_STYLE = `
  text-align: center;
  margin-bottom: 24px;
`;
const TITLE_STYLE = `
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(90deg, #22d3ee 0%, #a21caf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 8px;
`;
const SUBTITLE_STYLE = `
  color: #a5b4fc;
  font-size: 1rem;
  margin-bottom: 24px;
`;
const LABEL_STYLE = `
  color: #38bdf8;
  font-weight: 500;
`;
const VALUE_STYLE = `
  color: #f1f5f9;
  font-weight: 400;
`;

function getLogo() {
  // You can replace this with your logo image if you have one
  return `<div style="font-size:2.2rem;font-weight:bold;letter-spacing:2px;color:#a21caf;">Jairus Valencia</div>`;
}

export async function sendEmail(to, subject, htmlContent) {
  const html = `
    <body style="${EMAIL_THEME_STYLE}">
      <div style="${CARD_STYLE}">
        <div style="${HEADER_STYLE}">
          ${getLogo()}
          <div style="${TITLE_STYLE}">Portfolio Contact</div>
          <div style="${SUBTITLE_STYLE}">You received a new message from your portfolio website.</div>
        </div>
        <div style="margin-bottom: 16px;">
          ${htmlContent}
        </div>
        <div style="margin-top:32px;text-align:center;color:#64748b;font-size:0.9rem;">
          &copy; ${new Date().getFullYear()} Jairus Valencia
        </div>
      </div>
    </body>
  `;

  const msg = {
    to,
    from: process.env.SENDGRID_VERIFIED_EMAIL, // Must be verified in SendGrid
    subject,
    html,
  };
  
  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    // Enhanced error logging for debugging
    console.error('SendGrid Error:', error?.response?.body || error);
    if (error?.response?.body) {
      console.error('SendGrid Error Body:', JSON.stringify(error.response.body, null, 2));
    }
    return { success: false, error: error.message };
  }
}

export async function sendAutoReply(to, name) {
  const html = `
    <body style="${EMAIL_THEME_STYLE}">
      <div style="${CARD_STYLE}">
        <div style="${HEADER_STYLE}">
          ${getLogo()}
          <div style="${TITLE_STYLE}">Thank You for Reaching Out!</div>
        </div>
        <div style="margin-bottom: 16px;">
          <p style="color:#f1f5f9;font-size:1.1rem;">Hello <span style="color:#f1f5f9;font-weight:bold;">${name}</span>,</p>
          <p style="color:#a5b4fc;">Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          <p style="margin-top:24px;color:#38bdf8;">Best regards,<br/>Jairus Valencia</p>
        </div>
        <div style="margin-top:32px;text-align:center;color:#64748b;font-size:0.9rem;">
          &copy; ${new Date().getFullYear()} Jairus Valencia
        </div>
      </div>
    </body>
  `;

  const msg = {
    to,
    from: process.env.SENDGRID_VERIFIED_EMAIL, // Must be verified in SendGrid
    subject: 'Thank you for contacting me!',
    html,
  };
  
  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    // Enhanced error logging for debugging
    console.error('AutoReply Error:', error?.response?.body || error);
    if (error?.response?.body) {
      console.error('AutoReply Error Body:', JSON.stringify(error.response.body, null, 2));
    }
    return { success: false, error: error.message };
  }
}
