import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaFastForward, FaTrophy, FaLongArrowAltUp, FaStackExchange, FaVolumeUp, FaComment, FaHashtag, FaCalendarPlus, FaPencilAlt } from "react-icons/fa";

const Dashboard = () => {
    //Retrieve user from localstorage
    const [user, setUser] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('token'));
        if (user) {
            setUser(user);
        }
    }, []);

    const Post = () => {
        const LinkedInPost = `https://www.linkedin.com/company/82344804/admin/?share=true`;
        const width = 600,
            height = 600,
            left = window.screen.width / 2 - width / 2,
            top = window.screen.height / 2 - height / 2;
        window.open(
            LinkedInPost,
            'Linkedin',
            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
            width +
            ', height=' +
            height +
            ', top=' +
            top +
            ', left=' +
            left
        );
    };

    const HashTag = () => {
        const LinkedInTag = `https://www.linkedin.com/company/82344804/admin/?activeTab=hashtags&edit=true`;
        const width = 850,
            height = 600,
            left = window.screen.width / 2 - width / 2,
            top = window.screen.height / 2 - height / 2;
        window.open(
            LinkedInTag,
            'Linkedin',
            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
            width +
            ', height=' +
            height +
            ', top=' +
            top +
            ', left=' +
            left
        );
    };

    const Event = () => {
        const LinkedInEvent = `https://www.linkedin.com/company/82344804/admin/notifications/events/`;
        const width = 850,
            height = 900,
            left = window.screen.width / 2 - width / 2,
            top = window.screen.height / 2 - height / 2;
        window.open(
            LinkedInEvent,
            'Linkedin',
            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
            width +
            ', height=' +
            height +
            ', top=' +
            top +
            ', left=' +
            left
        );
    }

    const EditLinkedIn = () => {
        const LinkedInEdit = `https://www.linkedin.com/company/82344804/admin/?activeTab=details&edit=true`;
        const width = 850,
            height = 600,
            left = window.screen.width / 2 - width / 2,
            top = window.screen.height / 2 - height / 2;
        window.open(
            LinkedInEdit,
            'Linkedin',
            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
            width +
            ', height=' +
            height +
            ', top=' +
            top +
            ', left=' +
            left
        );
    }

    return (

        <div class="flex-col flex space-y-10 ml-5 mr-5">

            <div class="flex justify-start">
                <h1 class="text-3xl">Welcome, {user.username}</h1>
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
                    <h3 class="text-2xl bg-blue-600 p-2 px-10 text-white rounded-t-xl shadow">LinkedIn Integration</h3>
                </div>

                {/* Content */}
                <div class="shadow">
                    <div class="grid content-start gap-x-6 p-6 w-max grid-flow-col grid-rows-1">

                        <a onClick={Post} class="place-self-stretch">
                            <div class="flex-col justify-center bg-slate-100 py-8 px-12 rounded-xl hover:bg-gray-200 transition ease-in-out">
                                <div class="flex justify-center">
                                    <FaComment class="text-3xl" />
                                </div>
                                <div class="flex justify-center">
                                    Add Post
                                </div>
                            </div>
                        </a>

                        <a onClick={HashTag} class="place-self-stretch">
                            <div class="flex-col justify-center bg-slate-100 py-8 px-7 rounded-xl hover:bg-gray-200 transition ease-in-out">
                                <div class="flex justify-center">
                                    <FaHashtag class="text-3xl" />
                                </div>
                                <div class="flex justify-center">
                                    Add a Hashtag
                                </div>
                            </div>
                        </a>

                        <a onClick={Event} class="place-self-stretch">
                            <div class="flex-col justify-center bg-slate-100 py-8 px-12 rounded-xl hover:bg-gray-200 transition ease-in-out">
                                <div class="flex justify-center">
                                    <FaCalendarPlus class="text-3xl" />
                                </div>
                                <div class="flex justify-center">
                                    Add Event
                                </div>
                            </div>
                        </a>

                        <a onClick={EditLinkedIn} class="place-self-stretch">
                            <div class="flex-col justify-center bg-slate-100 py-8 px-7 rounded-xl hover:bg-gray-200 transition ease-in-out">
                                <div class="flex justify-center">
                                    <FaPencilAlt class="text-3xl" />
                                </div>
                                <div class="flex justify-center">
                                    Edit Profile
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard

