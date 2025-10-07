require('dotenv').config();
const nodemailer = require('nodemailer');

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.NODE_USER,         // Replace with your email
        pass: process.env.NODE_PASS                    // Replace with your app password (not Gmail password)
    }
});

// Send mail function
function sendMail(to, sub, msg) {
    transporter.sendMail({
        to: to,
        subject: sub,
        html: msg
    }, (err, info) => {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// Call the function with email details
sendMail('parassaxenaofficial@gmail.com', 'This is SUBJECT', 'This is the HTML message content testing');
