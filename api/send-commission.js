import { Resend } from 'resend';
import CommissionEmailTemplate from '../formtemplates/commissiontemplate.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, robloxUsername, discordUsername, commissionType, budget, timeline, description } = req.body;

  if (!name || !email || !robloxUsername || !commissionType || !budget || !timeline || !description) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const emailHtml = CommissionEmailTemplate({
      name,
      email,
      robloxUsername,
      commissionType,
      budget,
      timeline,
      description,
      discordUsername
    });

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "noahtruong123@gmail.com",
      replyTo: email,
      subject: `Commission Request from ${name}`,
      html: emailHtml
    });

    return res.status(200).json({ success: true, result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

