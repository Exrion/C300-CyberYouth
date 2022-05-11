import React, { Component } from "react";
import TrophyDataService from "../services/trophy.service";
export default class addTrophies extends Component {
  constructor(props) {
    super(props);
    this.onChangeTrophyName = this.onChangeTrophyName.bind(this);
    this.onChangeTrophyDescription = this.onChangeTrophyDescription.bind(this);
    this.onChangeTotalProgress = this.onChangeTotalProgress.bind(this);
    this.onChangeTotalLevel = this.onChangeTotalLevel.bind(this);
    this.onChangeTrophyLemons = this.onChangeTrophyLemons.bind(this);

    this.saveTrophy = this.saveTrophy.bind(this);
    this.newTrophy = this.newTrophy.bind(this);
    this.state = {
      id: null,
      trophyName: "",
      trophyDescription: "",
      totalProgress: "",
      totalLvl: "",
      trophyLemons: "",
      
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
      totalProgress: this.state.totalProgress,
      totalLvl: this.state.totalLvl,
      trophyLemons: this.state.trophyLemons,
      //   created_at: this.state.created_at,
      //   modified_at: this.state.modified_at
    };
    TrophyDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          trophyName: response.data.trophyName,
          trophyDescription: response.data.trophyDescription,
          totalProgress: response.data.totalProgress,
          totalLvl: response.data.totalLvl,
          trophyLemons: response.data.trophyLemons,
          
          //   created_at: response.data.created_at,
          //   modified_at: response.data.modified_at
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
      totalProgress: null,
      totalLvl: null,
      trophyLemons: null,
      //   created_at: null,
      //   modified_at: null
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
          <div>
            <div className="form-group">
              <label htmlFor="trophyName">Trophy Name</label>
              <input
                type="text"
                className="form-control"
                id="trophyName"
                required
                value={this.state.trophyName}
                onChange={this.onChangeTrophyName}
                name="trophyName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="trophyDescription">Trophy Description</label>
              <input
                type="text"
                className="form-control"
                id="trophyDescription"
                required
                value={this.state.trophyDescription}
                onChange={this.onChangeTrophyDescription}
                name="trophyDescription"
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalProgress">Total Progress</label>
              <input
                type="text"
                className="form-control"
                id="totalProgress"
                required
                value={this.state.totalProgress}
                onChange={this.onChangeTotalProgress}
                name="totalProgress"
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalLvl">Total Level</label>
              <input
                type="text"
                className="form-control"
                id="totalLvl"
                required
                value={this.state.totalLvl}
                onChange={this.onChangeTotalLevel}
                name="totalLvl"
              />
            </div>
            <div className="form-group">
              <label htmlFor="trophyLemons">Trophy Lemons</label>
              <input
                type="text"
                className="form-control"
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
          </div>
        )}
      </div>
    );
  }
}
