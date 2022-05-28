import React, { Component } from "react";
import TrophyDataService from "../services/trophy.service";
export default class addTrophies extends Component {
  constructor(props) {
    super(props);
    this.onChangeTrophyName = this.onChangeTrophyName.bind(this);
    this.onChangeTrophyDescription = this.onChangeTrophyDescription.bind(this);
    this.onChangeTrophyIcon = this.onChangeTrophyIcon.bind(this);
    this.onChangeTotalProgress = this.onChangeTotalProgress.bind(this);
    this.onChangeTotalLevel = this.onChangeTotalLevel.bind(this);
    this.onChangeTrophyLemons = this.onChangeTrophyLemons.bind(this);

    this.saveTrophy = this.saveTrophy.bind(this);
    this.newTrophy = this.newTrophy.bind(this);
    this.state = {
      id: null,
      trophyName: "",
      trophyDescription: "",
      trophyIcon: "",
      totalProgress: "",
      totalLvl: "",
      trophyLemons: "",
      submitted: false
    };
  }
  onChangeTrophyName(e) {
    this.setState({
      trophyName: e.target.value,
    });
  }
  onChangeTrophyDescription(e) {
    this.setState({
      trophyDescription: e.target.value,
    });
  }
  onChangeTrophyIcon(e) {
    this.setState({
      trophyIcon: e.target.value,
    });
  }
  onChangeTotalProgress(e) {
    this.setState({
      totalProgress: e.target.value,
    });
  }
  onChangeTotalLevel(e) {
    this.setState({
      totalLvl: e.target.value,
    });
  }
  onChangeTrophyLemons(e) {
    this.setState({
      trophyLemons: e.target.value,
    });
  }
  saveTrophy() {
    var data = {
      trophyName: this.state.trophyName,
      trophyDescription: this.state.trophyDescription,
      trophyIcon: this.state.trophyIcon,
      totalProgress: this.state.totalProgress,
      totalLvl: this.state.totalLvl,
      trophyLemons: this.state.trophyLemons,
    };
    TrophyDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          trophyName: response.data.trophyName,
          trophyDescription: response.data.trophyDescription,
          trophyIcon: response.data.trophyIcon,
          totalProgress: response.data.totalProgress,
          totalLvl: response.data.totalLvl,
          trophyLemons: response.data.trophyLemons,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newTrophy() {
    this.setState({
      id: null,
      trophyName: "",
      trophyDescription: "",
      totalProgress: "",
      totalLvl: "",
      trophyLemons: "",
      submitted: false
    });
  }

  
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTrophy}>
              Add
            </button>
          </div>
        ) : (
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form>
            <div className="form-group mb-6">
              <label htmlFor="trophyName">Trophy Name</label>
              <input
                type="text"
                className="form-control block
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
                id="trophyName"
                required
                value={this.state.trophyName}
                onChange={this.onChangeTrophyName}
                name="trophyName"
              />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="trophyDescription">Trophy Description</label>
              <input
                type="text"
                className="form-control block
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
                id="trophyDescription"
                required
                value={this.state.trophyDescription}
                onChange={this.onChangeTrophyDescription}
                name="trophyDescription"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="trophyIcon">Trophy Icon</label>
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
                id="trophyIcon"
                required
                value={this.state.trophyIcon}
                onChange={this.onChangeTrophyIcon}
                name="trophyIcon"
              />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="totalProgress">Total Progress</label>
              <input
                type="text"
                className="form-control block
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
                id="totalProgress"
                required
                value={this.state.totalProgress}
                onChange={this.onChangeTotalProgress}
                name="totalProgress"
              />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="totalLvl">Total Level</label>
              <input
                type="text"
                className="form-control block
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
                id="totalLvl"
                required
                value={this.state.totalLvl}
                onChange={this.onChangeTotalLevel}
                name="totalLvl"
              />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="trophyLemons">Trophy Lemons</label>
              <input
                type="text"
                className="form-control block
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
                id="trophyLemons"
                required
                value={this.state.trophyLemons}
                onChange={this.onChangeTrophyLemons}
                name="trophyLemons"
              />
            </div>
            <button onClick={this.saveTrophy} className="btn btn-success   w-full
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

