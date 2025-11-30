import { Resend } from 'resend';
import ContactEmailTemplate from '../formtemplates/contacttemplate.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const emailHtml = ContactEmailTemplate({ name, email, subject, message });

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "noahtruong123@gmail.com",
      replyTo: email,
      subject: `Inquiry about ${subject}`,
      html: emailHtml,
    });

    return res.status(200).json({ success: true, result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
