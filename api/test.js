export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  // Check environment variables without exposing sensitive data
  const envCheck = {
    NODE_ENV: process.env.NODE_ENV,
    hasGoogleCredentials: !!process.env.GOOGLE_CREDENTIALS_JSON,
    hasGoogleSheetId: !!process.env.GOOGLE_SHEET_ID,
    hasEmailUser: !!process.env.EMAIL_USER,
    hasEmailPass: !!process.env.EMAIL_PASS,
    hasEmailFrom: !!process.env.EMAIL_FROM,
    hasEmailTo: !!process.env.EMAIL_TO,
    googleSheetIdLength: process.env.GOOGLE_SHEET_ID?.length || 0,
    emailUserDomain: process.env.EMAIL_USER?.split('@')[1] || 'not set'
  };

  res.json({ 
    success: true, 
    message: 'Test endpoint working',
    environment: envCheck,
    timestamp: new Date().toISOString()
  });
};
