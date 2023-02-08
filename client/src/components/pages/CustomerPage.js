import React from 'react';

export const CustomerPage = () => {
  return (
    <div className="customer-page-container">
      <form className="form-container">
        <div className="form-input-container">
          <input placeholder="Firstname..." className="form-input" type="text" />
          <input placeholder="Surname..." className="form-input" type="text" /> 
          <input placeholder="Email..." className="form-input" type="text" />
          <input placeholder="Mobile number..." className="form-input" type="text" />
          <input placeholder="Postcode..." className="form-input" type="text" />
        </div>
        <div className="form-text-area-container">
          <textarea placeholder='Customer Problem...' className="customer-description"></textarea>
          <textarea placeholder='Additional Comments...' className="customer-description"></textarea>
        </div>
      </form>
      <button className='customer-submit-button'>Submit</button>
      <h1 className='form-heading'>Customer Registration</h1>
    </div>
  );
};
