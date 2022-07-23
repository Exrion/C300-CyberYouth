// import { LINKEDIN_SCOPE, LINKEDIN_AUTH_URL } from "./auth.component";

// const getURLWithQueryParams = (base, params) => {
//   const query = Object.entries(params)
//     .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
//     .join("&");

//   return `${base}?${query}`;
// };

// export const getRedirectUri = "http://localhost:3000/oauth?provider=linkedin";

// export const getLinkedInUrls = getURLWithQueryParams(LINKEDIN_AUTH_URL, {
//   response_type: "code",
//   client_id: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
//   redirect_uri: getRedirectUri,
//   scope: LINKEDIN_SCOPE,
// });
