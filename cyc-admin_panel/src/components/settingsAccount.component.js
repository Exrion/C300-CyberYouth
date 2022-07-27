import React, { Component, useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";

import _ from "lodash";
import Alert from "react-s-alert";

import axios from "axios";

import { LinkedInApi, NodeServer } from "../config.js";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { LinkedInCallback } from "react-linkedin-login-oauth2";

var qs = require("qs");

const urlToGetLinkedInAccessToken =
  "https://www.linkedin.com/oauth/v2/accessToken";
const urlToGetUserProfile =
  "https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))";
const urlToGetUserEmail =
  "https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))";

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

function SettingAccount() {
  // const [state, setState] = useState({
  //   userLinkedin: {},
  //   loggedIn: false,
  // });

  // function getCodeFromWindowURL(url) {
  //   const popupWindowURL = new URL(url);
  //   return popupWindowURL.searchParams.get("code");
  // }

  const [code, setCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const { linkedInLogin } = useLinkedIn({
    clientId: "86h0tc10xi54pb",
    redirectUri: `http://localhost:3000/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
      setCode(code);
      setErrorMessage("");
    },
    onError: (error) => {
      console.log(error);
      setCode("");
      setErrorMessage(error.errorMessage);
    },
  });

  // useEffect(() => {
  //   if (window.opener && window.opener !== window) {
  //     const code = getCodeFromWindowURL(window.location.href);
  //     window.opener.postMessage({ type: "code", code: code }, "*");
  //     window.close();
  //   }
  //   window.addEventListener("message", handlePostMessage);
  // });

  // function getUserCredentials(code) {
  //   axios
  //     .get(
  //       `${NodeServer.baseURL} + ${NodeServer.getUserCredentials}?code=${code}`
  //     )
  //     .then((res) => {
  //       const Linkedin = res.data;
  //       setState({
  //         Linkedin,
  //         loaded: true,
  //       });
  //       // Do something with user
  //     });
  // }

  // function handlePostMessage(event) {
  //   if (event.data.type === "code") {
  //     const { code } = event.data;
  //     getUserCredentials(code);
  //   }
  // }

  //Logout by clearing local storage
  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  //Retrieve user from localstorage
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   if (window.opener && window.opener !== window) {
  //     const code = getCodeFromWindowURL(window.location.href);
  //     window.opener.postMessage({ type: "code", code: code }, "*");
  //     window.close();
  //   }
  //   window.addEventListener("message", handlePostMessage);
  //   const user = JSON.parse(localStorage.getItem("token"));
  //   if (user) {
  //     setUser(user);
  //   }
  // }, []);

  return (
    <div class="xl:mx-5 md:mx-20 flex-1">
      {/* Title */}
      <div class="flex justify-start">
        <h1 class="text-3xl ml-5 mr-5">Account Settings</h1>
      </div>

      {/* Content */}
      <div class="flex flex-col space-y-5 p-10 xl:grid xl:grid-cols-3">
        {/* Profile */}
        <div class="flex flex-row group relative drop-shadow-2xl rounded-full p-5 xl:col-span-2">
          {/* Picture */}
          <img
            src={require("../images/navbar/pepe.png")}
            className="rounded-full h-9 w-9 w-32 h-32 ease-in-out group-hover:brightness-95 hover:border-2"
            alt="user portrait"
          />
          <div class="ml-20 flex flex-col">
            <div>
              <p class="text-2xl text-bold text-left pb-2">{user.username}</p>
              <p class="text-md text-bold text-left text-slate-600">
                {user.email}
              </p>
              <p class="text-md text-bold text-left text-slate-600">
                21 July 1998
              </p>
            </div>
            <button class="flex flex-row justify-center place-items-center space-x-2 mt-2 h-7 ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
              <FaPencilAlt />
              <p>Edit Profile</p>
            </button>
          </div>
        </div>

        <div class="flex flex-col space-y-5 xl:col-span-1">
          {/* Password */}
          <div class="flex flex-col place-items-start">
            <p class="text-2xl text-bold">Password</p>
            <p class="text-md text-slate-700 text-left">
              Last changed: 17 September 2021
            </p>
            <button class="flex flex-row justify-center place-items-center space-x-2 mt-2 h-7 ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
              <p>Change Password</p>
            </button>
          </div>

          {/* Logout */}
          <div class="flex flex-col place-items-start">
            <p class="text-2xl text-bold">Logout</p>
            <p class="text-md text-slate-700">Logout of account</p>
            return <LinkedInCallback />
            <button
              class="flex flex-row justify-center place-items-center space-x-2 mt-2 h-7 ease-in-out text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={logout}
            >
              <p>Logout</p>
            </button>
          </div>
          <div class="flex flex-col place-items-start">
            <p class="text-2xl text-bold">Connect with LinkedIn</p>
            <p class="text-md text-slate-700">Connect with LinkedIn</p>
            <button
              class="flex flex-row justify-center place-items-center space-x-2 mt-2 h-7 ease-in-out text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={linkedInLogin}
            >
              <p>Connect With LinkedIn</p>
            </button>
          </div>
          <div>
            {/* <img src={userLinkedin.profileImageURL} alt="Profile image" />
            <h3>{`${userLinkedin.firstName} ${state.userLinkedin.lastName}`}</h3>
            <h3>{userLinkedin.email}</h3> */}
            {!code && <div>No code</div>}
            {code && (
              <div>
                <div>Authorization Code: {code}</div>
              </div>
            )}
            {errorMessage && <div>{errorMessage}</div>}
          </div>
          <div class="flex justify-start">
            <h1 class="text-3xl ml-5 mr-5">{}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SettingAccount;
