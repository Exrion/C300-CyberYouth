import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

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
import EditTrophy from "./components/editTrophy.component";
import EditAnnouncement from './components/editAnnouncemnts.component';
import EditExchangeItem from "./components/editExchangeItem.component";


function App() {
  return (
    <div className="App">
      <div className="xl:px-60">
        {/* Navigation Bar */}
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
          <div className="container flex flex-wrap justify-between items-center mx-auto">

            {/* CYC Logo */}
            <Link to="/" className="flex items-center">
              <img src={require('./images/navbar/CYS-Favicon.png')} className="mr-3 h-6 sm:h-9" alt="CYS Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Cyber Youth Singapore</span>
            </Link>

            {/* Account */}
            <Link className="my-4 shadow bg-gray-100 rounded-full p-2 flex justify-center hover:bg-gray-200" to="/settingsAccount">
              {/* User Profile Picture here */}
              <img src={require('./images/navbar/pepe.png')} className="rounded-full object-scale-down h-9 w-9 border-solid" alt='user portrait' />
              {/* Username here */}
              <span className="text-slate-600 p-1 text-md">John Doe</span>
            </Link>

          </div>
        </nav>

        {/* Main Content */}
        <div className="flex items-center justify-center max-w-fit py-2">
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
            <Route exact path='/dashboard' element={< Dashboard />} />
            <Route exact path="/trophies/:id" element={<EditTrophy />} />
            <Route exact path="/announcement/:id" element={<EditAnnouncement />} />
            <Route exact path="/exchanges/:id" element={<EditExchangeItem />} />
            <Route path='/' element={< Dashboard />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
