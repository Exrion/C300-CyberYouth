const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// //Login Functionality
// app.use("/Login", (req, res) => {
//   res.send({
//     token: "test123",
//   });
// });

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");

db.sequelize.sync();
//initial();
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

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// function initial() {
//   Role.create({
//     id: 1,
//     name: "admin"
//   });}
