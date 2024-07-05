/**
 * FOR USE WITH AN EXPRESS SERVER APPLICATION 
 * USING GMAIL FOR THE EXAMPLE
 * 
 */


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Change this port as needed
// const discordRes = 'https://discord.gg/PVtH2RBY'
// Middleware to parse JSON bodies
app.use(bodyParser.json());


app.get('/get-discord-invite', (req, res) => {
    // Optional: Check if the user is authenticated or meets certain criteria
    if (req.isAuthenticated()) {
        res.json({ url: 'https://discord.gg/PVtH2RBY' });
    } else {
        res.status(403).json({ error: 'Authentication required' });
    }
});

// POST route to handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Create a nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '123fakeaccount@gmail.com', // Your Gmail account
            pass: 'your_gmail_password' // Your Gmail password or an app password
        }
    });

    // Construct email message
    const mailOptions = {
        from: '123fakeaccount@gmail.com',
        to: 'recipient_email@example.com',
        subject: 'New Form Submission',
        text: JSON.stringify(formData)
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
