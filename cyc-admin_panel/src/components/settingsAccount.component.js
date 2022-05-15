import React, { Component } from "react";
import { JsonToTable } from "react-json-to-table";


export default class SettingAccount extends Component{
    render() {
        function HTTPGET_Tiers() {
            

          

          
        }

        const tiersJson = require('../temp/apis/admin_users.json');

        return (
            <div>
                <p>Display a breadcrumb here</p>
                <h1>admin_users</h1>
                <JsonToTable json={HTTPGET_Tiers()} />
                <JsonToTable json={tiersJson}/>
            </div>
        );
    }
}