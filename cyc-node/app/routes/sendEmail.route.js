module.exports = app => {
    const snedEmail = require("../controllers/sendEmail.controller.js");
    var router = require("express").Router();

    // Create a new email
    router.post("/", snedEmail.createMail);
    
}