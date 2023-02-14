import { json } from 'body-parser';
import React from 'react';
import { useState } from 'react';

export const CustomerPage = () => {
  const [customerInfo, setCustomerInfo] = useState({
    Firstname: '',
    Surname: '',
    Email: '',
    MobileNumber: 0,
    Postcode: '',
    CustomerProblem: '',
    AdditionalComments: '',
  });

  // console.log(customerInfo);

  // const data = fetch('http://localhost:4000/customer-sign-up');
  // console.log(data);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(customerInfo);
  //   const data = fetch('http://localhost:4000/customer-sign-up');
  // console.log(data);

  //   fetch('http://localhost:4000/customer-sign-up', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(customerInfo),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/customer-sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message, 'internal error');
    }
  };

  const handleChange = (event) => {
    setCustomerInfo((prevCustomerInfo) => {
      return {
        ...prevCustomerInfo,
        [event.target.name]: event.target.value,
      };
    });
  };
  // console.log(customerInfo);

  return (
    <div className="customer-page-container">
      <form onSubmit={onSubmitHandler} className="form-container">
        <div className="form-input-container">
          <input
            onChange={handleChange}
            placeholder="Firstname..."
            name="Firstname"
            className="form-input"
            type="text"
          />
          <input onChange={handleChange} placeholder="Surname..." name="Surname" className="form-input" type="text" />
          <input onChange={handleChange} placeholder="Email..." name="Email" className="form-input" type="text" />
          <input
            onChange={handleChange}
            placeholder="Mobile number..."
            name="MobileNumber"
            className="form-input"
            type="text"
          />
          <input onChange={handleChange} placeholder="Postcode..." name="Postcode" className="form-input" type="text" />
        </div>
        <div className="form-text-area-container">
          <textarea
            placeholder="Customer Problem..."
            name="CustomerProblem"
            className="customer-description"
            onChange={handleChange}
          ></textarea>
          <textarea
            placeholder="Additional Comments..."
            name="AdditionalComments"
            className="customer-description"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="customer-submit-button">
          Submit
        </button>
      </form>
      <h1 className="form-heading">Customer Registration</h1>
    </div>
  );
};
