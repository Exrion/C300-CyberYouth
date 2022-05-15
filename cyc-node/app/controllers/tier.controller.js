const db = require("../models");
const Tier = db.tiers
const Op = db.Sequelize.Op;

// Create and Save a new Trophy
exports.create = (req, res) => {
  // Validate request
  if (!req.body.tier_name && !req.body.tier_description) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  //Create a trophy
  const tier = {
    tier_name: req.body.tier_name,
    tier_description: req.body.tier_description,
    tier_icon: req.body.tier_icon,
    grapes_needed: req.body.grapes_needed,
    lemons_awarded: req.body.lemons_awarded
  };

  // Save Tier in the database
  Tier.create(tier)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tier."
      });
    });
  
};

// Retrieve all Tiers from the database.
exports.findAll = (req, res) => {
  const trophy_name = req.query.trophy_name;
  var condition = trophy_name ? { trophy_name: { [Op.like]: `%${trophy_name}%` } } : null;

  Tier.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tiers."
      });
    });
};

// Update a Tier by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tier.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tier was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tier with id=${id}. Maybe Tier was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tier with id=" + id
      });
    });
};
