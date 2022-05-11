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

<<<<<<< HEAD
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
=======

export default class addTiers extends Component{
    render() {
        
        return (
            
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form>

            <div class="form-group mb-6">
                <input type="text" class="form-control block
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput11"
                  placeholder="Trophy Id:" />
              </div>

              <div class="form-group mb-6">
                <input type="text" class="form-control block
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                  placeholder="Trophy Name:" />
              </div>
              <div class="form-group mb-6">
                <input type="text" class="form-control block
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                  placeholder="Trophy Description:" />
              </div>
              <div class="form-group mb-6">
                <input type="text" class="form-control block
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput9"
                  placeholder="Trophy Progress:" />
              </div>

              <div class="form-group mb-6">
                <input type="text" class="form-control block
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput10"
                  placeholder="Total Level:" />
              </div>

              <div class="form-group mb-6">
                <input type="text" class="form-control block
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput11"
                  placeholder="Trophy Lemons:" />
              </div>
              
              <div class="form-group mb-6">
                <input type="text" class="form-control block
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput11"
                  placeholder="Trophy Img:" />
              </div>

              <button type="submit" class="
                w-full
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
                ease-in-out">Send</button>
            </form>
>>>>>>> 78f91117034707a9cd8c2ad439f0e43df46db173
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
