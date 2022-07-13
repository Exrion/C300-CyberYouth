import React, { useState } from "react";
import TrophyDataService from "../services/trophy.service";

const AddTrophies = () => {
  const initialTrophyState = {
    id: null,
    trophyName: "",
    trophyDescription: "",
    trophyIcon: "",
    totalProgress: 0,
    totalLvl: 0,
    trophyLemons: 0,
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrophy({ ...trophy, [name]: value });
  };

  const [trophy, setTrophy] = useState(initialTrophyState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChangeNumber = (event) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (event.target.value === "" || re.test(event.target.value)) {
      const { name, value } = event.target;
      setTrophy({ ...trophy, [name]: value });
    }
  };
  const saveTrophy = () => {
    var data = {
      trophyName: trophy.trophyName,
      trophyDescription: trophy.trophyDescription,
      trophyIcon: trophy.trophyIcon,
      totalProgress: trophy.totalProgress,
      totalLvl: trophy.totalLvl,
      trophyLemons: trophy.trophyLemons,
    };
    TrophyDataService.create(data)
      .then((response) => {
        setTrophy({
          id: response.data.id,
          trophyName: response.data.trophyName,
          trophyDescription: response.data.trophyDescription,
          trophyIcon: response.data.trophyIcon,
          totalProgress: response.data.totalProgress,
          totalLvl: response.data.totalLvl,
          trophyLemons: response.data.trophyLemons,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newTrophy = () => {
    setTrophy(initialTrophyState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTrophy}>
            Add
          </button>
        </div>
      ) : (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
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
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="trophyName"
                required
                value={trophy.trophyName}
                onChange={handleInputChange}
                name="trophyName"
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
                required
                value={trophy.trophyDescription}
                onChange={handleInputChange}
                name="trophyDescription"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="trophyIcon">Trophy Icon</label>
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
                id="trophyIcon"
                required
                value={trophy.trophyIcon}
                onChange={handleInputChange}
                name="trophyIcon"
              />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="totalProgress">Total Progress</label>
              <input
                type="number"
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
                required
                value={trophy.totalProgress}
                onChange={handleInputChangeNumber}
                name="totalProgress"
              />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="totalLvl">Total Level</label>
              <input
                type="number"
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
                required
                value={trophy.totalLvl}
                onChange={handleInputChangeNumber}
                name="totalLvl"
              />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="trophyLemons">Trophy Lemons</label>
              <input
                type="number"
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
                id="trophyLemons"
                required
                value={trophy.trophyLemons}
                onChange={handleInputChangeNumber}
                name="trophyLemons"
              />
            </div>
            <button
              onClick={saveTrophy}
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
export default AddTrophies;
