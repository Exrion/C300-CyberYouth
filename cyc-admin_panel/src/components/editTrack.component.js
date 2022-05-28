import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TrackDataService from "../services/track.service";
const EditTrack = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialTrackState = {
    id: null,
    trackName: "",
    trackDescription: "",
    trackProvider: "",
    trackLink: "",
    trackTags: "",
    trackLemons: "",
  };
  const [currentTrack, setCurrentTrack] = useState(initialTrackState);
  const [message, setMessage] = useState("");
  const getTrack = id => {
    TrackDataService.get(id)
      .then(response => {
        setCurrentTrack(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
      getTrack(id);
  }, [id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTrack({ ...currentTrack, [name]: value });
  };
  

    
  const updateTrack = () => {
    TrackDataService.update(currentTrack.id, currentTrack)
      .then(response => {
        console.log(response.data);
        setMessage("The Track was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
//   const deleteTrack = () => {
//     TrackDataService.remove(currentTrack.id)
//       .then(response => {
//         console.log(response.data);
//         navigate("/configTracks");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

    return (
      <div>
        {currentTrack ? (
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <div className="form-group mb-6">

       <h4 className="form-group mb-6"><b>EDIT Track</b></h4>
       
       <form>
         <div className="form-group mb-6">
           <label htmlFor="trackName">Track Name</label>
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
             id="trackName"
             name="trackName"
             value={currentTrack.trackName}
             onChange={handleInputChange}
           />
         </div>
         <div className="form-group mb-6">
           <label htmlFor="trackDescription">Track Description</label>
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
             id="trackDescription"
             name="trackDescription"
             value={currentTrack.trackDescription}
             onChange={handleInputChange}
           />
         </div>

         <div className="form-group mb-6">
           <label htmlFor="trackProvider">Track Provider</label>
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
             id="trackProvider"
             name="trackProvider"
             value={currentTrack.trackProvider}
             onChange={handleInputChange}
           />
         </div>

         <div className="form-group mb-6">
         <label htmlFor="trackLink">Track Link</label>
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
           id="trackLink"
           name = "trackLink"
           value={currentTrack.trackLink}
           onChange={handleInputChange}
         />

       </div>


       <div className="form-group mb-6">
         <label htmlFor="trackTags">Track Tags</label>
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
           id="trackTags"
           name="trackTags"
           value={currentTrack.trackTags}
           onChange={handleInputChange}
         />

       </div>


       <div className="form-group mb-6">
         <label htmlFor="trackLemons">Track Lemons</label>
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
           id="trackLemons"
           name="trackLemons"
           value={currentTrack.trackLemons}
           onChange={handleInputChange}
         />
       </div>



              
            </form>
        </div>

            
        {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={deleteTrack}>
            Delete
          </button> */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={updateTrack}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Track...</p>
        </div>
      )}
    </div>
    );
  }

export default EditTrack;