const db = require("../models");
const Tier = db.tiers
const Op = db.Sequelize.Op;

// Create and Save a new Tier
exports.create = (req, res) => {
  // Validate request
  if (!req.body.tierName && !req.body.tierDescription) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  //Create a tier
  const tier = {
    tierName: req.body.tierName,
    tierDescription: req.body.tierDescription,
    tierIcon: req.body.tierIcon,
    grapesNeeded: req.body.grapesNeeded,
    lemonsAwarded: req.body.lemonsAwarded
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
//It works for me-Bjorn
// Retrieve all Tiers from the database.
exports.findAll = (req, res) => {
  const tierName = req.query.tierName;
  var condition = tierName ? { tierName: { [Op.like]: `%${tierName}%` } } : null;

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

exports.findOne = (req, res) => {
  const id = req.params.id;
  Tier.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tiers with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tier with id=" + id
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

//Delete a Tier by id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tier.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tier was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tier with id=${id}. Maybe Tier was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tier with id=" + id
      });
    });
}