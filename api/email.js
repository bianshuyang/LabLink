// /api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Your email sending logic using NodeMailer
    const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
        user: process.env.public_email,
        pass:  process.env.public_email_password
    },
    tls: {
        ciphers:'SSLv3'
    }
});

    try {
      // req.body contains the POST data
      await transporter.sendMail(req.body);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.log(error);
      console.log(req.body);
      res.status(500).send('Error sending email');
    }
  } else {
    // Handle any other HTTP method
    res.status(405).send('Method not allowed');
  }
}
