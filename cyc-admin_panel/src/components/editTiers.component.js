import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TierDataService from "../services/tier.service";
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

const EditTier = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const initialTierState = {
    id: null,
    tierName: "",
    tierDescription: "",
    tierIcon: "",
    grapesNeeded: "",
    lemonsAwarded: "",
  };
  const [currentTier, setCurrentTier] = useState(initialTierState);
  const [message, setMessage] = useState("");
  const getTier = (id) => {
    TierDataService.get(id)
      .then((response) => {
        setCurrentTier(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id) getTier(id);
  }, [id]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTier({ ...currentTier, [name]: value });
    setLogBook({ ...logbook, [name]: value });
  };

  const handleInputChangeNumber = (event) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (event.target.value === "" || re.test(event.target.value)) {
      const { name, value } = event.target;
      setCurrentTier({ ...currentTier, [name]: value });
    }
  };

  const updateTier = () => {
    TierDataService.update(currentTier.id, currentTier)
      .then((response) => {
        console.log(response.data);
        setMessage("The Tier was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteTier = () => {
    TierDataService.remove(currentTier.id)
      .then((response) => {
        console.log(response.data);
        navigate("/configTiers");
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
      editItemID: "Tier id " + currentTier.id,
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
      text: "Tier id " + currentTier.id + "\n" + logbook.modificationDetail
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
      {currentTier ? (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <div className="form-group mb-6">
            <h4 className="form-group mb-6">
              <b>EDIT Tier</b>
            </h4>

            <form>
              <div className="form-group mb-6">
                <label htmlFor="tierName">Tier Name</label>
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
                  id="tierName"
                  name="tierName"
                  value={currentTier.tierName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-6">
                <label htmlFor="tierDescription">Tier Description</label>
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
                  id="tierDescription"
                  name="tierDescription"
                  value={currentTier.tierDescription}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-6">
                <label htmlFor="tierIcon">Tier Icon</label>
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
                  id="tierIcon"
                  name="tierIcon"
                  value={currentTier.tierIcon}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-6">
                <label htmlFor="grapesNeeded">Grapes Needed</label>
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
                  {ddlInt(10, currentTier.grapesNeeded)}
                </select>
              </div>

              <div className="form-group mb-6">
                <label htmlFor="lemonsAwarded">Lemons Awarded</label>
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
                  {ddlInt(10, currentTier.lemonsAwarded)}
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
            onClick={deleteTier}
          >
            Delete
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              updateTier();
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
          <p>Please click on a Tier...</p>
        </div>
      )}
    </div>
  );
};

export default EditTier;
