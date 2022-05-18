import React, { Component } from "react";
import TrackDataService from "../services/track.service";
export default class addTracks extends Component {
  constructor(props) {
    super(props);
    this.onChangeTrackName = this.onChangeTrackName.bind(this);
    this.onChangeTrackDescription = this.onChangeTrackDescription.bind(this);
    this.onChangeTrackProvider = this.onChangeTrackProvider.bind(this);
    this.onChangeTrackLink = this.onChangeTrackLink.bind(this);
    this.onChangeTrackTags = this.onChangeTrackTags.bind(this);
    this.onChangeTrackLemons = this.onChangeTrackLemons.bind(this);
    this.onChangeCreatedAt = this.onChangeCreatedAt.bind(this);
    this.onChangeModifiedAt = this.onChangeModifiedAt.bind(this);

    this.saveTrack = this.saveTrack.bind(this);
    this.newTrack = this.newTrack.bind(this);
    this.state = {
      id: null,
      trackName: "",
      trackDescription: "",
      trackProvider: "",
      trackLink: "",
      trackTags: "",
      trackLemons: "",
      createdAt: "",
      modifiedAt: "",
    };
  }
  onChangeTrackName(t){
    this.setState({
      trackName: t.target.value,
    });
  }
  onChangeTrackDescription(t){
    this.setState({
      trackDescription: t.target.value,
    });
  }
  onChangeTrackProvider(t){
    this.setState({
      trackProvider: t.target.value
    })
  }
  onChangeTrackLink(t){
    this.setState({
      trackLink: t.target.value
    })
  }
  onChangeTrackTags(t){
    this.setState({
      trackTags: t.target.value
    })
  }
  onChangeTrackLemons(t){
    this.setState({
      trackLemons: t.target.value
    })
  }
  onChangeCreatedAt(t){
    this.setState({
      createdAt: t.target.value
    })
  }
  onChangeModifiedAt(t){
    this.setState({
      modifiedAt: t.target.value
    })
  }
  saveTrack(){
    var data = {
      trackName: this.state.trackName,
      trackDescription: this.state.trackDescription,
      trackProvider: this.state.trackProvider,
      trackLink: this.state.trackLink,
      trackTag: this.state.trackTag,
      trackLemons: this.state.trackLemons,
      createdAt: this.state.createdAt,
      modifiedAt: this.state.modifiedAt
    };
    TrackDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          trackName: response.data.trackName,
          trackDescription: response.data.trackDescription,
          trackProvider: response.data.trackProvider,
          trackLink: response.data.trackLink,
          trackLemons: response.data.trackLemons,
          createdAt: response.data.createdAt,
          modifiedAt: response.data.modifiedAt,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newTrack() {
    this.setState({
      id: null,
      trackName: "",
      trackDescription: "",
      trackProvider: "",
      trackLink: "",
      trackTags: "",
      trackLemons: null,
      createdAt: null,
      modifiedAt: null
    });
  }
    render() {
        return (
          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className = "btn btn-success" onClick={this.newTrack}>
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
                  value={this.state.trackName}
                  onChange={this.onChangeTrackName}
                  name="trackName"
                />
              </div>
              <div class ="form-group mb-6">
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
                  value={this.state.trackDescription}
                  onChange={this.onChangeTrackDescription}
                  name="trackDescription"
                />
              </div>
              <div class ="form-group mb-6">
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
                  value={this.state.trackProvider}
                  onChange={this.onChangeTrackProvider}
                  name="trackProvider"
                />
              </div>
              <div class ="form-group mb-6">
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
                  value={this.state.trackLink}
                  onChange={this.onChangeTrackLink}
                  name="trackLink"
                />
              </div>
              <div class ="form-group mb-6">
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
                  value={this.state.trackTags}
                  onChange={this.onChangeTrackTag}
                  name="trackTags"
                />
              </div>
              <div class ="form-group mb-6">
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
                  value={this.state.trackLemons}
                  onChange={this.onChangeTrackLemons}
                  name="trackLemons"
                />
              </div>
              <div class ="form-group mb-6">
                <label htmlFor="createdAt">Created At</label>
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
                  id="createdAt"
                  required
                  value={this.state.createdAt}
                  onChange={this.onChangeCreatedAt}
                  name="createdAt"
                />
              </div>
              <div class ="form-group mb-6">
                <label htmlFor="modifiedAt">Modified At</label>
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
                  id="modifiedAt"
                  required
                  value={this.state.modifiedAt}
                  onChange={this.onChangeModifiedAt}
                  name="modifiedAt"
                />
              </div>

              <button onClick={this.saveTrack} className="btn btn-success   w-full
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
                ease-in-out">
              Submit
            </button>
            </form>
          </div>
          )}
      </div>
    );
  }
}
