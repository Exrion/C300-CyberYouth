import React, { Component } from "react";

class ProfileCard extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-container">
          <img
            src={this.state.pictureURL}
            alt=""
            height="200px"
            width="200px"
          />
          <h1>
            <a
              href={this.state.profileURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.state.firstName} {this.state.lastName}
            </a>
          </h1>
          <h2>{this.state.headline}</h2>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
