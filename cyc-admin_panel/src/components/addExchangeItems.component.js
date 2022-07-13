import React, { useState } from "react";
import ExchangeDataService from "../services/exchange.service";

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
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newExchange}>
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
                value={this.state.exchangeName}
                onChange={this.onChangeExchangeName}
                name="exchangeName"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="exchangeDescription">Exchange Description</label>
              <textarea
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
                value={this.state.exchangeDescription}
                onChange={this.onChangeExchangeDescription}
                name="exchangeDescription"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="exchangeImg">Exchange Image</label>
              <input
                type="url"
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
                value={this.state.exchangeImg}
                onChange={this.onChangeExchangeImg}
                name="exchangeImg"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="lemonsEach">Lemons Each</label>
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
                id="lemonsEach"
                required
                value={this.state.lemonsEach}
                onChange={this.onChangeLemonsEach}
                name="lemonsEach"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="deliveryMode">Delivery Mode</label>
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
                id="deliveryMode"
                required
                value={this.state.deliveryMode}
                onChange={this.onChangeDeliveryMode}
                name="deliveryMode"
              />
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
                id="exchangeStock"
                required
                value={this.state.exchangeStock}
                onChange={this.onChangeExchangeStock}
                name="exchangeStock"
              />
            </div>
            <button onClick={this.saveExchange} className="btn btn-success   w-full
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
                ease-in-out">
              Submit
            </button>
            </form>
          </div>
        )}
      </div>
    );
  
};
export default AddExchangeItems;

