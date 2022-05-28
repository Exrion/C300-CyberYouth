import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import TrackDataService from "../services/track.service";

export default class ConfigTracks extends Component{
    constructor(props) {
        super(props);

        this.onChangeSearchTrackName = this.onChangeSearchTrackName.bind(this);
        this.retrieveTracks = this.retrieveTracks.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTrack = this.setActiveTrack.bind(this);
        // this.removeAllTracks = this.removeAllTracks.bind(this);
        this.searchTrackName = this.searchTrackName.bind(this);

        this.state = {
            items: [],
            currentTrack: null,
            currentIndex: -1,
            searchTrackName: "",
            DataisLoaded: false
        };
    }

    componentDidMount() {
        this.retrieveTracks();
        fetch(
            "http://localhost:8080/api/tracks")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    onChangeSearchTrackName(e){
        const searchTrackName = e.target.value;
        this.setState({
            searchTrackName: searchTrackName
        });
    }

    retrieveTracks(){
        TrackDataService.getAll()
        .then(response => {
            this.setState({
                tracks: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    refreshList(){
        this.retrieveTracks();
        this.setState({
            currentTrack: null,
            currentIndex: -1
        });
    }

    setActiveTrack(track, index){
        this.setState({
            currentTrack: track,
            currentIndex: index
        });
    }

    searchTrackName() {
        TrackDataService.findByTrackName(this.state.searchTrackName)
          .then(response => {
            this.setState({
              tracks: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

    render() {
        // const { DataisLoaded, items } = this.state;
        const { searchTrackName, tracks, currentTrack, currentIndex, items, DataisLoaded} = this.state;
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
                <h1 class="text-3xl w-12/12">Tracks</h1>
                <div class="flex flex-row py-2 justify-between w-12/12">
                    <div class="justify-start py-2">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-full">
                            {/*TO ADDD LATER KE YING!!! :) */}
                            <Link to="/addTracks">
                                <FaPlus />
                            </Link>

                        </button>
                    </div>
                    <div className="list row">
                    <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Search by TrackName"
                        value={searchTrackName}
                        onChange={this.onChangeSearchTrackName}
                        />
                        <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={this.searchTrackName}
                        > 
                            Search
                        </button>
                        </div>
                    </div>
                    </div>
                    </div>
                    {/* <form class="justify-end">
                        <label htmlFor="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="form-control"
                                placeholder="Search by Name"
                                value={searchTrackName}
                                onChange={this.onChangeSearchTrackName} 
                                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search entries" required />
                        </div>
                    </form> */}
                    
                </div>
                <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-4 w-12/12">
                    <ul className="list-group">
                        {tracks && tracks.map((track, index) => (
                        <div
                        class="p-4 h-auto group w-auto flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
                        >
                            <li className={
                                "list-group-item " +
                                (index === currentIndex ? "active" : "")
                              }
                              onClick={() => this.setActiveTrack(track, index)}
                              key={index} >
                                <div class="flex flex-col justify-between p-4 leading-normal mt-12 group-hover:hidden grow flex-1">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{track.trackName}</h5>
                                    <p class="mb-3 font-normal">{track.trackDescription}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Total Provider: {track.totalProvider}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Total Level: {track.trackLink}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Track Tags: {track.trackTags}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Track Lemons: {track.trackLemons}</p>
                                </div>
                              </li>
                            </div>
                        ))
                        }
                        <div class="hidden group-hover:flex group-hover:flex-col xl:px-12 md:px-16 sm:py-6 space-y-4 grow flex-1">
                        <div>
                            <button class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full">
                                <Link to="">
                                    Edit
                                </Link>
                            </button> 
                        </div>
                        <div>
                            <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
                                <Link to="">
                                    Delete
                                </Link>
                            </button>
                        </div>
                    </div>
                    </ul>
                    {/* <div class="hidden group-hover:flex group-hover:flex-col xl:px-12 md:px-16 sm:py-6 space-y-4 grow flex-1">
                        <div>
                            <button class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full">
                                <Link to="">
                                    Edit
                                </Link>
                            </button> 
                        </div>
                        <div>
                            <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
                                <Link to="">
                                    Delete
                                </Link>
                            </button>
                        </div>
                    </div> */}
                
                </div>
            </div>
            );
        }
    }
                    {/* {
                        items.map((item) => (
                            <div
                                class="p-4 h-auto group w-auto flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
                            >
                                <div class="flex flex-col justify-between p-4 leading-normal mt-12 group-hover:hidden grow flex-1">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.trackName}</h5>
                                    <p class="mb-3 font-normal">{item.trackDescription}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Total Provider: {item.totalProvider}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Total Level: {item.trackLink}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Track Tags: {item.trackTags}</p>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Track Lemons: {item.trackLemons}</p>
                                    
                                </div>
                                <div class="hidden group-hover:flex group-hover:flex-col xl:px-12 md:px-16 sm:py-6 space-y-4 grow flex-1">
                                    <div>
                                        <button class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full">
                                            <Link to="">
                                                Edit
                                            </Link>
                                        </button> 
                                    </div>
                                    <div>
                                        <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
                                            <Link to="">
                                                Delete
                                            </Link>
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
} */}