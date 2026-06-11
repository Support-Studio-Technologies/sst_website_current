import { NextResponse } from 'next/server';
import ConsultationModel from '@/models/consultationModel';
import connectMongo from '../../../../utils/connectMongoDB';
import { sendEmail } from '../../../../utils/transport';

export async function GET() {
  try {
    await connectMongo();
    const contacts = await ConsultationModel.find({});
    return NextResponse.json(contacts);
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectMongo();

    const body = await req.json();
    const { email, message } = body;

    // Only email is required, message is optional
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const newContact = await ConsultationModel.create(body);

  await sendEmail({
  to: "abc@gmail.com", 
  subject: "New Consultation Request",
  text: `
    New Consultation Request Received

    A potential client is interested in scheduling a consultation.

    Contact Details:
    Email: ${email}
    ${message ? `Message: ${message}` : 'No additional message provided'}

    Please respond to this inquiry at your earliest convenience.
  `,
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background: #f9fafb; padding: 30px; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; }
        .info-box { background: white; padding: 20px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #667eea; }
        .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
        .value { color: #333; margin-bottom: 15px; }
        .footer { background: #f3f4f6; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; color: #6b7280; font-size: 14px; border: 1px solid #e5e7eb; border-top: none; }
        .cta-button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🗓️ New Consultation Request</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone wants to talk!</p>
        </div>
        
        <div class="content">
          <p>A potential client has expressed interest in scheduling a consultation with you.</p>
          
          <div class="info-box">
            <div class="label">📧 Email Address:</div>
            <div class="value"><a href="mailto:${email}" style="color: #667eea;">${email}</a></div>
            
            ${message ? `
              <div class="label">💬 Message:</div>
              <div class="value">${message}</div>
            ` : `
              <div class="value" style="color: #6b7280; font-style: italic;">No additional message provided</div>
            `}
          </div>

          <p style="margin-top: 20px;">
            <strong>Next Steps:</strong><br>
            Please reach out to this prospect within 24 hours to maximize engagement and schedule a consultation call.
          </p>
        </div>
        
        <div class="footer">
          <p>This is an automated notification from your consultation request form.</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">Received on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
        </div>
      </div>
    </body>
    </html>
  `,
});

    return NextResponse.json(
      { 
        success: true, 
        message: "Email saved and notification sent successfully", 
        data: newContact 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("POST Error:", error);

    if (error.code === 11000) {
      return NextResponse.json({ error: "This email is already registered" }, { status: 409 });
    }

    if (error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: "Failed to save email or send notification." }, { status: 500 });
  }
}