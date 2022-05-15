import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default class ConfigTiers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://api.nest.cyberyouth.sg/api/tier")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return
        <div>
            <h1> Loading data.... </h1>
        </div>

        return (
            <div class="max-w-fit">
                <h1 class="text-3xl w-12/12">Tiers</h1>
                <div class="flex flex-row py-2 justify-between w-12/12">
                    <div class="justify-start py-2">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-full"><FaPlus /></button>
                    </div>
                    <form class="justify-end">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search entries" required />
                            {/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Search</button> */}
                        </div>
                    </form>
                </div>
                <div class="grid grid-flow-row-dense gap-4 auto-rows-auto w-12/12">
                {/* <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 grid-flow-row"> */}
                    {
                        items.map((item) => (
                            <Link
                                class="p-4 group overflow-y-scroll w-auto h-80 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
                                to=""
                            >
                                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src={item.tier_icon} alt={item.tier_name} />
                                <div class="flex flex-col justify-between p-4 leading-normal mt-12 group-hover:hidden">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.tier_name}</h5>
                                    <p class="mb-3 font-normal">{item.tier_description}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Grapes Needed: {item.grapes_needed}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lemons Awarded: {item.lemons_awarded}</p>
                                </div>
                                <div class="hidden group-hover:flex group-hover:flex-col xl:px-12 md:px-16 sm:py-6 space-y-4">
                                    <div>
                                        TEST
                                    </div>
                                    <div>
                                        TEST2
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
    }
}