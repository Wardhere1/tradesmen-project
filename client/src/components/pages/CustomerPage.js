import React from 'react';

export const CustomerPage = () => {
  return (
    <div className="customer-page-container">
      <form className="form-container">
        <div className="form-info-container">
          <input placeholder="Firstname..." className="form-input" type="text" />
        </div>
        <div className="form-info-container">
          <input placeholder="Surname..." className="form-input" type="text" />
        </div>
        <div className="form-info-container">
          <input placeholder="Email..." className="form-input" type="text" />
        </div>
        <div className="form-info-container">
          <input placeholder="Mobile number..." className="form-input" type="text" />
        </div>
        <div className="form-info-container">
          <input placeholder="Postcode..." className="form-input" type="text" />
        </div>
        <div className="form-info-container-text-area">
          <textarea className="customer-description">Hello there, this is some text in a text area</textarea>
        </div>
      </form>
    </div>
  );
};
