import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ExchangeDataService from "../services/exchange.service";
const Exchange = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialExchangeItemState = {
    id: null,
        exchangeName: "",
        exchangeDescription: "",
        exchangeImg: "",
        lemonsEach: null,
        deliveryMode: "",
        exchangeStock: null,
    
  };
  const [currentExchangeItem, setCurrentExchangeItem] = useState(initialExchangeItemState);
  const [message, setMessage] = useState("");
  const getExchangeItem = id => {
    ExchangeDataService.get(id)
      .then(response => {
        setCurrentExchangeItem(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
      getExchangeItem(id);
  }, [id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentExchangeItem({ ...currentExchangeItem, [name]: value });
  };

  const updateExchangeItem = () => {
    ExchangeDataService.update(currentExchangeItem.id, currentExchangeItem)
      .then(response => {
        console.log(response.data);
        setMessage("The Exchange Item was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const deleteExchangeItem = () => {
    ExchangeDataService.remove(currentExchangeItem.id)
      .then(response => {
        console.log(response.data);
        navigate("/configExchangeItems");
      })
      .catch(e => {
        console.log(e);
      });
  };

    return (
      <div>
        {currentExchangeItem ? (
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <div className="form-group mb-6">

       <h4 className="form-group mb-6"><b>EDIT Exchange Item</b></h4>
       
       <form>
         <div className="form-group mb-6">
           <label htmlFor="exchangeName">Exchange Name</label>
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
             id="exchangeName"
             name="exchangeName"
             value={currentExchangeItem.exchangeName}
             onChange={handleInputChange}
           />
         </div>
         <div className="form-group mb-6">
           <label htmlFor="exchangeDescription">Exchange Description</label>
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
             id="exchangeDescription"
             name="exchangeDescription"
             value={currentExchangeItem.exchangeDescription}
             onChange={handleInputChange}
           />
         </div>

         <div className="form-group mb-6">
           <label htmlFor="exchangeImg">Exchange Image</label>
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
             id="exchangeImg"
             name="exchangeImg"
             value={currentExchangeItem.exchangeImg}
             onChange={handleInputChange}
           />
         </div>

         <div className="form-group mb-6">
         <label htmlFor="lemonsEach">Lemons Each</label>
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
           id="lemonsEach"
           name = "lemonsEach"
           value={currentExchangeItem.lemonsEach}
           onChange={handleInputChange}
         />

       </div>


       <div className="form-group mb-6">
         <label htmlFor="deliveryMode">Delivery Mode</label>
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
           id="deliveryMode"
           name="deliveryMode"
           value={currentExchangeItem.deliveryMode}
           onChange={handleInputChange}
         />

       </div>

       <div className="form-group mb-6">
         <label htmlFor="exchangeStock">Exchange Stock</label>
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
           id="exchangeStock"
           name="exchangeStock"
           value={currentExchangeItem.exchangeStock}
           onChange={handleInputChange}
         />
       </div>              
        </form>
        </div>

            
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={deleteExchangeItem}>
            Delete
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={updateExchangeItem}
          > Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on an Exchange Item...</p>
        </div>
      )}
    </div>
    );
  }

export default Exchange;