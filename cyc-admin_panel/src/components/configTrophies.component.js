import React, { Component } from "react";
import { JsonToTable } from "react-json-to-table";


export default class ConfigTrophies extends Component{
    render() {
        function HTTPGET_Tiers() {
           

          

           
        }

        const tiersJson = require('../temp/apis/trophies.json');

        return (
            <div>
                <p>Display a breadcrumb here</p>
                <h1>trophies</h1>
                <JsonToTable json={HTTPGET_Tiers()} />
                <JsonToTable json={tiersJson}/>
            </div>
        );
    }
}