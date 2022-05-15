import React, { Component } from "react";
import ExchangeDataService from "../services/exchange.service";
export default class addExchangeItems extends Component {
  constructor(props) {
    super(props);
    this.onChangeExchangeName = this.onChangeExchangeName.bind(this);
    this.onChangeExchangeDescription = this.onChangeExchangeDescription.bind(this);
    this.onChangeLemonsEach = this.onChangeLemonsEach.bind(this);
    this.onChangeDeliveryMode = this.onChangeDeliveryMode.bind(this);
    this.onChangeExchangeStock = this.onChangeExchangeStock.bind(this);

    this.saveExchange = this.saveExchange.bind(this);
    this.newExchange = this.newExchange.bind(this);
    this.state = {
      id: null,
      exchangeName: "",
      exchangeDescription: "",
      lemonsEach: null,
      deliveryMode: "",
      exchangeStock: null,
    };
  }
  onChangeExchangeName(e) {
    this.setState({
      exchangeName: e.target.value,
    });
  }
  onChangeExchangeDescription(e) {
    this.setState({
      exchangeDescription: e.target.value,
    });
  }
  onChangeLemonsEach(e) {
    this.setState({
      lemonsEach: e.target.value,
    });
  }
  onChangeDeliveryMode(e) {
    this.setState({
      deliveryMode: e.target.value,
    });
  }
  onChangeExchangeStock(e) {
    this.setState({
      exchangeStock: e.target.value,
    });
  }
  saveExchange() {
    var data = {
      exchangeName: this.state.exchangeName,
      exchangeDescription: this.state.exchangeDescription,
      lemonsEach: this.state.lemonsEach,
      deliveryMode: this.state.deliveryMode,
      exchangeStock: this.state.exchangeStock,
    };
    ExchangeDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          exchangeName: response.data.exchangeName,
          exchangeDescription: response.data.exchangeDescription,
          lemonsEach: response.data.lemonsEach,
          deliveryMode: response.data.deliveryMode,
          exchangeStock: response.data.exchangeStock,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newExchange() {
    this.setState({
      id: null,
      exchangeName: "",
      exchangeDescription: "",
      lemonsEach: null,
      deliveryMode: "",
      exchangeStock: null,
    });
  }

  
  render() {
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
                value={this.state.exchangeDescription}
                onChange={this.onChangeExchangeDescription}
                name="exchangeDescription"
              />
            </div>
            <div class="form-group mb-6">
              <label htmlFor="lemonsEach">Lemons Each</label>
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
  }
}

