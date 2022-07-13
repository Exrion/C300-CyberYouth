import './App.css';
import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

//Linkedin imports
import { LinkedInCallback } from "react-linkedin-login-oauth2";

// Importing Components
import Dashboard from "./components/dashboard.component";
import ConfigAnnouncements from "./components/configAnnouncements.component";
import ConfigExchangeItems from "./components/configExchangeItems.component";
import ConfigTiers from "./components/configTiers.component";
import ConfigTracks from "./components/configTracks.component";
import ConfigTrophies from "./components/configTrophies.component";
import SettingsAccount from "./components/settingsAccount.component";
import AddTiers from "./components/addTiers.component";
import AddAnnouncements from "./components/addAnnouncements.component";
import AddExchangeItems from "./components/addExchangeItems.component";
import AddTracks from "./components/addTracks.component";
import AddTrophies from "./components/addTrophies.component";
import EditTrophy from "./components/editTrophy.component";
import EditTrack from "./components/editTrack.component";
import EditAnnouncement from './components/editAnnouncemnts.component';
import EditExchangeItem from "./components/editExchangeItem.component";
import EditTier from "./components/editTiers.component";
import AboutUs from "./components/Footer/aboutus.component";
import Contact from "./components/Footer/contact.component";
//login imports
import Login from "./components/Login/login.component";
import useToken from "./components/App/useToken.component";
import { FaWindows } from "react-icons/fa";

function App() {


  //--- LOGIN FUNCTION---//
  const { token, setToken } = useToken();

  // return <LinkedInCallback />;

  //Login Page
  if (!token) {
    //if not token no login, but user can input any token to login
    return <Login setToken={setToken} />;
  }

  //Linkedin
  <button id="" onclick="console.log('Button clicked')">
    return <LinkedInCallback />;
  </button>;

  //Main Website
  return ( //else login

    <div className="App">
      {localStorage.removeItem("loginCount")}
      <div className="xl:px-60">
        {/* Navigation Bar */}
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            {/* CYC Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={require("./images/navbar/CYS-Favicon.png")}
                className="mr-3 h-6 sm:h-9"
                alt="CYS Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                Cyber Youth Singapore
              </span>
            </Link>

            {/* Account */}
            <Link
              className="my-4 shadow bg-gray-100 rounded-full p-2 flex justify-center hover:bg-gray-200 transition ease-in-out"
              to="/settingsAccount"
            >
              {/* User Profile Picture here */}
              <img
                src={require("./images/navbar/pepe.png")}
                className="rounded-full object-scale-down h-9 w-9 border-solid"
                alt="user portrait"
              />
              {/* Username here */}
              {/* WIP */}
              <span className="text-slate-600 p-1 text-md">
                {JSON.parse(localStorage.getItem("token")).username}
              </span>
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex items-center justify-center w-full py-2">
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/configAnnouncements" element={<ConfigAnnouncements />} />
              <Route exact path="/configExchangeItems" element={<ConfigExchangeItems />} />
              <Route exact path="/configTiers" element={<ConfigTiers />} />
              <Route exact path="/configTracks" element={<ConfigTracks />} />
              <Route exact path="/configTrophies" element={<ConfigTrophies />} />
              <Route exact path="/addTiers" element={<AddTiers />} />
              <Route exact path="/addAnnouncements" element={<AddAnnouncements />} />
              <Route exact path="/addTrophies" element={<AddTrophies />} />
              <Route exact path="/addExchangeItems" element={<AddExchangeItems />} />
              <Route exact path="/addTracks" element={<AddTracks />} />
              <Route exact path="/settingsAccount" element={<SettingsAccount />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/trophies/:id" element={<EditTrophy />} />
              <Route exact path="/announcement/:id" element={<EditAnnouncement />} />
              <Route exact path="/exchanges/:id" element={<EditExchangeItem />} />
              <Route exact path="/About_Us" element={<AboutUs />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
        </div >

        {/* Footer */}
        <footer class="p-5 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6">
            <span class="text-sm text-gray-500 sm:text-center">
              © 2022 C300 RP™. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
              <li>
                <Link to="/About_Us" class="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Contact" class="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </footer>

      </div >
    </div>
  );
}

export default App;