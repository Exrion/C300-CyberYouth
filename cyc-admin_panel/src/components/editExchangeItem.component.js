import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExchangeDataService from "../services/exchange.service";
import LogBookDataService from "../services/logbook.service";

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

async function sendEmail(email) {
  return fetch("http://localhost:8080/api/sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  }).then((data) => data.json());
}

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

const Exchange = (props) => {
  const { id } = useParams();
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

  const [currentExchangeItem, setCurrentExchangeItem] = useState(
    initialExchangeItemState
  );
  const [message, setMessage] = useState("");
  const getExchangeItem = (id) => {
    ExchangeDataService.get(id)
      .then((response) => {
        setCurrentExchangeItem(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id) getExchangeItem(id);
  }, [id]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentExchangeItem({ ...currentExchangeItem, [name]: value });
    setLogBook({ ...logbook, [name]: value });
  };

  const handleInputChangeNumber = (event) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (event.target.value === "" || re.test(event.target.value)) {
      const { name, value } = event.target;
      setCurrentExchangeItem({ ...currentExchangeItem, [name]: value });
    }
  };

  const updateExchangeItem = () => {
    ExchangeDataService.update(currentExchangeItem.id, currentExchangeItem)
      .then((response) => {
        console.log(response.data);
        setMessage("The Exchange Item was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteExchangeItem = () => {
    ExchangeDataService.remove(currentExchangeItem.id)
      .then((response) => {
        console.log(response.data);
        navigate("/configExchangeItems");
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
      editItemID: "ExchangeItem id " + currentExchangeItem.id,
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


  //Retrieve user from localstorage
  const [user, setUser] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'));
    if (user) {
      setUser(user);
    }
  }, []);

  //send email
  var email = (user.email);
  var subject = ("Exchange Item Id " + currentExchangeItem.id + " was modified");
  var text = ("Exchange Item id " + currentExchangeItem.id + "\n" + logbook.modificationDetail
    + "\nModified At: " + new Date().toLocaleString() + "");
  function sendEmailFunction() {
    const emailRes = sendEmail({
      email,
      subject,
      text,
    });
    console.log(emailRes);
    console.log("HERE");
  }


  return (
    <div>
      {currentExchangeItem ? (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <div className="form-group mb-6">
            <h4 className="form-group mb-6">
              <b>EDIT Exchange Item</b>
            </h4>

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
                <label htmlFor="exchangeDescription">
                  Exchange Description
                </label>
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
                  {ddlInt(10, currentExchangeItem.lemonsEach)}
                </select>
              </div>

              <div className="form-group mb-6">
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
                  {ddlStringArr(
                    deliveryMode,
                    currentExchangeItem.deliveryMode
                  )}
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
            onClick={() => {
              deleteExchangeItem();
              saveLogBook();
              sendEmailFunction();
            }}
          >
            Delete
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              updateExchangeItem();
              saveLogBook();
              sendEmailFunction();
            }}
          >
            {" "}
            Update
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
};

export default Exchange;
