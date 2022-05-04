import { Link } from "react-router-dom";
import React, { Component } from "react";



export default class Dashboard extends Component {
    render() {
        return (
            <div>
                {/* Configuration Items Flexbox */}
                <div div class="flex flex-wrap text-l bg-gray-100 rounded p-4 " >
                    <div class="p-4 text-black bg-gray-100 ">
                        <Link to={"./configAnnouncements"} className="nav-link">
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
        );
    }
}
