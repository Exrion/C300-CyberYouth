import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="App">
      {/* Navigation Bar */}
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" class="flex items-center">
            <img src={require('./images/navbar/CYS-Favicon.png')} class="mr-3 h-6 sm:h-9" alt="CYS Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Cyber Youth Singapore</span>
          </Link>
          <div class="flex items-center md:order-2">
            <button type="button" class="flex mr-3 text-sm bg-gray-100 rounded-full md:mr-0" id="user-menu-button" data-dropdown-toggle="dropdown">
              <span class="sr-only">Open user menu</span>
              <FontAwesomeIcon icon="fa-solid fa-cog" spin />
            </button>
            {/* Dropdown menu */}
            <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
              <div class="py-3 px-4">
                <span class="block text-sm text-gray-900 dark:text-white">John Doe</span>
                <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">john.doe@gmail.com</span>
              </div>
              <ul class="py-1" aria-labelledby="dropdown">
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

      <div class="grid grid-cols-5 gap-4">
      <div class="col-span-2">
      <div class="links rounded-lg "> 
      
      <ul> 
          <li className="nav-item">
              <Link to={"/configAnnouncements"} className="nav-link">
                Announcements
              </Link>
          </li>
       
          
        
          <li className="nav-item">
              <Link to={"/configExchangeItems"} className="nav-link">
                Exchange Items
              </Link>
          </li>
        

       
          <li className="nav-item">
              <Link to={"/configTiers"} className="nav-link">
                Tiers
              </Link>
          </li>
       


       
          <li className="nav-item">
              <Link to={"/configTracks"} className="nav-link">
                Tracks
              </Link>
          </li>
       

        
          <li className="nav-item">
              <Link to={"/configTrophies"} className="nav-link">
                Trophies
              </Link>
          </li>
       
       </ul> 
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div>
        <FontAwesomeIcon icon="fa-solid fa-cog" spin />

        <Routes>
          <Route index component={<Dashboard />} />
<<<<<<< HEAD
          <Route path='/configAnnouncements' component={<ConfigAnnouncements />} />
          <Route path='/configExchangeItems' component={<ConfigExchangeItems />} />
          <Route path='/configTiers' component={<ConfigTiers />} />
          <Route path='/configTracks' component={<ConfigTracks />} />
          <Route path='/configTrophies' component={<ConfigTrophies />} />
=======
          <Route path='configAnnouncements' component={<ConfigAnnouncements />} />
          <Route path='configExchangeItems' component={<ConfigExchangeItems />} />
          <Route path='configTiers' component={<ConfigTiers />} />
          <Route path='configTracks' component={<ConfigTracks />} />
          <Route path='configTrophies' component={<ConfigTrophies />} />
          <Route path='settingsAccount' component={<SettingsAccount />} />
>>>>>>> 6ec04a7fa9880516204d09c3b82177a1f50d7a16
        </Routes>
      </div>
    </div>
  );
}

export default App;
