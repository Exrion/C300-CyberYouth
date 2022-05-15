const db = require("../models");
const Announcement = db.announcements
const Op = db.Sequelize.Op;

// Create and Save a new announcement
exports.create = (req, res) => {
  // Validate request
  if (!req.body.announcementTitle && !req.body.announcementType) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  //Create a announcement
  const announcement = {
    announcementTitle: req.body.announcementTitle,
    announcementType: req.body.announcementType,
    announcementBody: req.body.announcementBody,
    announcementImg: req.body.announcementImg,
    announcementLink: req.body.announcementLink
  };

  // Save Announcement in the database
  Announcement.create(announcement)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Announcement."
      });
    });
  
};

// Retrieve all Announcements from the database.
exports.findAll = (req, res) => {
  const announcementTitle = req.query.announcementTitle;
  var condition = announcementTitle ? { announcementTitle: { [Op.like]: `%${announcementTitle}%` } } : null;

  Announcement.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving announcements."
      });
    });
};

// Update a Announcement by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Announcement.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Announcement was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Announcement with id=${id}. Maybe Announcement was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Announcement with id=" + id
      });
    });
};
