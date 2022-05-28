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
    trophyIcon: req.body.trophyIcon,
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
          err.message || "Some error occurred while creating the Trophy.",
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
// Find a single Trophy with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log("here in trophy.controller exports.findOne");
  Trophy.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Trophies with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Trophies with id=" + id
      });
    });
};

// Update a Trophy by the id in the request
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
          message: `Cannot update Trophy with id=${id}. Maybe Tracks was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Trophy with id=" + id
      });
    });
};


// Delete a Trophy with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Trophy.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Trophy was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Trophy with id=${id}. Maybe Trophy was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Trophy with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Trophy.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Trophies were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all trophies."
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
          err.message || "Some error occurred while retrieving Trophies.",
      });
    });
};
