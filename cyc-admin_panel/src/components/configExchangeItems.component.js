import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import DataService from "../services/exchange.service";


export default class ConfigExchangeitems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:8080/api/exchanges")
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
            <div class="xl:mx-5 md:mx-20 flex-1">
                <div class="grid grid-cols-3 gap-5 grid-rows-2">
                    {/* Search and add bar */}
                    <div class="col-span-3">
                        <div class="flex justify-between">
                            {/* Add button */}
                            <div>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full transition ease-in-out">
                                    <Link to="/addExchangeItems">
                                        <FaPlus />
                                    </Link>
                                </button>
                            </div>

                            {/* Search bar */}
                            <div>
                                <input type="search" id="default-search" class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search entries" required />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div class="col-span-3">
                    <div class="grid grid-cols-5 grid-rows-1 divide-x-4 h-full">
                        {/* Content */}
                        <div class="col-span-4 px-5">
                            {/* Content Grid */}
                            <ul class="flex-col flex space-y-5">
                                {
                                    items.map((item) => (
                                        < li class="group rounded-xl shadow w-full h-full" >
                                            < div class="grid grid-cols-3" >
                                                <div class="col-span-1">
                                                    <img src={item.exchangeImg} class="rounded-l-xl h-full"></img>
                                                </div>
                                                <div class="col-span-2 p-5 grid grid-rows-5">
                                                    <div class="row-span-4">
                                                        <div class="text-xl font-semibold">
                                                            {item.exchangeName}
                                                        </div>
                                                        <div class="text-md py-3 line-clamp-5 text-ellipsis">
                                                            {item.exchangeDescription}
                                                        </div>
                                                        <div class="text-xs text-slate-500 flex flex-col pb-2">
                                                            <p>Lemons Required: {item.lemonsEach}</p>
                                                            <p>Delivery Mode: {item.deliveryMode}</p>
                                                            <p>Exchange Stock: {item.exchangeStock}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row-span-1 flex justify-center">
                                                        <Link to={"/exchanges/" + item.id} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 transition ease-in-out focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                                            Edit
                                                        </Link>
                                                        <button onClick={() => { this.remove(item.id) }} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 transition ease-in-out focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                                            <Link to="">
                                                                Delete
                                                            </Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Sidebar */}
                        <div class="col-span-1 max-w-fit p-5">
                            <div>
                                {/* Title */}
                                <h2 class="text-2xl text-left">
                                    Exchange Items
                                </h2>
                                {/* Details */}
                                <div class="flex-col justify-start">
                                    <div class="text-md py-1 mt-2 text-left">
                                        <p>Exchange Items management page</p>
                                    </div>
                                    <div class="text-md py-1 mt-2 text-left">
                                        <p>{items.length} Entries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        );
    }
}