import { json } from 'body-parser';
import React from 'react';
import { useState } from 'react';

export const CustomerPage = () => {
  const [customerInfo, setCustomerInfo] = useState({
    firstname: '',
    surname: '',
    email: '',
    mobile_number: 0,
    postcode: '',
    brief_description: '',
    additional_comments: '',
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:4000/customer-sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerInfo),
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

  console.log(customerInfo)
  console.log(JSON.stringify(customerInfo))
  return (
    <div className="customer-page-container">
      <form className="form-container">
        <div className="form-input-container">
          <input
            onChange={handleChange}
            placeholder="firstname..."
            name="firstname"
            className="form-input"
            type="text"
          />
          <input onChange={handleChange} placeholder="surname..." name="surname" className="form-input" type="text" />
          <input onChange={handleChange} placeholder="email..." name="email" className="form-input" type="text" />
          <input
            onChange={handleChange}
            placeholder="mobile_number..."
            name="mobile_number"
            className="form-input"
            type="text"
          />
          <input onChange={handleChange} placeholder="postcode..." name="postcode" className="form-input" type="text" />
        </div>
        <div className="form-text-area-container">
          <textarea
            placeholder="brief_description..."
            name="brief_description"
            className="customer-description"
            onChange={handleChange}
          ></textarea>
          <textarea
            placeholder="additional_comments..."
            name="additional_comments"
            className="customer-description"
            onChange={handleChange}
          ></textarea>
        </div>
        <button onClick={onSubmitHandler} type="submit" className="customer-submit-button">
          Submit
        </button>
      </form>
      <h1 className="form-heading">Customer Registration</h1>
    </div>
  );
};
