// Simple in-memory deduplication cache (will reset on serverless cold start)
const recentSubmissions = new Map();

export default async (req, res) => {
  // Always set CORS headers - allow both your domains
  const allowedOrigins = [
    'https://www.vasupauljayakar.tech',
    'https://personal-portfolio-vpj.vercel.app',
    'https://personal-portfolio-vpj-git-test-pauljayakar30.vercel.app' // test branch
  ];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  // Only process POST here
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    res.status(400).json({ success: false, error: 'All fields are required.' });
    return;
  }

  // Deduplication: block duplicate submissions within 5 seconds
  const key = email + ':' + message;
  const now = Date.now();
  if (recentSubmissions.has(key) && now - recentSubmissions.get(key) < 5000) {
    console.log('Duplicate submission blocked:', key);
    res.status(429).json({ success: false, error: 'Duplicate submission detected.' });
    return;
  }
  recentSubmissions.set(key, now);
  
  // Clean up old entries
  for (const [k, t] of recentSubmissions) {
    if (now - t > 60000) recentSubmissions.delete(k);
  }

  try {
    // Use dynamic import for serverless compatibility
    const { appendRowToSheet } = await import('../backend/googleSheetsService.js');
    const { sendNotificationEmail } = await import('../backend/emailService.js');
    
    // Save to Google Sheets with source identifier
    const source = 'Personal-Portfolio-VPJ'; // Identifier for this portfolio
    await appendRowToSheet([new Date().toISOString(), name, email, subject, message, source]);
    
    // Send email notification
    await sendNotificationEmail({ name, email, subject, message });
    
    res.json({ success: true, message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('Backend error:', err);
    res.status(500).json({ success: false, error: 'Server error occurred while processing your request.' });
  }
};
