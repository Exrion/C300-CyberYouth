import React, { Component, useState } from "react";
import PropTypes from "prop-types";

import { useLinkedIn } from "react-linkedin-login-oauth2";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
async function signinTwoFA(credentials) {
  return fetch("http://localhost:8080/api/auth/signinTwoFA", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

async function lockaccountUser(credentials) {
  return fetch("http://localhost:8080/api/auth/lockaccount", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
 //REMOVE FOR PRODUCTION temp account unlock button
async function unlockaccountUser(credentials) {
  return fetch("http://localhost:8080/api/auth/unlockaccount", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}


localStorage.setItem("loginCount", "0");
export default function Login({ setToken }) {
  //Login Counter

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [twoFA ,  setTwoFA] = useState();
  const [locked, setLocked] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [message ,setMessage]= useState("");
  const [validAccount, setValidAccount] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    var token = await loginUser({
      username,
      password,
      
    });
    if(validAccount)
    { 
      token = await signinTwoFA({
      username,
      password,
      twoFA
    });
    }
    
    if(JSON.stringify(token).includes("Valid Account") )
    {
      setValidAccount(true);
      setMessage("A 2FA code has been sent to the email registered with this account.\nPlease wait 60 Seconds before sending the code again.");
      setError(false);
      console.log(validAccount);
    }
    else{
      setValidAccount(false);
      console.log("I AM HERE "+validAccount);
    }

    setToken(token);

    
    // TODO: send email after 3 failed login attemtpts BJORN
    //ACOUNT LOCKED AFTER 3 failed attempts. Uses localstorage hence can be bypassed. Can store login count in backend instead for full solution.
    //OR create a new logintries collumn within account table and if logintries returns > 3, account is locked.
    if (Number(localStorage.getItem("loginCount")) >= 3) {
      if (JSON.stringify(token).includes("Invalid Password")) {
        let locked = true;
        console.log(locked);
        const token = await lockaccountUser({
          username,
          locked,
        });
        setToken(token);
        console.log("3 login tries ACCOUNT LOCKED")
      }
      console.log(validAccount)
      setErrorMessage("Try again later.");
    }
   
    //Login Counter adding
    function addLoginCount() {
      let currentCount = Number(localStorage.getItem("loginCount"));
      currentCount++;
      localStorage.setItem("loginCount", currentCount.toString());
    }
    
    console.log(token);
    //Login error messages
    if (!username && password) {
      setError(true);
      setErrorMessage("Enter a Username!");
      setValidAccount(false);
      addLoginCount();
    } else if (username && !password) {
      setError(true);setValidAccount(false);
      setErrorMessage("Enter a Password!");
      addLoginCount();
    } else if (!username && !password) {
      setError(true);setValidAccount(false);
      setErrorMessage("Enter a Username and Password!");
      addLoginCount();
    } else if (
      JSON.stringify(token).includes("User Not found.") &&
      password?.length !== 0
    ) {
      setError(true);setValidAccount(false);
      setErrorMessage("Enter a valid Username!");
      addLoginCount();
    } else if (JSON.stringify(token).includes("Account is locked")) {
      setError(true);setValidAccount(false);
      setLocked(true);
      setErrorMessage(
        "Your account has been locked due to suspicious activity, please contact an administrator"
      );
      
    } else if (JSON.stringify(token).includes("Invalid Password")) {
      setError(true);setValidAccount(false);
      setErrorMessage("Wrong Password!");
      if(Number(localStorage.getItem("loginCount")) >= 3)
      {
        setLocked(true);setValidAccount(false);
        setErrorMessage("Wrong Password! Your account has been locked due to suspicious activity, please contact an administrator.");
      }
      addLoginCount();
    }
    else if (JSON.stringify(token).includes("Invalid twoFA Token!")) {
      setError(true);
      setErrorMessage("Invalid 2FA code!");
      addLoginCount();
      setValidAccount(false);
    }
    
  };
  
 //REMOVE FOR PRODUCTION temp account unlock button
 function unlockAccount() {
  let locked = false;
  console.log(locked);
  const token = unlockaccountUser({
    username,
    locked,
  });
  setToken(token);
  setLocked(false);
  setErrorMessage("ACCOUNT UNLOCKED");
};
  //Linkedin
  const { linkedInLogin } = useLinkedIn({
    clientId: "86h0tc10xi54pb",
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const errorCounteMessage = "\n Login Count: " + Number(localStorage.getItem("loginCount"));
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
        <form onSubmit={handleSubmit} className="space-y-5 flex flex-col">
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
          {validAccount ? <div>
          <label className="space-y-1">
            <p>2FA</p>
            <input
              type="text"
              onChange={(e) => setTwoFA(e.target.value)}
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </label></div> 
        : <div></div>}
          
          {/* <label className="space-y-1">
            <p>2FA</p>
            <input
              type = "number"
              placeholder="0000"
              min={1000}
              max={9999}
              onChange={(e) => setTwoFA(e.target.value)}
              class="form-control block w-half px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </label> */}
          <div>
            <button
              
              type="submit"
              className="btn btn-success w-full px-6 py-2.5 bg-blue-500 text-slate-200 text-md font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-lg transition duration-150 ease-in-out"

            >
              Login
            </button>
          </div>
          <button
            class="flex flex-flow rounded-full shadow-lg p-2 hover:bg-gray-200 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-lg transition duration-150 ease-in-out"
            onClick={linkedInLogin}
          >
            <img
              src={require("../../images/login/linkedin.png")}
              className="mr-3 h-6 sm:h-9"
              alt="LinkedIn Login Icon"
            />
            <p class="mt-1">Sign in with LinkedIn</p>
          </button>
        </form>
      </div>
      <br></br>
      {error ? <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><p>{errorMessage}</p> <p>{errorCounteMessage}</p></div> : <div>{message}</div>}

      {/*REMOVE FOR PRODUCTION temp account unlock button*/}
      {locked ? <div>  
        <button
        onClick={unlockAccount} 
        class="h-8 px-4 m-2 text-sm text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
        >
        DEMO UNLOCK BUTTON 
        </button></div> 
        : <div></div>}
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
