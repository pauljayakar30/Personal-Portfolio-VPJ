# Portfolio Backend Integration

This portfolio now includes a fully functional backend for handling contact form submissions with Google Sheets integration and email notifications.

## 🚀 Features

- **Contact Form Processing** - Handles form submissions from the portfolio
- **Google Sheets Integration** - Automatically saves submissions to a Google Sheet
- **Email Notifications** - Sends email alerts for new messages
- **Duplicate Prevention** - Prevents spam and duplicate submissions
- **CORS Protection** - Secure cross-origin requests
- **Serverless Ready** - Works with Vercel serverless functions

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy the `.env.example` file and configure your environment variables:

```bash
cp backend/.env.example backend/.env
```

Fill in the required values:

- **GOOGLE_CREDENTIALS_JSON**: Your Google Service Account credentials
- **GOOGLE_SHEET_ID**: Your Google Sheet ID
- **EMAIL_USER**: Your Gmail address
- **EMAIL_PASS**: Your Gmail app password
- **EMAIL_FROM**: Sender email address
- **EMAIL_TO**: Your email address for notifications

### 3. Google Sheets Setup

1. Create a Google Sheet with columns: `Timestamp | Name | Email | Subject | Message`
2. Create a Google Service Account
3. Share your sheet with the service account email
4. Add the credentials to your `.env` file

### 4. Gmail Setup

1. Enable 2-factor authentication on your Gmail account
2. Generate an app password for the backend
3. Use this app password in the `EMAIL_PASS` variable

## 🏃‍♂️ Running the Application

### Development (Frontend + Backend)
```bash
npm run dev:full
```

This runs both the Vite frontend (port 5173) and Express backend (port 5000).

### Frontend Only
```bash
npm run dev
```

### Backend Only
```bash
npm run dev:backend
```

## 🌐 Production Deployment

The backend is configured to work with Vercel serverless functions. When you deploy to Vercel:

1. Add all environment variables to your Vercel project settings
2. The `/api/contact` endpoint will automatically handle form submissions
3. No additional setup required - it uses the same Google Sheets and email configuration

## 📁 Backend Structure

```
backend/
├── server.js              # Express.js server for local development
├── googleSheetsService.js  # Google Sheets integration
├── emailService.js         # Email notification service
└── .env.example           # Environment variables template

api/
└── contact.js             # Vercel serverless function
```

## 🔧 API Endpoints

### POST `/contact` (Development)
### POST `/api/contact` (Production)

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully!"
}
```

## 🔒 Security Features

- **Rate Limiting** - Prevents spam submissions
- **Duplicate Detection** - Blocks identical submissions within 5 seconds
- **CORS Protection** - Only allows requests from your domain
- **Input Validation** - Validates all required fields
- **Error Handling** - Graceful error responses

## 🧪 Testing

Test your contact form by:

1. Running the development server
2. Filling out the contact form on your portfolio
3. Checking your Google Sheet for the new entry
4. Verifying you receive an email notification

Your portfolio contact form is now fully functional with backend integration!
