/**
 * FOR USE WITH A JSON SERVER
 */

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router({});
const middlewares = jsonServer.defaults();
const nodemailer = require('nodemailer');

// Use JSON middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Set up a POST route to handle form submissions
server.post('/submit-form', (req, res) => {
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
        from: 'clan_email@gmail.com', // Sender address
        to: 'recipient_email@example.com', // Receiver address -- can be passed in as a variable from Discord
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

// Use router middleware
server.use(router);

// Start server
server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});
