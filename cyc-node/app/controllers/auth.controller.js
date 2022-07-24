const db = require("../models");
const config = require("../config/auth.config");
const Account = db.account;
const Role = db.role;
const { Op } = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
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
