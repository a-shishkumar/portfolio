import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateEmailTemplate, generateAutoReplyTemplate } from '@/lib/email-template';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'ashishkr.0727@gmail.com',
        pass: process.env.EMAIL_PASS || 'orvf fzrw yisq vklz',
      },
    });

    // Email to portfolio owner
    const ownerMailOptions = {
      from: `"${name} (Portfolio Form)" <ashishkr.0727@gmail.com>`,
      replyTo: email,
      to: 'ashishkr.0727@gmail.com',
      subject: `New Portfolio Message: ${subject}`,
      html: generateEmailTemplate(name, email, subject, message),
    };

    // Auto-reply to sender
    const senderMailOptions = {
      from: `"Ashish" <ashishkr.0727@gmail.com>`,
      to: email,
      subject: `Re: ${subject} - Message Received`,
      html: generateAutoReplyTemplate(name),
    };

    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(senderMailOptions)
    ]);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
