import { Link } from "react-router-dom";
import React, { Component } from "react";



export default class Dashboard extends Component {
    render() {
        return (
            <div>
                {/* Configuration Items Flexbox */}
                <div div class="flex flex-wrap text-l bg-gray-100 rounded p-4 w-50" >
                    <div class="p-4 text-black bg-gray-100 ">
                        <Link to={"./configAnnouncements"} className="nav-link">
                        <img src={require('../images/dashboard/Announcement.png')} alt= "Announcement" class="h-50 w-50"></img>
                            Announcements
                        </Link>
                    </div>
                    <div class="p-4 text-black bg-gray-100">
                        <Link to={"/configExchangeItems"} className="nav-link">
                        <img src={require('../images/dashboard/Gift.png')} alt= "Exchange Item" class="h-50 w-50 "></img>
                            Exchange Items
                        </Link>
                    </div>
                    <div class="p-4 text-black bg-gray-100">
                        <Link to={"/configTiers"} className="nav-link">
                        <img src={require('../images/dashboard/Tiers.png')} alt= "Tiers" class="h-50 w-50 content-center"></img>
                            Tiers
                        </Link>
                    </div>
                    <div class="p-4 text-black bg-gray-100">
                        <Link to={"/configTracks"} className="nav-link">
                        <img src={require('../images/dashboard/Tracks.png')} alt= "Tracks" class="h-50 w-50"></img>
                            Tracks
                        </Link>
                    </div>
                    <div class="p-4 text-black bg-gray-100">
                        <Link to={"/configTrophies"} className="nav-link">
                        <img src={require('../images/dashboard/Trophies.png')} alt= "Trophies" class="h-50 w-50 content-center"></img>
                            Trophies
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
