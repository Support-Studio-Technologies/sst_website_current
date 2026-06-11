import { NextResponse } from 'next/server';
import BookacallModel from '@/models/bookacallModel';
import connectMongo from '../../../../utils/connectMongoDB';
import { sendEmail } from '../../../../utils/transport';

export async function GET() {
  try {
    await connectMongo();
    const contacts = await BookacallModel.find({});
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
    const { name, email, companyName, country, message } = body;

    if (!name  || !email || !companyName || !country || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newContact = await BookacallModel.create(body);

    await sendEmail({
      to: "xatocej275@aiwanlab.com", 
      subject: "New Book a call Form Submission",
      text: `
        New Book a call form submitted:
        Name: ${name} 
        Email: ${email}
        Company Name: ${companyName}
        Country: ${country}
        Message: ${message}
      `,
      html: `
        <h2>New Book a call Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company Name: ${companyName}</p>
        <p><b>Country:</b> ${country}</p>
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