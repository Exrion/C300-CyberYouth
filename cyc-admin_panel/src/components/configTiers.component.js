import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import DataService from "../services/tier.service";

export default class ConfigTiers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false,
            msgType: "",
            msg: ""
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:8080/api/tiers")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    remove(id) {
        console.log("Deleting");
        DataService.remove(id)
            .then(response => {
                console.log(response.data);
                window.location.reload(false);
            })
            .catch(e => {
                console.log(e);
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return
        <div>
            <h1 class="flex-row flex content-center">
                <svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                </svg>
                Loading data....
            </h1>
        </div>

        return (
            <div>
                {/* Title and controls */}
                <h1 class="text-3xl w-12/12">Tiers</h1>
                <div class="flex flex-row py-2 justify-between w-12/12">
                    <div class="justify-start py-2">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-full">
                            <Link to="/addTiers">
                                <FaPlus />
                            </Link>
                        </button>
                    </div>
                    <form class="justify-end">
                        <label htmlFor="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search entries" required />
                        </div>
                    </form>
                </div>

                {/* Alerts */}
                {this.msg &&
                    <div id="alert-1" class="flex p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200" role="alert">
                    <svg class="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <div class="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800">
                        {this.msg}
                    </div>
                    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300" data-dismiss-target="#alert-1" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                }
                
                {/* Content */}
                <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-4 w-12/12">
                    {
                        items.map((item) => (
                            <div
                                class="p-4 h-auto group w-auto flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
                            >
                                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src={item.tierIcon} alt={item.tierName} />
                                <div class="flex flex-col justify-between p-4 leading-normal mt-12 group-hover:hidden grow flex-1">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.tierName}</h5>
                                    <p class="mb-3 font-normal">{item.tierDescription}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Grapes Needed: {item.grapesNeeded}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lemons Awarded: {item.lemonsAwarded}</p>
                                </div>
                                <div class="hidden group-hover:flex group-hover:flex-col xl:px-12 md:px-16 sm:py-6 space-y-4 grow flex-1">
                                    <div>
                                        <button class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full">
                                        <Link to={"/tiers/" + item.id}>
                                                Edit
                                            </Link>
                                        </button>
                                    </div>
                                    <div>
                                        <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full" onClick={() => { this.remove(item.id) }}>                                           
                                            {/* <Link onClick={this.deleteTier(item.id)}> */}
                                                Delete
                                            {/* </Link> */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}