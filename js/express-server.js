/**
 * FOR USE WITH AN EXPRESS SERVER APPLICATION
 * 
 */


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Change this port as needed

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST route to handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        /* 
        Configure your email transport options here.
        For example, you can use SMTP transport:
        service: 'Gmail',
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_email_password'
        }
        */
    });

    // Construct email message
    const mailOptions = {
        from: 'your_email@gmail.com', // Sender address
        to: 'recipient_email@example.com', // Receiver address
        subject: 'New Form Submission', // Subject line
        text: JSON.stringify(formData), // Plain text body
        // You can customize the email message format as needed
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Form data submitted successfully' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});
