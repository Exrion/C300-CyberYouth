import React, { useState } from "react";
import ExchangeDataService from "../services/exchange.service";

function ddlStringArr(itemArr, value) {
  var items = [];
  for (let i = 0; i < itemArr.length; i++) {
    if (itemArr[i] === value) {
      items.push(<option selected value={itemArr[i]}>{itemArr[i]}</option>);
    } else {
      items.push(<option value={itemArr[i]}>{itemArr[i]}</option>);
    }
  }
  return items;
}

const deliveryMode =
  [
    "Pickup",
    "Delivery"
  ]

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

const AddExchangeItems = () => {
  const initialExchangeItemState = {
    id: null,
    exchangeName: "",
    exchangeDescription: "",
    exchangeImg: "",
    lemonsEach: 0,
    deliveryMode: "",
    exchangeStock: 0,
  };

  const [exchangeItem, setExchangeItem] = useState(initialExchangeItemState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExchangeItem({ ...exchangeItem, [name]: value });
  };
  const handleInputChangeNumber = (event) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (event.target.value === "" || re.test(event.target.value)) {
      const { name, value } = event.target;
      setExchangeItem({ ...exchangeItem, [name]: value });
    }
  };
  const saveExchangeItem = () => {
    var data = {
      exchangeName: exchangeItem.exchangeName,
      exchangeDescription: exchangeItem.exchangeDescription,
      exchangeImg: exchangeItem.exchangeImg,
      lemonsEach: exchangeItem.lemonsEach,
      deliveryMode: exchangeItem.deliveryMode,
      exchangeStock: exchangeItem.exchangeStock,
    };
    ExchangeDataService.create(data)
      .then((response) => {
        setExchangeItem({
          id: response.data.id,
          exchangeName: response.data.exchangeName,
          exchangeDescription: response.data.exchangeDescription,
          exchangeImg: response.data.exchangeImg,
          lemonsEach: response.data.lemonsEach,
          deliveryMode: response.data.deliveryMode,
          exchangeStock: response.data.exchangeStock,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newExchangeItem = () => {
    setExchangeItem(initialExchangeItemState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newExchangeItem}>
            Add
          </button>
        </div>
      ) : (
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form>
            <div class="form-group mb-6">
              <label htmlFor="exchangeName">Exchange Name</label>
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
                id="exchangeName"
                required
                value={exchangeItem.exchangeName}
                onChange={handleInputChange}
                name="exchangeName"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="exchangeDescription">Exchange Description</label>
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
                id="exchangeDescription"
                required
                value={exchangeItem.exchangeDescription}
                onChange={handleInputChange}
                name="exchangeDescription"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="exchangeImg">Exchange Image</label>
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
                id="exchangeImg"
                required
                value={exchangeItem.exchangeImg}
                onChange={handleInputChange}
                name="exchangeImg"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="lemonsEach">Lemons Each</label>
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                id="lemonsEach"
                required
                onChange={handleInputChangeNumber}
                name="lemonsEach"
              >
                {ddlInt(10)}
              </select>
            </div>
            <div class="form-group mb-6">
              <label htmlFor="deliveryMode">Delivery Mode</label>
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                id="deliveryMode"
                required
                onChange={handleInputChange}
                name="deliveryMode"
              >
                {ddlStringArr(deliveryMode)}
              </select>
            </div>
            <div class="form-group mb-6">
              <label htmlFor="exchangeStock">Exchange Stock</label>
              <input
                type="number"
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
                placeholder="Enter a number*"
                id="exchangeStock"
                required
                value={exchangeItem.exchangeStock}
                onChange={handleInputChangeNumber}
                name="exchangeStock"
              />
            </div>
            <button
              onClick={saveExchangeItem}
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
export default AddExchangeItems;
