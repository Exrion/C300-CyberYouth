import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TrophyDataService from "../services/trophy.service";
import LogBookDataService from "../services/logbook.service";
import EmailDataService from "../services/email.service";

function ddlInt(num, value) {
  var items = [];
  for (let i = 1; i < num + 1; i++) {
    if (i == value) {
      items.push(<option selected value={i}>{i}</option>);
    } else {
      items.push(<option value={i}>{i}</option>);
    }
  }
  return items;
}

const EditTrophy = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const initialTrophyState = {
    id: null,
    trophyName: "",
    trophyDescription: "",
    trophyIcon: "",
    totalProgress: "",
    totalLvl: "",
    trophyLemons: "",
  };
  const [currentTrophy, setCurrentTrophy] = useState(initialTrophyState);
  const [message, setMessage] = useState("");
  const getTrophy = (id) => {
    TrophyDataService.get(id)
      .then((response) => {
        setCurrentTrophy(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id) getTrophy(id);
  }, [id]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTrophy({ ...currentTrophy, [name]: value });
    setLogBook({ ...logbook, [name]: value });
  };
  const handleInputChangeNumber = (event) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (event.target.value === "" || re.test(event.target.value)) {
      const { name, value } = event.target;
      setCurrentTrophy({ ...currentTrophy, [name]: value });
    }
  };

  const updateTrophy = () => {
    TrophyDataService.update(currentTrophy.id, currentTrophy)
      .then((response) => {
        console.log(response.data);
        setMessage("The Trophy was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteTrophy = () => {
    TrophyDataService.remove(currentTrophy.id)
      .then((response) => {
        console.log(response.data);
        navigate("/configTrophies");
      })
      .catch((e) => {
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
      editItemID: "Trophy id " + currentTrophy.id,
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
      text: "Trophy id " + currentTrophy.id + "\n" + logbook.modificationDetail
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
      {currentTrophy ? (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <div className="form-group mb-6">
            <h4 className="form-group mb-6">
              <b>EDIT Trophy</b>
            </h4>

            <form>
              <div className="form-group mb-6">
                <label htmlFor="trophyName">Trophy Name</label>
                <input
                  type="text"
                  className="form-control block
           w-full
           px-3
           py-1.5
           text-base
           font-normal
           text-gray-700
           bg-white bg-clip-paddingf
           border border-solid border-gray-300
           rounded
           transition
           ease-in-out
           m-0
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="trophyName"
                  name="trophyName"
                  value={currentTrophy.trophyName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-6">
                <label htmlFor="trophyDescription">Trophy Description</label>
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
                  id="trophyDescription"
                  name="trophyDescription"
                  value={currentTrophy.trophyDescription}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-6">
                <label htmlFor="trophyIcon">Trophy Icon</label>
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
                  id="trophyIcon"
                  name="trophyIcon"
                  value={currentTrophy.trophyIcon}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-6">
                <label htmlFor="totalProgress">Total Progress</label>
                <input 
                  min="0"
                  max="100"
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
                  placeholder="Enter a number*"
                  id="totalProgress"
                  name="totalProgress"
                  value={currentTrophy.totalProgress}
                  onChange={handleInputChangeNumber}
                />
              </div>

              <div className="form-group mb-6">
                <label htmlFor="totalLevel">Total Level</label>
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
                  placeholder="Enter a number*"
                  id="totalLvl"
                  name="totalLvl"
                  value={currentTrophy.totalLvl}
                  onChange={handleInputChangeNumber}
                />
              </div>

              <div className="form-group mb-6">
                <label htmlFor="trophyLemons">Trophy Lemons</label>
                <select class="form-select appearance-none
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding bg-no-repeat
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                  {ddlInt(10, currentTrophy.trophyLemons)}
                </select>
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

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={deleteTrophy}
          >
            Delete
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              updateTrophy();
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
          <p>Please click on a Trophy...</p>
        </div>
      )}
    </div>
  );
};

export default EditTrophy;
