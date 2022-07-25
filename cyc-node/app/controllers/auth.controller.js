const db = require("../models");
const config = require("../config/auth.config");
var mailer = require('./sendEmail.controller');
const Account = db.account;
const Role = db.role;
const { Op } = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var firstEmailOnBoot = true;

var lastEmailSentDate = (new Date());
exports.signup = (req, res) => {
  // Save User to Database
  Account.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    locked: false,
    twoFA: Math.floor(1000 + Math.random() * 9000),
  })
    .then((account) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          account.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        account.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.signin = (req, res) => {
  Account.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((account) => {
      if (!account) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        account.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      // var token = jwt.sign({ id: account.id }, config.secret, {
      //   expiresIn: 86400, // 24 hours
      // });
      var authorities = [];
      account.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        if (account.locked) {
          res.status(423).send({
            accessToken: null,
            message: "Account is locked",
          });
        } else { 
          var currentDate = new Date();
          var seconds = (currentDate - lastEmailSentDate) / 1000;
          if(seconds > 60 || firstEmailOnBoot)
          {
            mailer.createMail(
              account.email,
              "CYC ADMIN ACCOUNT 2FA",
              "2FA code used for login. If you did not just attempt to login, your account is at risk. \n 2FA CODE: "+ account.twoFA +" \nTime 2FA code was sent: "+currentDate.toLocaleString() + " SGT" ,
            ) 
            lastEmailSentDate = currentDate;
            firstEmailOnBoot = false;
          }
          else{
            console.log("Waiting 60 seconds");
          }
          res.status(200).send({
            message: "Valid Account",
            username: account.username,
            locked: account.locked,
          });
        }
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


exports.signinTwoFA = (req, res) => {
  Account.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((account) => {
      if (!account) {
        return res.status(404).send({ message: "User Not found." });
      }
      var twoFA = (
        parseInt(req.body.twoFA) ===
        parseInt(account.twoFA)
      );
      if (!twoFA) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid twoFA Token!",
        });
      }
      var token = jwt.sign({ id: account.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
      var authorities = [];
      account.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        if (account.locked) {
          res.status(423).send({
            accessToken: null,
            message: "Account is locked",
          });
        } else {
          let newTwoFA = {twoFA: Math.floor(1000 + Math.random() * 9000)} 
          Account.update(newTwoFA, {
            where: { username: req.body.username },
          })

          res.status(200).send({
            id: account.id,
            username: account.username,
            email: account.email,
            roles: authorities,
            locked: account.locked,
            token: token,
          });
        }
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


exports.lockaccount = (req, res) => {
  Account.update(req.body, {
    where: { username: req.body.username },
  })
    .then((num) => {
      if (num == 1) {
        Account.findOne({
          where: {
            username: req.body.username,
          },
        })
          .then((account) => {
            var currentDate = new Date();
            mailer.createMail(
              account.email,
              "URGENT! CYC ADMIN ACCOUNT LOCKED",
              "Your account has been locked due to suspicious activity. Immediate action required. \n Account locked at :"+ currentDate.toLocaleString() + " SGT" ,
            )
          })
        
        res.send({
          message: "Account was locked successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Account with username=${username}. Maybe Account was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Account with username=" + username,
      });
    });
};

exports.unlockaccount = (req, res) => {
  Account.update(req.body, {
    where: { username: req.body.username },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Account was unlocked successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Account with username=${username}. Maybe Account was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Account with username=" + username,
      });
    });
};