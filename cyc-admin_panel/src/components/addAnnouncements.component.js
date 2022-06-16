import React, { useState } from "react";
import AnnouncementDataService from "../services/announcement.service";

const AddAnnouncements = () => {
  const initialAnnouncementState = {
    id: null,
    announcementTitle: "",
    announcementType: "",
    announcementBody: "",
    announcementImg: "",
    announcementLink: "",
  };

  const [announcement, setAnnouncement] = useState(initialAnnouncementState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setAnnouncement({ ...announcement, [name]: value });
  };
  const saveAnnouncement = () => {
    var data = {
      announcementTitle: announcement.announcementTitle,
      announcementType: announcement.announcementType,
      announcementBody: announcement.announcementBody,
      announcementImg: announcement.announcementImg,
      announcementLink: announcement.announcementLink
    };
    AnnouncementDataService.create(data)
      .then(response => {
        setAnnouncement({
          id: response.data.id,
          announcementTitle: response.data.announcementTitle,
          announcementType: response.data.announcementType,
          announcementBody: response.data.announcementBody,
          announcementImg: response.data.announcementImg,
          announcementLink: response.data.announcementLink
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newAnnouncement = () => {
    setAnnouncement(initialAnnouncementState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newAnnouncement}>
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
                value={announcement.announcementTitle}
                onChange={handleInputChange}
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
                value={announcement.announcementType}
                onChange={handleInputChange}
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
                value={announcement.announcementBody}
                onChange={handleInputChange}
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
                value={announcement.announcementImg}
                onChange={handleInputChange}
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
                value={announcement.announcementLink}
                onChange={handleInputChange}
                name="announcementLink"
              />
            </div>
            <button
              onClick={saveAnnouncement}
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
};
export default AddAnnouncements;