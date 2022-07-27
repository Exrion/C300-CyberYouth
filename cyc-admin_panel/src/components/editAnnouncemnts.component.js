import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import AnnouncementDataService from "../services/announcement.service";
import LogBookDataService from "../services/logbook.service";
import EmailDataService from "../services/email.service";
const EditAnnouncement = props => {
  const { id } = useParams();
  let navigate = useNavigate();
  const initialAnnouncementState = {
    id: null,
    announcementTitle: "",
    announcementType: "",
    announcementBody: "",
    announcementImg: "",
    announcementLink: ""

  };
  const [currentAnnouncement, setCurrentAnnouncement] = useState(initialAnnouncementState);
  const [message, setMessage] = useState("");
  const getAnnouncement = id => {
    AnnouncementDataService.get(id)
      .then(response => {
        setCurrentAnnouncement(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
      getAnnouncement(id);
  }, [id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentAnnouncement({ ...currentAnnouncement, [name]: value });
    setLogBook({ ...logbook, [name]: value });
  };

  const updateAnnouncement = () => {
    AnnouncementDataService.update(currentAnnouncement.id, currentAnnouncement)
      .then(response => {
        console.log(response.data);
        setMessage("The Announcement was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const deleteAnnouncement = () => {
    AnnouncementDataService.remove(currentAnnouncement.id)
      .then(response => {
        console.log(response.data);
        navigate("/configAnnouncements");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const initialLogBookState = {
    id: null,
    editItemID: "",
    modificationDetail: "",
  };
  const [logbook, setLogBook] = useState(initialLogBookState);
  const saveLogBook = () => {
    var data = {
      editItemID: "Announcement id " + currentAnnouncement.id,
      modificationDetail: logbook.modificationDetail,
    };
    LogBookDataService.create(data)
      .then((response) => {
        setLogBook({
          id: response.data.id,
          editItemID: response.data.editItemID,
          modificationDetail: response.data.modificationDetail,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const initialEmailState = {
    text: "",
  };
  const [setEmail] = useState(initialEmailState);
  const sendEmail = () => {
    var data = {
      text: "Announcement id " + currentAnnouncement.id + "\n" + logbook.modificationDetail
        + "\nModified At: " + new Date().toLocaleString() + "",
    };
    EmailDataService.create(data)
      .then((response) => {
        setEmail({
          from: response.data.from,
          to: response.data.to,
          subject: response.data.subject,
          text: response.data.text,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentAnnouncement ? (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <div className="form-group mb-6">

            <h4 className="form-group mb-6"><b>EDIT Announcement</b></h4>

            <form>
              <div className="form-group mb-6">
                <label htmlFor="announcementTitle">Announcement Title</label>
                <input
                  type="text"
                  className="form-control block
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
                  name="announcementTitle"
                  value={currentAnnouncement.announcementTitle}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-6">
                <label htmlFor="announcementType">Announcement Type</label>
                <input
                  type="text"
                  className="form-control block
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
                  name="announcementType"
                  value={currentAnnouncement.announcementType}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-6">
                <label htmlFor="announcementBody">Announcement Body</label>
                <input
                  type="text"
                  className="form-control block
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
                  name="announcementBody"
                  value={currentAnnouncement.announcementBody}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-6">
                <label htmlFor="announcementImg">Announcement Img</label>
                <input
                  type="text"
                  className="form-control block
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
                  name="announcementImg"
                  value={currentAnnouncement.announcementImg}
                  onChange={handleInputChange}
                />

              </div>


              <div className="form-group mb-6">
                <label htmlFor="announcementLink">Announcement Link</label>
                <input
                  type="text"
                  className="form-control block
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
                  name="announcementLink"
                  value={currentAnnouncement.announcementLink}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>

          <div className="form-group mb-6">
            <label htmlFor="modificationDetail"> Modification Detail</label>
            <input
              type="text"
              className="form-control block
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
              id="modificationDetail"
              required
              value={logbook.modificationDetail}
              name="modificationDetail"
              onChange={handleInputChange}
            />
          </div>


          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={deleteAnnouncement}>
            Delete
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              updateAnnouncement();
              saveLogBook();
              sendEmail();
            }}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Announcement...</p>
        </div>
      )}
    </div>
  );
}

export default EditAnnouncement;