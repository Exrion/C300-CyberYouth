import { Link } from "react-router-dom";
import React, { Component } from "react";



export default class Dashboard extends Component {
    render() {
        return (
            <div>
                {/* Configuration Items Flexbox */}
                <div div className="flex flex-wrap text-l bg-gray-100 rounded p-4 w-50" >
                    <div className="p-4 text-black bg-gray-100 ">
                        <Link to={"./configAnnouncements"} className="nav-link">
                        <img src={require('../images/dashboard/Announcement.png')} alt= "Announcement" className="h-50 w-50"></img>
                            Announcements
                        </Link>
                    </div>
                    <div className="p-4 text-black bg-gray-100">
                        <Link to={"/configExchangeItems"} className="nav-link">
                        <img src={require('../images/dashboard/Gift.png')} alt= "Exchange Item" className="h-50 w-50 "></img>
                            Exchange Items
                        </Link>
                    </div>
                    <div className="p-4 text-black bg-gray-100">
                        <Link to={"/configTiers"} className="nav-link">
                        <img src={require('../images/dashboard/Tiers.png')} alt= "Tiers" className="h-50 w-50 content-center"></img>
                            Tiers
                        </Link>
                    </div>
                    <div className="p-4 text-black bg-gray-100">
                        <Link to={"/configTracks"} className="nav-link">
                        <img src={require('../images/dashboard/Tracks.png')} alt= "Tracks" className="h-50 w-50"></img>
                            Tracks
                        </Link>
                    </div>
                    <div className="p-4 text-black bg-gray-100">
                        <Link to={"/configTrophies"} className="nav-link">
                        <img src={require('../images/dashboard/Trophies.png')} alt= "Trophies" className="h-50 w-50 content-center"></img>
                            Trophies
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
