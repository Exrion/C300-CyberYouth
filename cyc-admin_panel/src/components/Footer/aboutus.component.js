import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="max-w-6xl p-2 mt-4 sm:m-auto sm:p-12">
        <section className="text-gray-700 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-col w-full mb-20 text-center">
              <h1 className="py-4 text-center font-slim text-3xl text-bold">
                Our Team
              </h1>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                It has been a long journey learning React and Node from scratch but we did it! This is us!
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2">
                <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0"
                    src={require("../../images/aboutus/titus.jpeg")}
                  ></img>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="text-lg font-medium text-gray-900 title-font">
                      Titus Lim
                    </h2>
                    <h3 className="mb-3 text-gray-500">UI Developer</h3>
                    <p className="mb-4">
                      Has an addiction to expensive audio equipment
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0"
                    src={require("../../images/aboutus/charisse.jpeg")}
                  ></img>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="text-lg font-medium text-gray-900 title-font">
                      Charisse Yee
                    </h2>
                    <h3 className="mb-3 text-gray-500">Backend Developer</h3>
                    <p className="mb-4">
                      Avid reader of many genres of books, novels and manga!
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0"
                    src={require("../../images/aboutus/bjorn.png")}
                  ></img>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="text-lg font-medium text-gray-900 title-font">
                      Bjorn Tin
                    </h2>
                    <h3 className="mb-3 text-gray-500">Backend Developer</h3>
                    <p className="mb-4">
                    Loves having a blast finding and listening to splendidly produced LitRPG audiobooks
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0"
                    src={require("../../images/aboutus/keying.png")}
                  ></img>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="text-lg font-medium text-gray-900 title-font">
                      Ke Ying
                    </h2>
                    <h3 className="mb-3 text-gray-500">Project Manager/Backend Developer</h3>
                    <p className="mb-4">
                      Always has an affinity with the arts, whether it be software devlopment or dance!
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
