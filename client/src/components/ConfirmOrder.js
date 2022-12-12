import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const ConfirmOrder = () => {
  const { state } = useLocation();
  const history = useNavigate();
  const { addToast } = useToasts();

  //   console.log(state);

  const handleConfirmOrder = async() => {
    try {
      const data = await axios.post(
        "http://localhost:5000/api/user/register",
        state
      );
      console.log(data);
      if (data.status === 201) {
        await addToast(data.data.message, {
          appearance: "error",
          autoDismiss: true,
        });
        history("/")
      }
    } catch (error) {
    //   console.log(error.response.data.message);
      addToast(error.response.data.message, {
        appearance: "error",
        autoDismiss: true,
      });
      history("/")
    }
  };

  return (
    <div className="confirmOrderContainer" id="confirmOrderContainer">
      <h3>Confirm order</h3>
      <div className="orderDetails">
        <span>
          <label for="name">Name:</label>
          <p name="name">{state.name}</p>
        </span>
        <span>
          <label for="email">Email:</label>
          <p name="email">{state.email}</p>
        </span>
        <span>
          <label for="age">Age:</label>
          <p name="age">{state.age}</p>
        </span>
        <span>
          <label for="batch">Batch:</label>
          <p name="batch">{state.batch}</p>
        </span>
        <span>
          <label for="monthlyFee">Monthly Fee:</label>
          <p name="monthlyFee">{state.monthlyFee}</p>
        </span>
      </div>
      <div className="orderButtons">
        <button
          className="orderButton-Cancle"
          onClick={() => {
            history("/");
          }}
        >
          Cancle
        </button>
        <button
          className="orderButton-PlaceOrder"
          onClick={() => handleConfirmOrder()}
        >
          Place order
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
