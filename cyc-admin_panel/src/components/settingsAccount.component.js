import React, { Component } from "react";
import { FaPencilAlt } from "react-icons/fa";

const SettingAccount = () => {

    //Logout by clearing local storage
   function logout() {
        localStorage.clear();
        window.location.href = "/";
         };
            
    
        return (
            <div class="xl:mx-5 md:mx-20 flex-1">
                {/* Title */}
                <div class="flex justify-start">
                    <h1 class="text-3xl ml-5 mr-5">Account Settings</h1>
                </div>
                
                {/* Content */}
                <div class="flex flex-col space-y-5 p-10 xl:grid xl:grid-cols-3">
                    {/* Profile */}
                    <div class="flex flex-row group relative drop-shadow-2xl rounded-full p-5 xl:col-span-2">
                        {/* Picture */}
                        <img src={require('../images/navbar/pepe.png')} className="rounded-full h-9 w-9 w-32 h-32 ease-in-out group-hover:brightness-95 hover:border-2" alt='user portrait' />
                        <div class="ml-20 flex flex-col">
                            <div>
                                <p class="text-2xl text-bold text-left pb-2">John Doe</p>
                                <p class="text-md text-bold text-left text-slate-600">john.doe@gmail.com</p>
                                <p class="text-md text-bold text-left text-slate-600">21 July 1998</p>
                            </div>
                            <button class="flex flex-row justify-center place-items-center space-x-2 mt-2 h-7 ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                                <FaPencilAlt />
                                <p>Edit Profile</p>
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-5 xl:col-span-1">
                        {/* Password */}
                        <div class="flex flex-col place-items-start">
                            <p class="text-2xl text-bold">
                                Password
                            </p>
                            <p class="text-md text-slate-700 text-left">Last changed: 17 September 2021</p>
                            <button class="flex flex-row justify-center place-items-center space-x-2 mt-2 h-7 ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                                <p>Change Password</p>
                            </button>
                        </div>

                        {/* Logout */}
                        <div class="flex flex-col place-items-start">
                            <p class="text-2xl text-bold">
                                Logout
                            </p>
                            <p class="text-md text-slate-700">Logout of account</p>
                            <button class="flex flex-row justify-center place-items-center space-x-2 mt-2 h-7 ease-in-out text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    onClick={logout}
                                    >
                                <p>Logout</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
export default SettingAccount