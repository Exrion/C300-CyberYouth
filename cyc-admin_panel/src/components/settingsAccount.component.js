import React, { Component, useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
//LinkedIn Modules
import { useLinkedIn } from "react-linkedin-login-oauth2";

const SettingAccount = () => {

  const [code, setCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const { linkedInLogin } = useLinkedIn({
    clientId: "86h0tc10xi54pb",
    redirectUri: `http://localhost:3000/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
      setCode(code);
      setErrorMessage("");
    },
    onError: (error) => {
      console.log(error);
      setCode("");
      setErrorMessage(error.errorMessage);
    },
  });

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

    //Logout by clearing local storage
   function logout() {
        localStorage.clear();
        window.location.href = "/";
         };
            
         //Retrieve user from localstorage
        const [user, setUser] = useState([]);

        useEffect(() => {
        const user = JSON.parse(localStorage.getItem('token'));
        if (user) {
            setUser(user);
        }
        }, []);
    
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
                                <p class="text-2xl text-bold text-left pb-2">{user.username}</p>
                                <p class="text-md text-bold text-left text-slate-600">{user.email}</p>
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

                        <div class="flex flex-col place-items-start">
                          <p class="text-2xl text-bold">Connect with LinkedIn</p>
                          <p class="text-left text-md text-slate-700">Connect your NEST panel account with LinkedIn!</p>
                          <button
                            class="flex flex-row justify-center place-items-center space-x-2 mt-2 h-7 ease-in-out text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                            onClick={linkedInLogin}
                          >
                            <p>Connect With LinkedIn</p>
                          </button>
                        </div>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={Post}>
                          Add Post
                        </button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={HashTag}>
                          Add HashTag
                        </button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={Event}>
                          Add Event
                        </button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={EditLinkedIn}>
                          Edit LinkedIn Page
                        </button>
                    </div>
                </div>
            </div>
        );
    };
export default SettingAccount