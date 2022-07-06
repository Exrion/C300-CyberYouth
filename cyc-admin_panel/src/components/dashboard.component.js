import { Link } from "react-router-dom";
import React, { Component } from "react";
import { FaFastForward, FaTrophy, FaLongArrowAltUp, FaStackExchange, FaVolumeUp, FaUser, FaUserCog } from "react-icons/fa";

export default class Dashboard extends Component {
    render() {
        return (
            <div class="flex-col flex space-y-10 ml-5 mr-5">

                <div class="flex justify-start">
                    <h1 class="text-3xl">Welcome, John Doe</h1>
                </div>
                {/* Configuration Items Flexbox */}
                <div>
                    {/* Header */}
                    <div class="flex justify-start">
                        <h3 class="text-2xl bg-blue-600 p-2 px-10 text-white rounded-t-xl shadow">Configuration</h3>
                    </div>

                    {/* Content */}
                    <div class="shadow">
                        <div class="grid content-start gap-x-6 p-6 w-max grid-flow-col grid-rows-1">

                            {/* TEMPLATE */}
                            {/* <Link to="/ConfigTracks">
                                <div class="flex-col justify-center bg-slate-100 py-8 px-10 rounded-xl hover:bg-gray-100">
                                    <div class="flex justify-center">
                                        <FaFastForward class="text-3xl" />
                                    </div>
                                    <div class="flex justify-center">
                                        Tracks
                                    </div>
                                </div>
                            </Link> */}

                            <Link to={"/configAnnouncements"}>
                                <div class="flex-col justify-center bg-slate-100 py-8 px-6 rounded-xl hover:bg-gray-200 transition ease-in-out">
                                    <div class="flex justify-center">
                                        <FaVolumeUp class="text-3xl" />
                                    </div>
                                    <div class="flex justify-center">
                                        Announcements
                                    </div>
                                </div>
                            </Link>


                            <Link to={"/configExchangeItems"}>
                                <div class="flex-col justify-center bg-slate-100 py-5 px-10 rounded-xl hover:bg-gray-200 transition ease-in-out">
                                    <div class="flex justify-center">
                                        <FaStackExchange class="text-3xl" />
                                    </div>
                                    <div class="flex justify-center flex-wrap w-20">
                                        Exchange Items
                                    </div>
                                </div>
                            </Link>

                            <Link to={"/configTiers"}>
                                <div class="flex-col justify-center bg-slate-100 py-8 px-11 rounded-xl hover:bg-gray-200 transition ease-in-out">
                                    <div class="flex justify-center">
                                        <FaLongArrowAltUp class="text-3xl" />
                                    </div>
                                    <div class="flex justify-center">
                                        Tiers
                                    </div>
                                </div>
                            </Link>

                            <Link to={"/configTracks"}>
                                <div class="flex-col justify-center bg-slate-100 py-8 px-10 rounded-xl hover:bg-gray-200 transition ease-in-out">
                                    <div class="flex justify-center">
                                        <FaFastForward class="text-3xl" />
                                    </div>
                                    <div class="flex justify-center">
                                        Tracks
                                    </div>
                                </div>
                            </Link>

                            <Link to={"/configTrophies"}>
                                <div class="flex-col justify-center bg-slate-100 py-8 px-9 rounded-xl hover:bg-gray-200 transition ease-in-out">
                                    <div class="flex justify-center">
                                        <FaTrophy class="text-3xl" />
                                    </div>
                                    <div class="flex justify-center">
                                        Trophies
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Users Flexbox */}
                <div>
                    {/* Header */}
                    <div class="flex justify-start">
                        <h3 class="text-2xl bg-blue-600 p-2 px-10 text-white rounded-t-xl shadow">Users</h3>
                    </div>

                    {/* Content */}
                    <div class="shadow">
                        <div class="grid content-start gap-x-6 p-6 w-max grid-flow-col grid-rows-1">

                            <Link to="/" class="place-self-stretch">
                                <div class="flex-col justify-center bg-slate-100 py-8 px-12 rounded-xl hover:bg-gray-200 transition ease-in-out">
                                    <div class="flex justify-center">
                                        <FaUser class="text-3xl" />
                                    </div>
                                    <div class="flex justify-center">
                                        Users
                                    </div>
                                </div>
                            </Link>

                            <Link to="/" class="place-self-stretch">
                                <div class="flex-col justify-center bg-slate-100 py-8 px-7 rounded-xl hover:bg-gray-200 transition ease-in-out">
                                    <div class="flex justify-center">
                                        <FaUserCog class="text-3xl" />
                                    </div>
                                    <div class="flex justify-center">
                                        Permissions
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
