import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { FaCog } from "react-icons/fa";

// Importing Components
import Dashboard from './components/dashboard.component';
import ConfigAnnouncements from './components/configAnnouncements.component';
import ConfigExchangeItems from './components/configExchangeItems.component';
import ConfigTiers from './components/configTiers.component';
import ConfigTracks from './components/configTracks.component';
import ConfigTrophies from './components/configTrophies.component';
import SettingsAccount from './components/settingsAccount.component';
import AddTiers from "./components/addTiers.component";
import AddAnnouncements from "./components/addAnnouncements.component";
import AddExchangeItems from "./components/addExchangeItems.component";
import AddTracks from "./components/addTracks.component";
import AddTrophies from "./components/addTrophies.component";
import EditTrophy from "./components/trophy.component";


function App() {
  return (
    <div className="App">
      <div className="xl:px-60">
      {/* Navigation Bar */}
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <img src={require('./images/navbar/CYS-Favicon.png')} className="mr-3 h-6 sm:h-9" alt="CYS Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">Cyber Youth Singapore</span>
          </Link>
          <div className="flex items-center md:order-2">
            <button type="button" className="hover:animate-spin flex mr-3 text-sm bg-gray-100 rounded-3xl p-3 md:mr-0 hover:bg-gray-400" id="user-menu-button" data-dropdown-toggle="dropdown">
              <span className="sr-only">Open user menu</span>
              <FaCog/>
            </button>
                        
            {/* Dropdown menu */}
            <div className="hidden z-50 my-4 text-base list-none divide-y divide-gray-100 shadow bg-gray-100 rounded" id="dropdown">
              <div className="py-5 px-8 flex space-x-5 bg-gradient-to-b from-blue-900 via-blue-700 to-gray-100 rounded-t">
                <div>
                  {/* User Profile Picture here */}
                  <img src={require('./images/navbar/pepe.png')} className="rounded-full object-scale-down h-20 w-20 border-solid" alt='user portrait' />
                </div>
                <div>
                  {/* User's name here */}
                  <span className="block text-sm text-white">John Doe</span>
                  {/* User email here */}
                  <span className="block text-sm font-medium text-gray-300 truncate">john.doe@gmail.com</span>
                </div>
              </div>
              <ul className="p-4 space-y-2" aria-labelledby="dropdown">
                <li className="hover:text-gray-600">
                  <Link to="/settingsAccount">Account Settings</Link>
                </li>
                <li className="hover:text-gray-600">
                  <button>Sign Out</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>  
    
      {/* Main Content */}
      <div className="flex items-center justify-center max-w-fit xl:px-4 md:px-4">
        <Routes>
          <Route exact path='/configAnnouncements' element={<ConfigAnnouncements />} />
          <Route exact path='/configExchangeItems' element={<ConfigExchangeItems />} />
          <Route exact path='/configTiers' element={<ConfigTiers />} />
          <Route exact path='/configTracks' element={<ConfigTracks />} />
          <Route exact path='/configTrophies' element={<ConfigTrophies />} />
          <Route exact path="/addTiers" element={<AddTiers />} />
          <Route exact path="/addAnnouncements" element={<AddAnnouncements />} />
          <Route exact path="/addTrophies" element={<AddTrophies />} />
          <Route exact path="/addExchangeItems" element={<AddExchangeItems />} />
          <Route exact path="/addTracks" element={<AddTracks />} />
          <Route exact path='/settingsAccount' element={<SettingsAccount />} />
          <Route exact path='/dashboard' element={< Dashboard />}/>
          <Route exact path="/trophies/:id" element={<EditTrophy/>} />
          <Route path='/' element={< Dashboard />}/>
          
        </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
