import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Trophy = () => {
  
    const [currentTrophy, setTrophy]= useState({name:{}});
    const {id} = useParams();

  

    const fetchDetails = () => {
        fetch(`http://localhost:8080/api/trophies/${id}`)
        .then(res => res.json())
        .then (data => setTrophy(data))
    }

    useEffect(() => {
        fetchDetails();
    },{});

    return (
        <div>
          {
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
                    value={currentTrophy.trophyName}
                    //onChange={this.onChangeTrophyName}
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
                    value={currentTrophy.trophyDescription}
                    //onChange={this.onChangeTrophyDescription}
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
                    value={currentTrophy.trophyIcon}
                    //onChange={this.onChangeTrophyIcon}
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
                  value={currentTrophy.totalProgress}
                  //onChange={this.onChangeTotalProgress}
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
                  value={currentTrophy.totalLvl}
                  //onChange={this.onChangeTotalLevel}
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
                  value={currentTrophy.trophyLemons}
                  //onChange={this.onChangeTrophyLemons}
                />
              </div>
  
  
  
                
              </form>
                </div>
  
              
              {/* <button
                className="badge badge-danger mr-2"
                onClick={this.deleteTrophy}
              >
                Delete
              </button> */}
  
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                //onClick={this.updateTrophy}
              >
                Update
              </button >
              {/* <p>{this.state.message}</p> */}
            </div>
         
        }
        </div>
      );
}
export default Trophy;