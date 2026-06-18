import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    // Fallback if environment variables are not set (logs the form submission)
    if (!host || !port || !user || !pass) {
      console.warn("SMTP environment variables are not configured. Logging contact form submission instead:", { name, email, phone, message });
      return NextResponse.json({ success: true, message: "Mock success (SMTP credentials missing)" });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: parseInt(port),
      secure: port === "465", // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${user}>`, // Sender address must be authenticated
      to: "info@khimiconsulting.mn", // Target recipient
      replyTo: email, // Reply-to email of the user
      subject: `Contact Form Submission from ${name}`,
      text: `Нэр: ${name}\nУтасны дугаар: ${phone}\nИмэйл хаяг: ${email}\n\nЗурвас:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 550 }
    );
  }
}
