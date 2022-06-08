import React, { Component } from "react";
import AnnouncementDataService from "../services/announcement.service";

export default class addAnnouncements extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnnouncementTitle = this.onChangeAnnouncementTitle.bind(this);
    this.onChangeAnnouncementType = this.onChangeAnnouncementType.bind(this);
    this.onChangeAnnouncementBody = this.onChangeAnnouncementBody.bind(this);
    this.onChangeAnnouncementImg = this.onChangeAnnouncementImg.bind(this);
    this.onChangeAnnouncementLink = this.onChangeAnnouncementLink.bind(this);

    this.saveAnnouncement = this.saveAnnouncement.bind(this);
    this.newAnnouncement = this.newAnnouncement.bind(this);
    this.state = {
      id: null,
      announcementTitle: "",
      announcementType: "",
      announcementBody: "",
      announcementImg: "",
      announcementLink: "",
    };
  }
  onChangeAnnouncementTitle(e) {
    this.setState({
      announcementTitle: e.target.value,
    });
  }
  onChangeAnnouncementType(e) {
    this.setState({
      announcementType: e.target.value,
    });
  }
  onChangeAnnouncementBody(e) {
    this.setState({
      announcementBody: e.target.value,
    });
  }
  onChangeAnnouncementImg(e) {
    this.setState({
      announcementImg: e.target.value,
    });
  }
  onChangeAnnouncementLink(e) {
    this.setState({
      announcementLink: e.target.value,
    });
  }
  saveAnnouncement() {
    var data = {
      announcementTitle: this.state.announcementTitle,
      announcementType: this.state.announcementType,
      announcementBody: this.state.announcementBody,
      announcementImg: this.state.announcementImg,
      announcementLink: this.state.announcementLink,
      //   created_at: this.state.created_at,
      //   modified_at: this.state.modified_at
    };
    AnnouncementDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          announcementTitle: response.data.announcementTitle,
          announcementType: response.data.announcementType,
          announcementBody: response.data.announcementBody,
          announcementImg: response.data.announcementImg,
          announcementLink: response.data.announcementLink,

          //   created_at: response.data.created_at,
          //   modified_at: response.data.modified_at
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newAnnouncement() {
    this.setState({
      id: null,
      announcementTitle: "",
      announcementType: "",
      announcementBody: "",
      announcementImg: "",
      announcementLink: "",
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
            <button className="btn btn-success" onClick={this.newAnnouncement}>
              Add
            </button>
          </div>
        ) : (
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form>
              <div class="form-group mb-6">
                <label htmlFor="announcementTitle">Announcement Title</label>
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
                  id="announcementTitle"
                  required
                  value={this.state.announcementTitle}
                  onChange={this.onChangeAnnouncementTitle}
                  name="announcementTitle"
                />
              </div>
              <div class="form-group mb-6">
                <label htmlFor="announcementType">Announcement Type</label>
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
                  id="announcementType"
                  required
                  value={this.state.announcementType}
                  onChange={this.onChangeAnnouncementType}
                  name="announcementType"
                />
              </div>
              <div class="form-group mb-6">
                <label htmlFor="announcementBody">Announcement Body</label>
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
                  id="announcementBody"
                  required
                  value={this.state.announcementBody}
                  onChange={this.onChangeAnnouncementBody}
                  name="announcementBody"
                />
              </div>
              <div class="form-group mb-6">
                <label htmlFor="announcementImg">Announcement Images</label>
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
                  id="announcementImg"
                  required
                  value={this.state.announcementImg}
                  onChange={this.onChangeAnnouncementImg}
                  name="announcementImg"
                />
              </div>
              <div class="form-group mb-6">
                <label htmlFor="announcementLink">Announcement Link</label>
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
                  id="announcementLink"
                  required
                  value={this.state.announcementLink}
                  onChange={this.onChangeAnnouncementLink}
                  name="announcementLink"
                />
              </div>
              <button
                onClick={this.saveAnnouncement}
                className="btn btn-success   w-full
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
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
