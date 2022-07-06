module.exports = app => {
    const email = require("../controllers/email.controller.js");
    var router = require("express").Router();

    // Create a new email
    router.post("/", email.create);

    app.use('/api/sendmail', router)
}