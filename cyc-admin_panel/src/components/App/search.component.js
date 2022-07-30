import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";

const search = ({ searchQuery, setSearchQuery }) => {
    return (
        <div>
            <form class="flex flex-row">
                <input
                    name="s"
                    type="search"
                    id="default-search"
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search entries" />
                <button type="submit" class="ease-in-out inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                </button>
            </form>
        </div>
    );
}
export default search;