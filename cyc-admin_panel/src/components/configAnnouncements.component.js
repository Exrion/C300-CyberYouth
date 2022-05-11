import React, { Component } from "react";
import { JsonToTable } from "react-json-to-table";

export default class ConfigAnnouncements extends Component{
    render() {
        function HTTPGET_Tiers() {
            var axios = require('axios');

            var config = {
                method: 'get',
                url: 'ADD_URL_HERE',
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

        const tiersJson = require('../temp/apis/announcements.json');

        return (
            <div>
                <p>Display a breadcrumb here</p>
                <h1>announcements</h1>
                <JsonToTable json={HTTPGET_Tiers()} />
                <JsonToTable json={tiersJson}/>
            </div>
        );
    }
}