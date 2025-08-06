// Simple in-memory deduplication cache (will reset on serverless cold start)
const recentSubmissions = new Map();

export default async (req, res) => {
  // Always set CORS headers - allow both your domains
  const allowedOrigins = [
    'https://www.vasupauljayakar.tech',
    'https://personal-portfolio-vpj.vercel.app',
    'https://personal-portfolio-vpj-git-test-pauljayakar30.vercel.app',
    'https://personal-portfolio-vpj-git-test-vasu-paul-jayakars-projects.vercel.app', // Your actual test URL
    'https://personal-portfolio-vpj-vasu-paul-jayakars-projects.vercel.app' // Possible production URL
  ];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Fallback for development or unlisted domains
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    console.log('OPTIONS request received from:', req.headers.origin);
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    console.log('Invalid method:', req.method);
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  console.log('POST request received from:', req.headers.origin);
  console.log('Request body:', req.body);

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
    console.log('Starting backend processing...');
    console.log('Environment variables check:', {
      hasGoogleCredentials: !!process.env.GOOGLE_CREDENTIALS_JSON,
      hasGoogleSheetId: !!process.env.GOOGLE_SHEET_ID,
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS
    });
    
    // Use dynamic import for serverless compatibility
    const { appendRowToSheet } = await import('../backend/googleSheetsService.js');
    const { sendNotificationEmail } = await import('../backend/emailService.js');
    
    console.log('Backend modules imported successfully');
    
    // Save to Google Sheets with source identifier
    const source = 'Personal-Portfolio-VPJ'; // Identifier for this portfolio
    console.log('Attempting to save to Google Sheets...');
    await appendRowToSheet([new Date().toISOString(), name, email, subject, message, source]);
    console.log('Google Sheets save successful');
    
    // Send email notification
    console.log('Attempting to send email notification...');
    await sendNotificationEmail({ name, email, subject, message });
    console.log('Email notification sent successfully');
    
    res.json({ success: true, message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('Backend error details:', {
      message: err.message,
      stack: err.stack,
      name: err.name
    });
    res.status(500).json({ 
      success: false, 
      error: 'Server error occurred while processing your request.',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};
