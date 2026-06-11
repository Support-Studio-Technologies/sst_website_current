import { NextResponse } from 'next/server';
import ContactModel from '@/models/contactModel';
import connectMongo from '../../../../utils/connectMongoDB';
import { sendEmail } from '../../../../utils/transport';

export async function GET() {
  try {
    await connectMongo();
    const contacts = await ContactModel.find({});
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
    const { firstName, lastName, cmpnyEmail, contactNumber, country, companyName, message } = body;

    if (!firstName || !lastName || !cmpnyEmail || !contactNumber || !country || !companyName || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newContact = await ContactModel.create(body);

    await sendEmail({
      to: "xatocej275@aiwanlab.com", 
      subject: "New Contact Form Submission",
      text: `
        New contact form submitted:
        Name: ${firstName} ${lastName}
        Email: ${cmpnyEmail}
        Phone: ${contactNumber}
        Country: ${country}
        Company: ${companyName}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${cmpnyEmail}</p>
        <p><b>Phone:</b> ${contactNumber}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Company:</b> ${companyName}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Contact saved & email sent successfully", data: newContact },
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

    return NextResponse.json({ error: "Failed to save contact or send email." }, { status: 500 });
  }
}