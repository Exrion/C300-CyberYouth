import React, { Component } from "react";
import { JsonToTable } from "react-json-to-table";


export default class ConfigTracks extends Component{
    render() {
        function HTTPGET_Tiers() {
           


          
        }

        const tiersJson = require('../temp/apis/tracks.json');

        return (
            <div>
                <button class="bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
                    <Link to={"/addTracks"} className="nav-link">
                        Add New Tier
                    </Link>
                </button>

                <p>Display a breadcrumb here</p>
                <h1>tracks</h1>
                <JsonToTable json={HTTPGET_Tiers()} />
                <JsonToTable json={tiersJson}/>
            </div>
        );
    }
}