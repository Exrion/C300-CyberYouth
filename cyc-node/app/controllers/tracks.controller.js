const db = require("../models");
const Tracks = db.tracks
const Op = db.Sequelize.Op;

const tracks = {
  trackName: req.body.trackName,
  trackDescription: req.body.trackDescription,
  totalProvider: req.body.totalProvider,
  trackLink: req.body.trackLink,
  trackTags: req.body.trackTags,
  trackLemons: req.body.trackLemons
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const trackName = req.query.trackName;
    var condition = trackName ? { trackName: { [Op.like]: `%${trackName}%` } } : null;
    Tracks.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tracks."
        });
      });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const trackId = req.params.id;
    Tracks.findByPk(trackId)
      .then(data => {
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
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const trackId = req.params.id;
    Tracks.update(req.body, {
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
