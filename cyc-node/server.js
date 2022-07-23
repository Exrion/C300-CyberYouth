require("dotenv").config();
const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

//Linkedin
// const session = require("express-session");
// const passport = require("passport");
// const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
// const routes = require("./routes.js");
// const config = require("./config");

// var corsOptions = {
//   origin: "http://localhost:3000",
// };

// app.use(cors(corsOptions));

// //Linkedin
// app.set("view engine", "ejs");

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: "SECRET",
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj);
// });

// passport.use(
//   new LinkedInStrategy(
//     {
//       clientID: config.linkedinAuth.clientID,
//       clientSecret: config.linkedinAuth.clientSecret,
//       callbackURL: config.linkedinAuth.callbackURL,
//       scope: ["r_emailaddress", "r_liteprofile"],
//     },
//     function (token, tokenSecret, profile, done) {
//       return done(null, profile);
//     }
//   )
// );

// app.use("/", routes);

// const port = 3000;

// app.listen(port, () => {
//   console.log("App listening on port " + port);
// });

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CYC application." });
});

require("./app/routes/trophy.routes")(app);
require("./app/routes/tier.routes")(app);
require("./app/routes/announcement.routes")(app);
require("./app/routes/track.routes")(app);
require("./app/routes/exchange.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/account.routes")(app);
//Email Service
require("./app/routes/email.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
