import React, { Component } from "react";
import { JsonToTable } from "react-json-to-table";
import { Link } from "react-router-dom";

export default class ConfigTrophies extends Component{
    render() {
        function HTTPGET_Tiers() {
            var axios = require('axios');

            var config = {
                method: 'get',
                url: 'localhost:8080/api/trophies',
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            };

            axios(config)
            .then(function (response) {
                return JSON.stringify(response.data);
            })
            .catch(function (error) {
                console.log(error);
                return null;
            });
        }

        const tiersJson = require('../temp/apis/trophies.json');

        return (
            <div>
                <button class="bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
                    <Link to={"/addTrophies"} className="nav-link">
                        Add Trophies
                    </Link>
                </button>

                <p>Display a breadcrumb here</p>
                <h1>trophies</h1>
                <JsonToTable json={HTTPGET_Tiers()} />
                <JsonToTable json={tiersJson}/>
            </div>
        );
    }
}