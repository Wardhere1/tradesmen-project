import React, { useState, useEffect } from 'react';

export const HomePage = () => {
  return (
    <div className="Homepage-container">
      <img className="Trademanimg" src="https://tradesmenonline.co.uk/wp-content/uploads/home-banner.jpg" />
      <h1 className=''>
        Need a new boiler? Get a boiler fully installed from £1,700 Choose from our range of boilers from the leading
        manufacturers. We find you vetted local Gas Safe installers Local Heroes 12 month guarantee, backed by British
        Gas Choice of up to 10 years manufacturer’s warranty. Flexible payment options available
      </h1>
      <button className="button-homepage1">Tradesman-Signup</button>
      <button className="button-homepage2">Customer-Signup</button>
    </div>
  );
};
