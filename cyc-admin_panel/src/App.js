import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

// Importing Components
import Dashboard from './components/dashboard.componenet';
import ConfigAnnouncements from './components/configAnnouncements.componenet';
import ConfigExchangeItems from './components/configExchangeItems.componenet';
import ConfigTiers from './components/configTiers.componenet';
import ConfigTracks from './components/configTracks.componenet';
import ConfigTrophies from './components/configTrophies.componenet';

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
        <Routes>
          <Route index component={<Dashboard />} />
          <Route path='/configAnnouncements' component={<ConfigAnnouncements />} />
          <Route path='/configExchangeItems' component={<ConfigExchangeItems />} />
          <Route path='/configTiers' component={<ConfigTiers />} />
          <Route path='/configTracks' component={<ConfigTracks />} />
          <Route path='/configTrophies' component={<ConfigTrophies />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
