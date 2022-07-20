import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div class="flex flex-col self-center items-center mb-10">
        {/* Title */}
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="py-4 text-center font-slim text-3xl text-bold">
            Our Team
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Find us here, you may reach us via email, phone or SMS.
          </p>
        </div>

        {/* Content Grid */}
        <div class="grid grid-cols-2 gap-20">
          {/* Col 1 */}
          <div class="col-span-1 flex flex-col space-y-10">
            {/* Ke Ying */}
            <div class="flex justify-start w-full">
              <img
                alt="contact"
                className="flex-shrink-0 object-cover object-center w-36 h-36 mb-4 rounded-full sm:mb-0 shadow-lg"
                src={require("../../images/aboutus/aboutus_banner.jpeg")}
              />
              <div class="flex flex-col px-10">
                <h1 class="text-xl text-bold">
                  Ang Ke Ying
                </h1>
                <p class="text-left leading-relaxed lg:w-2/3 text-gray-500">
                  Phone:
                </p>
                <p class="text-left leading-relaxed lg:w-2/3 text-gray-500">
                  Email:
                </p>
              </div>
            </div>
            {/* Bjorn */}
            <div class="flex justify-start w-full">
              <img
                alt="contact"
                className="flex-shrink-0 object-cover object-center w-36 h-36 mb-4 rounded-full sm:mb-0 shadow-lg"
                src={require("../../images/aboutus/aboutus_banner.jpeg")}
              />
              <div class="flex flex-col px-10">
                <h1 class="text-xl text-bold">
                  Bjorn Tin
                </h1>
                <p class="text-left leading-relaxed lg:w-2/3 text-gray-500">
                  Phone:
                </p>
                <p class="text-left leading-relaxed lg:w-2/3 text-gray-500">
                  Email:
                </p>
              </div>
            </div>
          </div>
          {/* Col 2 */}
          <div class="col-span-1 flex flex-col space-y-10">
            {/* Charisse */}
            <div class="flex justify-start w-full">
              <img
                alt="contact"
                className="flex-shrink-0 object-cover object-center w-36 h-36 mb-4 rounded-full sm:mb-0 shadow-lg"
                src={require("../../images/aboutus/aboutus_banner.jpeg")}
              />
              <div class="flex flex-col px-10">
                <h1 class="text-xl text-bold">
                  Charisse Yee
                </h1>
                <p class="text-left leading-relaxed lg:w-2/3 text-gray-500">
                  Phone:
                </p>
                <p class="text-left leading-relaxed lg:w-2/3 text-gray-500">
                  Email:
                </p>
              </div>
            </div>
            {/* Titus */}
            <div class="flex justify-start w-full">
              <img
                alt="contact"
                className="flex-shrink-0 object-cover object-center w-36 h-36 mb-4 rounded-full sm:mb-0 shadow-lg"
                src={require("../../images/aboutus/aboutus_banner.jpeg")}
              />
              <div class="flex flex-col px-10">
                <h1 class="text-xl text-bold">
                  Titus Lim
                </h1>
                <p class="text-left leading-relaxed lg:w-2/3 text-gray-500">
                  Phone:
                </p>
                <p class="text-left leading-relaxed lg:w-2/3 text-gray-500">
                  Email:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
