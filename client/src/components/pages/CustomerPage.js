import React from 'react';
import {  useNavigate } from "react-router-dom";

export const CustomerPage = ({ customerInfo, setCustomerInfo }) => {

  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {
    event.preventDefault();
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

  console.log(customerInfo);
  console.log(JSON.stringify(customerInfo));
  
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
          <select onChange={handleChange} name="customer_service" className="form-input">
            <option value="plumbing">plumbing</option>
            <option value="cleaner">cleaner</option>
            <option value="handyman">handyman</option>
            <option value="painter">painter</option>
            <option value="gas and electric">gas and electric</option>
            <option value="masonry">masonry</option>
          </select>
        </div>
        <button onClick={()=> {{onSubmitHandler();navigate('/customer-confirmation-page');}}} type="submit" className="customer-submit-button">
          Submit
        </button>
      </form>
      <h1 className="form-heading">Customer Registration</h1>
    </div>
  );
};