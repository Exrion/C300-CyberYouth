

exports.create = (req, res) => {
    var nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: "cycfyp2022@gmail.com",
          pass: "^$Wha3KbMBkH4Aa*D%vbrxKA76Q55BKNQ@c$!#QS9w",
          clientId: "610493552508-f9i2qp90jufn1ajia1usvk50ugg6te5l.apps.googleusercontent.com",
          clientSecret: "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",
          refreshToken: "1//04X86t9bbZW5dCgYIARAAGAQSNwF-L9IrOyCNMOZpJ53opGNkc_fINT3SOg4Nu2SdrvEaxeqUsdbOoiQ-4pMf7TLRFGbkw40oHw0"
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