# README: Email Sending API using NodeMailer

This README document outlines the `/api/email.js` module, a Node.js API endpoint for sending emails using NodeMailer. 

## Dependencies

- `nodemailer`: A module for Node.js applications to allow easy email sending. You must use npm install in the LabLink folder upon download to use this package.

## API Endpoint: `/api/email.js`

### Functionality
The module exports a single async function `handler` which is designed to respond to HTTP requests:
- **HTTP Method**: POST
- **Request Body**: Should contain the email details (sender, receiver, subject, body, etc.).
### Environment Variables
- `public_email`: The email address used as the sender.
- `public_email_password`: The password for the sender's email account.
- Methods to obtain: you must send an email by using the contact form to our email address and we will provide the email address password upon request. 
### Email Sending Logic
- **Transport Configuration**:
  - `host`: SMTP server host, configured for Outlook (`smtp-mail.outlook.com`).
  - `secureConnection`: Set to `false` to allow TLS.
  - `port`: Port 587 for secure SMTP.
  - `auth`: Authentication details, using environment variables for the user's email and password.
  - `tls`: TLS configuration set to use `SSLv3` ciphers.
- **Sending Email**:
  - Utilizes `transporter.sendMail(req.body)` to send an email, where `req.body` contains the email details.
  - On success, sends a 200 HTTP status code with the message 'Email sent successfully'.
  - On failure, logs the error and the request body, then sends a 500 HTTP status code with the message 'Error sending email'.
## Usage
- Import and use this module in a Node.js server to create an endpoint for email sending functionalities.
- Make sure to set the required environment variables for the sender's email credentials. Please do not replace the process.env.VARIABLES to the real secrets to prevent leaking.
