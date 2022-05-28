import React, { Component } from "react";
import TierDataService from "../services/tier.service";
export default class addTiers extends Component {
  constructor(props) {
    super(props);
    this.onChangeTierName = this.onChangeTierName.bind(this);
    this.onChangeTierDescription = this.onChangeTierDescription.bind(this);
    this.onChangeTierIcon = this.onChangeTierIcon.bind(this);
    this.onChangeGrapesNeeded = this.onChangeGrapesNeeded.bind(this);
    this.onChangeLemonsAwarded = this.onChangeLemonsAwarded.bind(this);

    this.saveTier = this.saveTier.bind(this);
    this.newTier = this.newTier.bind(this);
    this.state = {
      tierName: "",
      tierDescription: "",
      tierIcon: "",
      grapesNeeded: "",
      lemonsAwarded: "",
      submitted: false
    };
  }
  onChangeTierName(e) {
    this.setState({
      tierName: e.target.value,
    });
  }
  onChangeTierDescription(e) {
    this.setState({
      tierDescription: e.target.value,
    });
  }
  onChangeTierIcon(e) {
    this.setState({
      tierIcon: e.target.value,
    });
  }
  onChangeGrapesNeeded(e) {
    this.setState({
      grapesNeeded: e.target.value,
    });
  }
  onChangeLemonsAwarded(e) {
    this.setState({
      lemonsAwarded: e.target.value,
    });
  }
  saveTier() {
    var data = {
      tierName: this.state.tierName,
      tierDescription: this.state.tierDescription,
      tierIcon: this.state.tierIcon,
      grapesNeeded: this.state.grapesNeeded,
      lemonsAwarded: this.state.lemonsAwarded
    };
    TierDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          tierName: response.data.tierName,
          tierDescription: response.data.tierDescription,
          tierIcon: response.data.tierIcon,
          grapesNeeded: response.data.grapesNeeded,
          lemonsAwarded: response.data.lemonsAwarded
        });
        console.log(response.data);
        this.setState.submitted = true;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newTier() {
    this.setState({
      tierName: "",
      tierDescription: "",
      tierIcon: "",
      grapesNeeded: "",
      lemonsAwarded: ""
    });
  }
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTier}>
              Add
            </button>
          </div>
        ) : (
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form>
          <div class="form-group mb-6">
              <label htmlFor="tierName">Tier Name</label>
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
                id="tierName"
                required
                value={this.state.tierName}
                onChange={this.onChangeTierName}
                name="tierName"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="tierDescription">Tier Description</label>
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
                id="tierDescription"
                required
                value={this.state.tierDescription}
                onChange={this.onChangeTierDescription}
                name="tierDescription"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="tierIcon">Tier Icon</label>
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
                id="tierIcon"
                required
                value={this.state.tierIcon}
                onChange={this.onChangeTierIcon}
                name="tierIcon"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="grapesNeeded">Grapes Needed</label>
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
                id="grapesNeeded"
                required
                value={this.state.grapesNeeded}
                onChange={this.onChangeGrapesNeeded}
                name="grapesNeeded"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="lemonsAwarded">Lemons Awarded</label>
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
                id="lemonsAwarded"
                required
                value={this.state.lemonsAwarded}
                onChange={this.onChangeLemonsAwarded}
                name="lemonsAwarded"
              />
            </div>
            <button onClick={this.saveTier} className="btn btn-success   w-full
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
