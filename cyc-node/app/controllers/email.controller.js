

exports.create = (req, res) => {
    var nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:process.env.GMAIL_USER,
          pass:process.env.GMAIL_PASS,
        }
      });
    
   
    let mailOptions = {
        from: "cycfyp2022@gmail.com",
        to: req.body.email,
        subject:  req.body.subject,
        text: req.body.text
      };


    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
};