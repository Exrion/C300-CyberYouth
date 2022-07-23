// const { URLSearchParams } = require("url");
// const fetch = require("node-fetch");

// const LINKEDIN_ACCESS_TOKEN = `https://www.linkedin.com/oauth/v2/accessToken`;
// const LINKEDIN_CLIENT_ID = "86h0tc10xi54pb";
// const LINKEDIN_CLIENT_SECRET = "CrUvjjfktcGaOHwE";
// const LINKEDIN_RIDERECT_URI = "http://localhost:3000/home";
// const LINKEDIN_NAME_URL = "https://api.linkedin.com/v2/me";
// const LINKEDIN_EMAIL_URL =
//   "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))";

// const fetchJSON = (...args) => fetch(...args).then((r) => r.json());

// const getValidatedWithLinkedinUser = async (code) => {
//   const body = new URLSearchParams({
//     grant_type: "authorization_code",
//     code,
//     redirect_uri: LINKEDIN_RIDERECT_URI,
//     client_id: LINKEDIN_CLIENT_ID,
//     client_secret: LINKEDIN_CLIENT_SECRET,
//   });
//   const { access_token } = await fetchJSON(LINKEDIN_ACCESS_TOKEN, {
//     method: "POST",
//     body,
//   });
//   const payload = {
//     method: "GET",
//     headers: { Authorization: `Bearer ${access_token}` },
//   };
//   const { localizedFirstName, localizedLastName, id } = await fetchJSON(
//     LINKEDIN_NAME_URL,
//     payload
//   );
//   const { elements } = await fetchJSON(LINKEDIN_EMAIL_URL, payload);

//   return {
//     name: `${localizedFirstName} ${localizedLastName}`,
//     email: elements[0]["handle~"].emailAddress,
//     id,
//   };
// };
