import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import ConfirmOrder from "./ConfirmOrder";

const Form = () => {
  const { addToast } = useToasts();
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    batch: "",
    monthlyFee: 500,
  });
  const [confirmOrder, setConfirmOrder] = useState(false);

  const { name, email, age, batch, monthlyFee } = user;

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    const payload = user;
    // console.log(payload);

    if (payload) {
      setConfirmOrder(true);
      history("/confirm-order", {
        state: {
          name: payload.name,
          email: payload.email,
          age: payload.age,
          batch: payload.batch,
          monthlyFee: payload.monthlyFee,
        },
      });
    }
  };

  const onUserChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="formContainer">
      {confirmOrder ? (
        <ConfirmOrder user={user} />
      ) : (
        <>
          <h3>Yoga classes Registration</h3>
          <form onSubmit={handleRegisterUser}>
            <label for="name">Full name:</label>
            <input
              placeholder="First Middle Last"
              value={name}
              type="text"
              name="name"
              onChange={onUserChange}
              required
            />

            <label for="email">Email:</label>
            <input
              placeholder="eg. hello@gmail.com "
              value={email}
              type="email"
              name="email"
              onChange={onUserChange}
              required
            />

            <label for="age">Age:</label>
            <input
              placeholder="eg. 21"
              value={age}
              type="number"
              name="age"
              min={18}
              max={65}
              onChange={onUserChange}
              required
            />

            <label for="batch">Batch:</label>
            <select
              name="batch"
              value={batch}
              onChange={onUserChange}
              required
              placeholder="Select batch"
            >
              <option value="" selected disabled>
                Select an age
              </option>
              <optgroup label="Morning">
                <option value="6-7AM">6-7AM</option>
                <option value="7-8AM">7-8AM</option>
                <option value="8-9AM">8-9AM</option>
              </optgroup>
              <optgroup label="Evening">
                <option value="5-6PM">5-6PM</option>
              </optgroup>
            </select>

            <label for="monthlyFee">Monthly Fee:</label>
            <input
              placeholder="Enter your age"
              value={monthlyFee}
              disabled
              type="number"
              name="monthlyFee"
              onChange={onUserChange}
              required
            />

            <button id="registerSubmit" type="submit">
              Complete Payment
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
