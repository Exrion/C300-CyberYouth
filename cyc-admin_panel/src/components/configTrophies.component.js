import React, { Component } from "react";
import TrophyDataService from "../services/trophy.service";
import { Link } from "react-router-dom";
export default class ConfigTrophies extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTrophies = this.retrieveTrophies.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTrophy = this.setActiveTrophy.bind(this);
    this.removeAllTrophies = this.removeAllTrophies.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.state = {
      trophies: [],
      currentTrophy: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }
  componentDidMount() {
    this.retrieveTrophies();
  }
  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle
    });
  }
  retrieveTrophies() {
    TrophyDataService.getAll()
      .then(response => {
        this.setState({
          trophies: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveTrophies();
    this.setState({
      currentTrophy: null,
      currentIndex: -1
    });
  }
  setActiveTrophy(trophy, index) {
    this.setState({
      currentTrophy: trophy,
      currentIndex: index
    });
  }
  removeAllTrophies() {
    TrophyDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchTitle() {
    TrophyDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          trophies: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { searchTitle, trophies, currentTrophy, currentIndex } = this.state;
    return (
      <div className="list row">
          <button class="bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
                    <Link to={"/addTrophies"} className="nav-link">
                        Add Trophies
                    </Link>
                </button>
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Trophies List</h4>
          <ul className="list-group">
            {trophies &&
              trophies.map((trophy, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(trophy, index)}
                  key={index}
                >
                  {trophy.title}
                </li>
              ))}
          </ul>
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTrophies}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentTrophy ? (
            <div>
              <h4>Trophy</h4>
              <div>
                <label>
                  <strong>Trophy Name:</strong>
                </label>{" "}
                {currentTrophy.trophy_name}
              </div>

              <div>
                <label>
                  <strong>Trophy Description:</strong>
                </label>{" "}
                {currentTrophy.trophy_description}
              </div>

              
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Trophy...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}