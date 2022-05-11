import React, { Component } from "react";
import TrophyDataService from "../services/trophy.service";
export default class addTrophies extends Component{
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
    //   created_at: null, 
    //   modified_at: null
    };
  }
  onChangeTrophyName(e) {
    this.setState({
      trophy_name: e.target.value
    });
  }
  onChangeTrophyDescription(e) {
    this.setState({
      trophy_description: e.target.value
    });
  }
  onChangeTotalProgress(e) {
    this.setState({
      total_progress: e.target.value
    });
  }
  onChangeTotalLevel(e) {
    this.setState({
      total_lvl: e.target.value
    });
  }
  onChangeTrophyLemons(e) {
    this.setState({
      trophy_lemons: e.target.value
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
      .then(response => {
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
      .catch(e => {
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="trophy_name"
                  required
                  value={this.state.trophy_name}
                  onChange={this.onChangeTrophyName}
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="trophy_description"
                  required
                  value={this.state.trophy_description}
                  onChange={this.onChangeTrophyDescription}
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                  id="total_progress"
                  required
                  value={this.state.total_progress}
                  onChange={this.onChangeTotalProgress}
                  name="total_progress"
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                  id="total_lvl"
                  required
                  value={this.state.total_lvl}
                  onChange={this.onChangeTotalLevel}
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="trophy_lemons"
                  required
                  value={this.state.trophy_lemons}
                  onChange={this.onChangeTrophyLemons}
                  placeholder="Trophy Lemons:" />
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
                ease-in-out" 
                onClick={this.saveTrophy}
                className="btn btn-success">Send</button>
            </form>
          </div>
        );
    }
}