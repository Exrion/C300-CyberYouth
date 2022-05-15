import React, { Component } from "react";
import { JsonToTable } from "react-json-to-table";
import { Link } from "react-router-dom";
export default class ConfigExchangeitems extends Component{
    render() {
        function HTTPGET_Tiers() {
            

            var config = {
                method: 'get',
                url: 'ADD_URL_HERE',
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            };

           
        }

        const tiersJson = require('../temp/apis/exchanges.json');

        return (
            <div>
                <button class="bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
                    <Link to={"/addExchangeItems"} className="nav-link">
                        Add Exchange Items
                    </Link>
                </button>

                <p>Display a breadcrumb here</p>
                <h1>exchanges</h1>
                <JsonToTable json={HTTPGET_Tiers()} />
                <JsonToTable json={tiersJson}/>
            </div>
        );
    }
}