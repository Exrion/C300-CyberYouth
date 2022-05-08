import React, { Component } from "react";
import { JsonToTable } from "react-json-to-table";


export default class ConfigTracks extends Component{
    render() {
        function HTTPGET_Tiers() {
            var axios = require('axios');


            axios(config)
                .then(function (response) {
                    return JSON.stringify(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    return null;
                });
        }

        const tiersJson = require('../temp/apis/tracks.json');

        return (
            <div>
                <p>Display a breadcrumb here</p>
                <h1>tracks</h1>
                <JsonToTable json={HTTPGET_Tiers()} />
                <JsonToTable json={tiersJson}/>
            </div>
        );
    }
}