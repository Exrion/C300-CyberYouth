const db = require("../models");
const Trophy = db.trophies
const Op = db.Sequelize.Op;

// Create and Save a new Trophy
exports.create = (req, res) => {
  // Validate request
  if (!req.body.trophy_name && !req.body.trophy_description) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  //Create a trophy
  const trophy = {
    trophy_name: req.body.trophy_name,
    trophy_description: req.body.trophy_description,
    total_progress: req.body.total_progress,
    total_lvl: req.body.total_lvl,
    trophy_lemons: req.body.trophy_lemons,
    created_at: req.body.created_at,
    modified_at: req.body.modified_at
  };

  // Save Trophy in the database
  Trophy.create(trophy)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const trophy_name = req.query.trophy_name;
  var condition = trophy_name ? { trophy_name: { [Op.like]: `%${trophy_name}%` } } : null;

  Trophy.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
