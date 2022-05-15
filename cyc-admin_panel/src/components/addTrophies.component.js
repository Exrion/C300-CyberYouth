import React, { Component } from "react";
import TrophyDataService from "../services/trophy.service";
<<<<<<< HEAD
export default class addTrophies extends Component {
=======
export default class addTrophies extends Component{
>>>>>>> 8948b5d28c491f605d10b78cbcb545cc4edebd39
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
<<<<<<< HEAD
      trophyName: "",
      trophyDescription: "",
      totalProgress: "",
      totalLvl: "",
      trophyLemons: "",
      
=======
      trophy_name: "",
      trophy_description: "", 
      total_progress: null,
      total_lvl: null,
      trophy_lemons: null,
    //   created_at: null, 
    //   modified_at: null
>>>>>>> 8948b5d28c491f605d10b78cbcb545cc4edebd39
    };
  }
  onChangeTrophyName(e) {
    this.setState({
<<<<<<< HEAD
      trophyName: e.target.value,
=======
      trophy_name: e.target.value
>>>>>>> 8948b5d28c491f605d10b78cbcb545cc4edebd39
    });
  }
  onChangeTrophyDescription(e) {
    this.setState({
<<<<<<< HEAD
      trophyDescription: e.target.value,
=======
      trophy_description: e.target.value
>>>>>>> 8948b5d28c491f605d10b78cbcb545cc4edebd39
    });
  }
  onChangeTotalProgress(e) {
    this.setState({
<<<<<<< HEAD
      totalProgress: e.target.value,
=======
      total_progress: e.target.value
>>>>>>> 8948b5d28c491f605d10b78cbcb545cc4edebd39
    });
  }
  onChangeTotalLevel(e) {
    this.setState({
<<<<<<< HEAD
      totalLvl: e.target.value,
=======
      total_lvl: e.target.value
>>>>>>> 8948b5d28c491f605d10b78cbcb545cc4edebd39
    });
  }
  onChangeTrophyLemons(e) {
    this.setState({
<<<<<<< HEAD
      trophyLemons: e.target.value,
=======
      trophy_lemons: e.target.value
>>>>>>> 8948b5d28c491f605d10b78cbcb545cc4edebd39
    });
  }
  saveTrophy() {
    var data = {
<<<<<<< HEAD
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
=======
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
>>>>>>> 8948b5d28c491f605d10b78cbcb545cc4edebd39
        console.log(e);
      });
  }
  newTrophy() {
    this.setState({
      id: null,
<<<<<<< HEAD
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
=======
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
>>>>>>> 8948b5d28c491f605d10b78cbcb545cc4edebd39
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
<<<<<<< HEAD
                ease-in-out">
              Submit
            </button>
=======
                ease-in-out" 
                onClick={this.saveTrophy}
                className="btn btn-success">Send</button>
            </form>
>>>>>>> 8948b5d28c491f605d10b78cbcb545cc4edebd39
          </div>
        )}
      </div>
    );
  }
}
