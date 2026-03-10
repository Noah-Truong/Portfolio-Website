import { Resend } from 'resend';

function contactEmailHtml({ name, email, subject, message }) {
  return `
  <div style="font-family: Arial; padding: 20px;">
    <h1 style="color:rgb(34, 227, 13);">Message from ${name}</h1>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Reply to:</strong> ${email}</p>
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
  `;
}

export async function POST(request) {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailHtml = contactEmailHtml({ name, email, subject, message });

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'noahtruong123@gmail.com',
      replyTo: email,
      subject: `Inquiry about ${subject}`,
      html: emailHtml,
    });

    return Response.json({ success: true, result });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
