import React, { Component, useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
// TODO: send email after 3 failed login attemtpts
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    //Login error messages
    
    if (!username && password) {
      setError(true);
      setErrorMessage("Enter a Username!");
    } else if (username && !password) {
      setError(true);
      setErrorMessage("Enter a Password!");
    } else if (!username && !password) {
      setError(true);
      setErrorMessage("Enter a Username and Password!");
    } else if (
      JSON.stringify(token).includes("User Not found.") &&
      password?.length !== 0
    ) {
      setError(true);
      setErrorMessage("Enter a valid Username!");
    } else if (JSON.stringify(token).includes("Invalid Password")) {
      setError(true);
      setErrorMessage("Wrong Password!");
    }
  };
  

  return (
    <div className="grid place-items-center py-40">
      <div className="grid grid-rows place-content-center">
        <div class="3xl text-center py-5 grid grid-col justify-items-center">
          <img
            src={require("../../images/login/nest.png")}
            className="h-20 w-20"
          />
          <h1 className="font-semibold">NEST Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="space-y-1">
            <p>Username</p>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </label>
          <label className="space-y-1">
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </label>
          <div>
            <button
              type="submit"
              className="btn btn-success w-full px-6 py-2.5 bg-gray-100 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-200 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-lg transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {error ? <div>{errorMessage}</div> : <div></div>}
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
