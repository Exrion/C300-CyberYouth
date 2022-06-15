import React, { useState } from "react";
import TrackDataService from "../services/track.service";

const AddTracks = () => {
  const initialTrackState = {
    id: null,
    trackName: "",
    trackDescription: "",
    trackProvider: "",
    trackLink: "",
    trackTags: "",
    trackLemons: null
  };

  const [track, setTrack] = useState(initialTrackState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setTrack({ ...track, [name]: value });
  };
  const saveTrack = () => {
    var data = {
      trackName: track.trackName,
      trackDescription: track.trackDescription,
      trackProvider: track.trackProvider,
      trackLink: track.trackLink,
      trackTags: track.trackTags,
      trackLemons: track.trackLemons
    };
    TrackDataService.create(data)
      .then(response => {
        setTrack({
          id: response.data.id,
          trackName: response.data.trackName,
          trackDescription: response.data.trackDescription,
          trackProvider: response.data.trackProvider,
          trackLink: response.data.trackLink,
          trackTags: response.data.trackTags,
          trackLemons: response.data.trackLemons
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newTrack = () => {
    setTrack(initialTrackState);
    setSubmitted(false);
  };

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTrack}>
              Add
            </button>
          </div>
        ) : (
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form>
              <div class="form-group mb-6">
                <label htmlFor="trackName">Track Name</label>
                <input
                  type="text"
                  class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="trackName"
                  required
                  value={track.trackName}
                  onChange={handleInputChange}
                  name="trackName"
                />
              </div>
              <div class="form-group mb-6">
                <label htmlFor="trackDescription">Track Description</label>
                <input
                  type="text"
                  class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="trackDescription"
                  required
                  value={track.trackDescription}
                  onChange={handleInputChange}
                  name="trackDescription"
                />
              </div>
              <div class="form-group mb-6">
                <label htmlFor="trackProvider">Track Provider</label>
                <input
                  type="text"
                  class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="trackProvider"
                  required
                  value={track.trackProvider}
                  onChange={handleInputChange}
                  name="trackProvider"
                />
              </div>
              <div class="form-group mb-6">
                <label htmlFor="trackLink">Track Link</label>
                <input
                  type="text"
                  class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="trackLink"
                  required
                  value={track.trackLink}
                  onChange={handleInputChange}
                  name="trackLink"
                />
              </div>
              <div class="form-group mb-6">
                <label htmlFor="trackTags">Track Tag</label>
                <input
                  type="text"
                  class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="trackTags"
                  required
                  value={track.trackTags}
                  onChange={handleInputChange}
                  name="trackTags"
                />
              </div>
              <div class="form-group mb-6">
                <label htmlFor="trackLemons">Track Lemons</label>
                <input
                  type="text"
                  class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="trackLemons"
                  required
                  value={track.trackLemons}
                  onChange={handleInputChange}
                  name="trackLemons"
                />
              </div>

              <button
                onClick={saveTrack}
                className="btn btn-success   w-full
                px-6
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
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    );
  };
export default AddTracks;
