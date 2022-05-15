const db = require("../models");
const Trophy = db.trophies;
const Op = db.Sequelize.Op;

// Create and Save a new Trophy
exports.create = (req, res) => {
  // Validate request
  if (!req.body.trophyName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //Create a trophy
  const trophy = {
    trophyName: req.body.trophyName,
    trophyDescription: req.body.trophyDescription,
    totalProgress: req.body.totalProgress,
    totalLvl: req.body.totalLvl,
    trophyLemons: req.body.trophyLemons,
  };

  
  // Save Trophy in the database
  Trophy.create(trophy)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// Retrieve all Trophies from the database.
exports.findAll = (req, res) => {
  const trophyName = req.query.trophyName;
  var condition = trophyName
    ? { trophyName: { [Op.like]: `%${trophyName}%` } }
    : null;

  Trophy.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving trophys.",
      });
    });
};
// Find a single Trophies with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Trophy.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Trophies with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Trophies with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Trophy.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Trophy was updated successfully.",
        });
      } else {
        res.send({
<<<<<<< HEAD
          message: `Cannot update Tutorial with id=${id}. Maybe Tracks was not found or req.body is empty!`
=======
          message: `Cannot update Trophy with id=${id}. Maybe Trophy was not found or req.body is empty!`,
>>>>>>> da91c6069f6ddfd0968600377ea007f2aaad9821
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Trophy with id=" + id,
      });
    });
};

exports.findAllPublished = (req, res) => {
  Trophy.findAll()
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
