import React, { Component } from "react";
import tiers from "../temp/apis/tiers.json";

export default class ConfigTiers extends Component {
    render() {
        function HTTPGET_Tiers() {
            var axios = require('axios');

            var config = {
                method: 'get',
                url: 'https://api.nest.cyberyouth.sg/api/tier',
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

        return (
            <div>
                <p>Display a breadcrumb here</p>
                <h1>Tiers</h1>

                <div class="grid grid-cols-3 gap-4 grid-flow-row">
                    {
                        tiers.map((item, i) => (
                            <a href="#" class="w-120 h-60 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.tier_icon} alt={item.tier_name} />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.tier_name}</h5>
                                    <p class="mb-3 font-normal">{item.tier_description}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Grapes Needed: {item.grapes_needed}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lemons Awarded: {item.lemons_awarded}</p>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        );
    }
}