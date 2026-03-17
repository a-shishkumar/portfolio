export const generateEmailTemplate = (name: string, email: string, subject: string, message: string) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Request</title>
  </head>
  <body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f5; margin: 0; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #e4e4e7;">
      <div style="background: #0d9488; padding: 30px 32px; text-align: center;">
        <h2 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">New Collaboration Request</h2>
        <p style="margin: 6px 0 0 0; color: #ccfbf1; font-size: 15px;">You have received a new message from your portfolio.</p>
      </div>
      <div style="padding: 32px;">        
        <div style="margin-bottom: 24px;">
          <div style="font-size: 11px; text-transform: uppercase; color: #0d9488; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 4px;">From</div>
          <div style="font-size: 16px; color: #09090b; font-weight: 500;">${name}</div>
        </div>
        
        <div style="margin-bottom: 24px;">
          <div style="font-size: 11px; text-transform: uppercase; color: #0d9488; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 4px;">Email Address</div>
          <div style="font-size: 16px; color: #09090b; font-weight: 500;"><a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a></div>
        </div>

        <div style="margin-bottom: 24px;">
          <div style="font-size: 11px; text-transform: uppercase; color: #0d9488; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 4px;">Reference / Subject</div>
          <div style="font-size: 16px; color: #09090b; font-weight: 500;">${subject}</div>
        </div>

        <div style="margin-top: 32px;">
          <div style="font-size: 11px; text-transform: uppercase; color: #0d9488; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 8px;">Briefing Summary</div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-size: 15px; color: #334155; white-space: pre-wrap;">${message}</div>
        </div>
      </div>
      <div style="background: #f8fafc; padding: 24px 32px; text-align: center; color: #64748b; font-size: 13px; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0 0 4px 0;">This message was strictly confidential and sent securely.</p>
        <p style="margin: 0;">&copy; ${new Date().getFullYear()} Ashish's Portfolio Platform</p>
      </div>
    </div>
  </body>
  </html>
  `;
};

export const generateAutoReplyTemplate = (name: string) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Received</title>
  </head>
  <body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f5; margin: 0; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #e4e4e7;">
      <div style="background: #0d9488; padding: 30px 32px; text-align: center;">
        <h2 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">Message Received</h2>
        <p style="margin: 6px 0 0 0; color: #ccfbf1; font-size: 15px;">Thank you for reaching out.</p>
      </div>
      <div style="padding: 32px;">
        <p style="font-size: 16px; color: #334155; margin-bottom: 20px;">Hi ${name},</p>
        <p style="font-size: 16px; color: #334155; margin-bottom: 20px;">
          This is an automated confirmation that I have successfully received your message through my portfolio's contact portal.
        </p>
        <p style="font-size: 16px; color: #334155; margin-bottom: 30px;">
          I am currently reviewing your inquiry and will connect with you shortly regarding the details. You can typically expect a response within a few hours.
        </p>
        <div style="font-size: 16px; color: #334155;">
          Best regards,<br>
          <strong style="color: #0d9488;">Ashish</strong><br>
          <span style="font-size: 14px; color: #64748b;">Full Stack MERN Developer</span>
        </div>
      </div>
      <div style="background: #f8fafc; padding: 24px 32px; text-align: center; color: #64748b; font-size: 13px; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0;">This is an automated reply. Please do not reply directly to this email unless you wish to add further details.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};
