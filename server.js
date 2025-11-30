import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';
import CommissionEmailTemplate from './formtemplates/commissiontemplate.js';
import ContactEmailTemplate from './formtemplates/contacttemplate.js';
import { renderToStaticMarkup } from 'react-dom/server';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Allow requests from your React app
app.use(express.json()); // Parse JSON request bodies

// Initialize Resend
const resend = new Resend(process.env.VITE_Resend_API_Key);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Email API server is running' });
});

// Commission email endpoint
app.post('/api/send-commission', async (req, res) => {
  try {
    const { name, email, robloxUsername, discordUsername, commissionType, budget, timeline, description } = req.body;

    // Validate required fields
    if (!name || !email || !robloxUsername || !commissionType || !budget || !timeline || !description) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    const emailHtml = CommissionEmailTemplate({
        robloxUsername, 
        commissionType, 
        budget, 
        timeline, 
        description, 
        name, 
        discordUsername, 
        email
      });

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'noahtruong123@gmail.com',
      replyTo: email,
      subject: `Commission Request from ${name}`,
      html: emailHtml,
    });

    console.log('✅ Email sent successfully:', result);

    res.json({ 
      success: true, 
      message: 'Email sent successfully',
      data: result 
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to send email' 
    });
  }
});

// Contact email endpoint
app.post('/api/send-contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required contact fields",
      });
    }

    const emailHtml = ContactEmailTemplate({
        name,
        email,
        subject,
        message
      });

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "noahtruong123@gmail.com",
      replyTo: email,
      subject: `Inquiry about ${subject}`,
      html: emailHtml,
    });

    console.log("📨 Contact form email sent:", result);

    res.json({
      success: true,
      message: "Contact message sent successfully",
      data: result,
    });
  } catch (error) {
    console.error("❌ Error sending contact email:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to send contact message",
    });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Email API server running on http://localhost:${PORT}`);
  console.log(`📧 Commission endpoint: http://localhost:${PORT}/api/send-commission`);
});

