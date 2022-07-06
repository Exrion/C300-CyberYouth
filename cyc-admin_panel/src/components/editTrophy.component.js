import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TrophyDataService from "../services/trophy.service";
const EditTrophy = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialTrophyState = {
    id: null,
    trophyName: "",
    trophyDescription: "",
    trophyIcon: "",
    totalProgress: "",
    totalLvl: "",
    trophyLemons: ""
    
  };
  const [currentTrophy, setCurrentTrophy] = useState(initialTrophyState);
  const [message, setMessage] = useState("");
  const getTrophy = id => {
    TrophyDataService.get(id)
      .then(response => {
        setCurrentTrophy(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
      getTrophy(id);
  }, [id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTrophy({ ...currentTrophy, [name]: value });
  };
  

    
  const updateTrophy = () => {
    TrophyDataService.update(currentTrophy.id, currentTrophy)
      .then(response => {
        console.log(response.data);
        setMessage("The Trophy was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const deleteTrophy = () => {
    TrophyDataService.remove(currentTrophy.id)
      .then(response => {
        console.log(response.data);
        navigate("/configTrophies");
      })
      .catch(e => {
        console.log(e);
      });
  };

    return (
      <div>
        {currentTrophy ? (
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <div className="form-group mb-6">

       <h4 className="form-group mb-6"><b>EDIT Trophy</b></h4>
       
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
           id="totalProgress"
           name = "totalProgress"
           value={currentTrophy.totalProgress}
           onChange={handleInputChange}
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
           id="totalLevel"
           name="totalLevel"
           value={currentTrophy.totalLvl}
           onChange={handleInputChange}
         />

       </div>


       <div className="form-group mb-6">
         <label htmlFor="trophyLemons">Trophy Lemons</label>
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
           id="trophyLemons"
           name="trophyLemons"
           value={currentTrophy.trophyLemons}
           onChange={handleInputChange}
         />
       </div>



              
            </form>
        </div>

            
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={deleteTrophy}>
            Delete
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={updateTrophy}
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
  }

export default EditTrophy;