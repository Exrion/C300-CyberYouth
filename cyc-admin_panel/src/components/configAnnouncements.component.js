import React, { Component } from "react";
import { JsonToTable } from "react-json-to-table";

export default class ConfigAnnouncements extends Component{
    render() {
        function HTTPGET_Tiers() {
          
           
           
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