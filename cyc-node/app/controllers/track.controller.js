const db = require("../models");
const Track = db.tracks;
const Op = db.Sequelize.Op;



// Create and Save a new Track
exports.create = (req, res) => {
  // Validate request
  if (!req.body.trackName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }



const track = {
  trackName: req.body.trackName,
  trackDescription: req.body.trackDescription,
  trackProvider: req.body.trackProvider,
  trackLink: req.body.trackLink,
  trackTags: req.body.trackTags,
  trackLemons: req.body.trackLemons
};


// Save Track in the database
Track.create(track)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the Track."
  });
});

};

// Retrieve all Tracks from the database.
exports.findAll = (req, res) => {
    const trackName = req.query.trackName;
    var condition = trackName ? { trackName: { [Op.like]: `%${trackName}%` } } : null;
    Track.findAll({ where: condition })
      .then((data) => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tracks."
        });
      });
};
// Find a single Tracks with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Track.findByPk(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tracks with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Track with id=" + id
        });
      });
};
// Update a Track by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Track.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tracks was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tracks with id=${id}. Maybe Tracks was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tracks with id=" + id
        });
      });
  };


//Delete a Track by id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Track.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Track was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Track with id=${id}. Maybe Track was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Track with id=" + id
      });
    });
}
