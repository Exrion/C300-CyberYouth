import React, { Component } from "react";

export default class LockedOut extends Component {
  clearToken() {
    localStorage.clear();
    window.location.href = "/";
  }
  render() {
    return (
      <div>
        <div>
          Your Account has been locked. Please contact an administrator.
        </div>

        <button
          onClick={this.clearToken}
          className="btn btn-success
                px-4
                py-2.5
                bg-gray-100
                text-black
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-gray-200 hover:shadow-lg
                focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-gray-100 active:shadow-lg
                transition
                duration-150
                ease-in-out"
        >
          Click Here To Reset Session. Your account will still remain locked.
        </button>
      </div>
    );
  }
}
