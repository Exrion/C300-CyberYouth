const db = require("../models");
const Exchange = db.exchanges;
const Op = db.Sequelize.Op;

// Create and Save a new Trophy
exports.create = (req, res) => {
  // Validate request
  if (!req.body.exchangeName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //Create a exchange
  const exchange = {
    exchangeName: req.body.exchangeName,
    exchangeDescription: req.body.exchangeDescription,
    exchangeImg: req.body.exchangeImg,
    lemonsEach: req.body.lemonsEach,
    deliveryMode: req.body.deliveryMode,
    exchangeStock: req.body.exchangeStock,
  };

  
  // Save Exchange in the database
  Exchange.create(exchange)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Exchange.",
      });
    });
};

// Retrieve all Exchanges from the database.
exports.findAll = (req, res) => {
  const exchangeName = req.query.exchangeName;
  var condition = exchangeName
    ? { exchangeName: { [Op.like]: `%${exchangeName}%` } }
    : null;

  Exchange.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving exchanges.",
      });
    });
};
// Find a single Trophies with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log("here in exchange.controller exports.findOne");
  Exchange.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Exchanges with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Exchanges with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Exchange.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Exchange was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Exchange with id=${id}. Maybe Exchange was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Exchange with id=" + id,
      });
    });
};

exports.findAllPublished = (req, res) => {
  Exchange.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
