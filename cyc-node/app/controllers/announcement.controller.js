const db = require("../models");
const Announcement = db.announcements;
const Op = db.Sequelize.Op;

// Create and Save a new announcement
exports.create = (req, res) => {
  // Validate request
  if (!req.body.announcementTitle && !req.body.announcementType) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //Create a announcement
  const announcement = {
    announcementTitle: req.body.announcementTitle,
    announcementType: req.body.announcementType,
    announcementBody: req.body.announcementBody,
    announcementImg: req.body.announcementImg,
    announcementLink: req.body.announcementLink,
  };

  // Save Announcement in the database
  Announcement.create(announcement)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Announcement.",
      });
    });
};

// Retrieve all Announcements from the database.
exports.findAll = (req, res) => {
  const announcementTitle = req.query.announcementTitle;
  var condition = announcementTitle
    ? { announcementTitle: { [Op.like]: `%${announcementTitle}%` } }
    : null;

  Announcement.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving announcements.",
      });
    });
};

// Find a single Announcement with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log("here in announcement.controller exports.findOne");
  Announcement.findByPk(id)
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

// Update a Announcement by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Announcement.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Announcement was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Announcement with id=${id}. Maybe Announcement was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Announcement with id=" + id,
      });
    });
};

// Delete a Announcement with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Announcement.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Announcement was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Announcement with id=${id}. Maybe Announcement was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Announcement with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Announcement.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Trophies were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all trophies.",
      });
    });
};

exports.findAllPublished = (req, res) => {
  Announcement.findAll()
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
