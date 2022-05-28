import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TierDataService from "../services/tier.service";
const EditTier = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialTierState = {
    tierName: "",
    tierDescription: "",
    tierIcon: "",
    grapesNeeded: "",
    lemonsAwarded: "",
    
  };
  const [currentTier, setCurrentTier] = useState(initialTierState);
  const [message, setMessage] = useState("");
  const getTier = id => {
    TierDataService.get(id)
      .then(response => {
        setCurrentTier(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
      getTier(id);
  }, [id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTier({ ...currentTier, [name]: value });
  };
  

    
  const updateTier = () => {
    TierDataService.update(currentTier.id, currentTier)
      .then(response => {
        console.log(response.data);
        setMessage("The Tier was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const deleteTier = () => {
    TierDataService.remove(currentTier.id)
      .then(response => {
        console.log(response.data);
        navigate("/configTiers");
      })
      .catch(e => {
        console.log(e);
      });
  };

    return (
      <div>
        {currentTier ? (
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <div className="form-group mb-6">

       <h4 className="form-group mb-6"><b>EDIT Tier</b></h4>
       
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
           id="grapesNeeded"
           name = "grapesNeeded"
           value={currentTier.grapesNeeded}
           onChange={handleInputChange}
         />

       </div>


       <div className="form-group mb-6">
         <label htmlFor="lemonsAwarded">Lemons Awarded</label>
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
           id="lemonsAwarded"
           name="lemonsAwarded"
           value={currentTier.lemonsAwarded}
           onChange={handleInputChange}
         />

       </div>
              
            </form>
        </div>

            
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={deleteTier}>
            Delete
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={updateTier}
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
  }

export default EditTier;