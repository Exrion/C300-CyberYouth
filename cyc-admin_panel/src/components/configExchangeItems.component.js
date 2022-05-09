import React, { Component } from "react";
import { JsonToTable } from "react-json-to-table";

export default class ConfigExchangeitems extends Component{
    render() {
        function HTTPGET_Tiers() {
            

           

           
        }

        const tiersJson = require('../temp/apis/exchanges.json');

        return (
            <div>
                <p>Display a breadcrumb here</p>
                <h1>exchanges</h1>
                <JsonToTable json={HTTPGET_Tiers()} />
                <JsonToTable json={tiersJson}/>
            </div>
        );
    }
}