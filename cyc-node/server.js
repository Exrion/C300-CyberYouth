require("dotenv").config();
const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

//Linkedin
const axios = require("axios");
const qs = require("query-string");
app.use(cors());

// Constand
const urlToGetLinkedInAccessToken =
  "https://www.linkedin.com/oauth/v2/accessToken";
const urlToGetUserProfile =
  "https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))";
const urlToGetUserEmail =
  "https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))";

app.get("/getUserCredentials", function (req, res) {
  const user = {};
  const code = req.query.code;
  const accessToken = getAccessToken(code);
  const userProfile = getUserProfile(accessToken);
  const userEmail = getUserEmail(accessToken);
  let resStatus = 400;
  if (!(accessToken === null || userProfile === null || userEmail === null)) {
    user = userBuilder(userProfile, userEmail);
    resStatus = 200;
  }
  // Here, you can implement your own login logic
  // to authenticate new user or register him
  res.status(resStatus).json({ user });
});

/**
 * Get access token from LinkedIn
 * @param code returned from step 1
 * @returns accessToken if successful or null if request fails
 */
function getAccessToken(code) {
  let accessToken = null;
  const config = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  };
  const parameters = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: process.env.REDIRECT_URI,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  };
  axios
    .post(urlToGetLinkedInAccessToken, qs.stringify(parameters), config)
    .then((response) => {
      accessToken = response.data["access_token"];
    })
    .catch((err) => {
      console.log("Error getting LinkedIn access token");
    });
  return accessToken;
}

/**
 * Get user first and last name and profile image URL
 * @param accessToken returned from step 2
 */
function getUserProfile(accessToken) {
  let userProfile = null;
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  axios
    .get(urlToGetUserProfile, config)
    .then((response) => {
      userProfile.firstName = response.data["localizedFirstName"];
      userProfile.lastName = response.data["localizedLastName"];
      userProfile.profileImageURL =
        response.data.profilePicture[
          "displayImage~"
        ].elements[0].identifiers[0].identifier;
      // I mean, couldn't they have burried it any deeper?
    })
    .catch((error) => console.log("Error grabbing user profile"));
  return userProfile;
}

/**
 * Get user email
 * @param accessToken returned from step 2
 */
function getUserEmail(accessToken) {
  const email = null;
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  axios
    .get(urlToGetUserEmail, config)
    .then((response) => {
      email = response.data.elements[0]["handle~"];
    })
    .catch((error) => console.log("Error getting user email"));

  return email;
}

/**
 * Build User object
 */
function userBuilder(userProfile, userEmail) {
  return {
    firstName: userProfile.firstName,
    lastName: userProfile.lastName,
    profileImageURL: userProfile.profileImageURL,
    email: userEmail,
  };
}

app.listen(3000, function () {
  console.log(`Node server running...`);
});

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
