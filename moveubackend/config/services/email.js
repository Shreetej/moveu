const nodeMailer = require('nodemailer');
const config = require('config');

const host = config.get('emailhost');
const port = config.get('emailport');
const username = config.get('auth.user');
const password = config.get('auth.password');

exports.sendMail = function (req, res) {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,  //true for 465 port
        auth: {
            user: username,
            pass: password
        }
    });

    const mailOptions = {
        from: '"Shreetej" <sunny.king21@gmail.com>', // sender address
        to: 'rghricks@gmail.com, shreetejghodekar@gmail.com', // list of receivers
        subject: 'Enquiry - Move You', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world</b><h2>Welcome to Move You</h2>' // html body

    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // res.status(400).send({ success: false })
            console.log(error)
        } else {
            // res.status(200).send({ success: true });
            console.log("Mail sent successfully.")
        }
    });
}