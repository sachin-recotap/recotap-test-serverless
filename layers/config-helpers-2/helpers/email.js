'use strict';
const config = require('/opt/config/vpc'),
    path = require('/opt/node_modules/path'),
    nodemailer = require('/opt/node_modules/nodemailer'),
    smtpTransport = nodemailer.createTransport(config.mailer.options);

exports.sendEmail = (mailOptions) => {
    smtpTransport.sendMail(mailOptions, function (err) {
        if (!err) {
            return({
                message: 'email_success'
            });
        } else {
            return ({message: 'email_failed'});
        }
    });
};