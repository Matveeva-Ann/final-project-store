const nodemailer = require("nodemailer");

module.exports = async (subscriberMail, letterSubject, letterHtml, res) => {
  //authorization for sending email
  let transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_SERVICE,
    port: process.env.NODEMAILER_PORT,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: subscriberMail,
    subject: letterSubject,
    html: letterHtml,
    // attachments: [
    //   {
    //     filename: "logo.png",
    //     path: "/logo.png",
    //     cid: "logo"
    //   }
    // ]
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
};
