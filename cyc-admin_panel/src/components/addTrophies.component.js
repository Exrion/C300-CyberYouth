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
      trophy_name: "",
      trophy_description: "",
      total_progress: null,
      total_lvl: null,
      trophy_lemons: null,
      created_at: null,
      modified_at: null,
    };
  }
  onChangeTrophyName(e) {
    this.setState({
      trophy_name: e.target.value,
    });
  }
  onChangeTrophyDescription(e) {
    this.setState({
      trophy_description: e.target.value,
    });
  }
  onChangeTotalProgress(e) {
    this.setState({
      total_progress: e.target.value,
    });
  }
  onChangeTotalLevel(e) {
    this.setState({
      total_lvl: e.target.value,
    });
  }
  onChangeTrophyLemons(e) {
    this.setState({
      trophy_lemons: e.target.value,
    });
  }
  saveTrophy() {
    var data = {
      trophy_name: this.state.trophy_name,
      trophy_description: this.state.trophy_description,
      total_progress: this.state.total_progress,
      total_lvl: this.state.total_lvl,
      trophy_lemons: this.state.trophy_lemons,
      //   created_at: this.state.created_at,
      //   modified_at: this.state.modified_at
    };
    TrophyDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          trophy_name: response.data.trophy_name,
          trophy_description: response.data.trophy_description,
          total_progress: response.data.total_progress,
          total_lvl: response.data.total_lvl,
          trophy_lemons: response.data.trophy_lemons,
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
      trophy_name: "",
      trophy_description: "",
      total_progress: null,
      total_lvl: null,
      trophy_lemons: null,
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
              <label htmlFor="trophy_name">Trophy Name</label>
              <input
                type="text"
                className="form-control"
                id="trophy_name"
                required
                value={this.state.trophy_name}
                onChange={this.onChangeTrophyName}
                name="trophy_name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="trophy_description">Trophy Description</label>
              <input
                type="text"
                className="form-control"
                id="trophy_description"
                required
                value={this.state.trophy_description}
                onChange={this.onChangeTrophyDescription}
                name="trophy_description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="total_progress">Total Progress</label>
              <input
                type="text"
                className="form-control"
                id="total_progress"
                required
                value={this.state.total_progress}
                onChange={this.onChangeTotalProgress}
                name="total_progress"
              />
            </div>
            <div className="form-group">
              <label htmlFor="total_lvl">Total Level</label>
              <input
                type="text"
                className="form-control"
                id="total_lvl"
                required
                value={this.state.total_lvl}
                onChange={this.onChangeTotalLevel}
                name="total_lvl"
              />
            </div>
            <div className="form-group">
              <label htmlFor="trophy_lemons">Trophy Lemons</label>
              <input
                type="text"
                className="form-control"
                id="trophy_lemons"
                required
                value={this.state.trophy_lemons}
                onChange={this.onChangeTrophyLemons}
                name="trophy_lemons"
              />
            </div>
            <button onClick={this.saveTrophy} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
