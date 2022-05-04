import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa";

// Importing Components
import Dashboard from './components/dashboard.componenet';
import ConfigAnnouncements from './components/configAnnouncements.componenet';
import ConfigExchangeItems from './components/configExchangeItems.componenet';
import ConfigTiers from './components/configTiers.componenet';
import ConfigTracks from './components/configTracks.componenet';
import ConfigTrophies from './components/configTrophies.componenet';
import SettingsAccount from './components/settingsAccount.component';

function App() {
  return (
    <div className="App" class="px-60">
      {/* Navigation Bar */}
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" class="flex items-center">
            <img src={require('./images/navbar/CYS-Favicon.png')} class="mr-3 h-6 sm:h-9" alt="CYS Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-black">Cyber Youth Singapore</span>
          </Link>
          <div class="flex items-center md:order-2">
            <button type="button" class="flex mr-3 text-sm bg-gray-100 rounded-3xl p-3 md:mr-0 hover:bg-gray-400" id="user-menu-button" data-dropdown-toggle="dropdown">
              <span class="sr-only">Open user menu</span>
              <FaCog />
            </button>
            {/* Dropdown menu */}
            <div class="hidden z-50 my-4 text-base list-none divide-y divide-gray-100 shadow bg-gray-100 rounded" id="dropdown">
              <div class="py-5 px-8 flex space-x-5 bg-gradient-to-b from-blue-900 via-blue-700 to-gray-100 rounded-t">
                <div>
                  <img src={require('./images/navbar/pepe.png')} class="rounded-full object-scale-down h-20 w-20 border-solid" alt='user portrait' />
                </div>
                <div>
                  <span class="block text-sm text-white">John Doe</span>
                  <span class="block text-sm font-medium text-gray-300 truncate">john.doe@gmail.com</span>
                </div>
              </div>
              <ul class="p-4 space-y-2" aria-labelledby="dropdown">
                <li>
                  <Link to="/settingsAccount">Account Settings</Link>
                </li>
                <li>
                  <button>Sign Out</button>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </nav>

      <div>
        {/* Configuration Items Flexbox */}
        <div div class="flex flex-wrap text-l bg-gray-100 rounded p-4 " >
          <div class="p-4 text-black bg-gray-100 ">
            <Link to={"/configAnnouncements"} className="nav-link">
              Announcements
            </Link>
          </div>
          <div class="p-4 text-black bg-gray-100">
            <Link to={"/configExchangeItems"} className="nav-link">
              Exchange Items
            </Link>
          </div>
          <div class="p-4 text-black bg-gray-100">
            <Link to={"/configTiers"} className="nav-link">
              Tiers
            </Link>
          </div>
          <div class="p-4 text-black bg-gray-100">
            <Link to={"/configTracks"} className="nav-link">
              Tracks
            </Link>
          </div>
          <div class="p-4 text-black bg-gray-100">
            <Link to={"/configTrophies"} className="nav-link">
              Trophies
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div>
        <Routes>
          <Route index component={<Dashboard />} />
          <Route path='configAnnouncements' component={<ConfigAnnouncements />} />
          <Route path='configExchangeItems' component={<ConfigExchangeItems />} />
          <Route path='configTiers' component={<ConfigTiers />} />
          <Route path='configTracks' component={<ConfigTracks />} />
          <Route path='configTrophies' component={<ConfigTrophies />} />
          <Route path='settingsAccount' component={<SettingsAccount />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
