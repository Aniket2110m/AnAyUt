1. Install dependencies:
   npm install

2. Set up your .env file:
   - MONGO_URI: Your MongoDB connection string
   - EMAIL_USER: Your email address (Gmail recommended)
   - EMAIL_PASS: Your email password or app password
   - EMAIL_TO: Destination email for contact form submissions

3. Start the server:
   npm start

The backend will listen on port 5000 by default.

Frontend contact form should POST to /api/contact with JSON:
{
  name: "...",
  email: "...",
  company: "...",
  msg: "..."
}
