import express from 'express';
import cors from 'cors';
import { appendRowToSheet } from './googleSheetsService.js';
import { sendNotificationEmail } from './emailService.js';

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup - allow your frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://www.vasupauljayakar.tech'],
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true,
}));

// Parse JSON bodies
app.use(express.json());

// Simple in-memory deduplication cache
const recentSubmissions = new Map();

function dedupeMiddleware(req, res, next) {
  const { email, message } = req.body;
  if (!email || !message) return next();

  const key = email + ':' + message;
  const now = Date.now();

  // If a submission from this email/message was received in the last 5 seconds, ignore it
  if (recentSubmissions.has(key) && now - recentSubmissions.get(key) < 5000) {
    console.log('Duplicate submission blocked:', key);
    return res.status(429).json({ success: false, error: 'Duplicate submission detected.' });
  }

  recentSubmissions.set(key, now);

  // Clean up old entries
  for (const [k, t] of recentSubmissions) {
    if (now - t > 60000) recentSubmissions.delete(k);
  }

  next();
}

// Contact form endpoint
app.post('/contact', dedupeMiddleware, async (req, res) => {
  console.log('POST /contact handler called', new Date().toISOString());
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  try {
    // 1. Append to Google Sheet
    await appendRowToSheet([new Date().toISOString(), name, email, subject, message]);
  } catch (err) {
    console.error('Google Sheets error:', err);
    return res.status(500).json({ success: false, error: 'Could not save to Google Sheet.' });
  }

  try {
    // 2. Send email notification
    await sendNotificationEmail({ name, email, subject, message });
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ success: false, error: 'Saved to Google Sheet, but failed to send email.' });
  }

  res.json({ success: true, message: 'Form submitted successfully!' });
});

// Health check
app.get('/', (req, res) => res.send('Backend is running.'));

// Only start server if this file is run directly (not imported)
if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

export default app;
