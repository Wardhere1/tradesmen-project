import React, { useState, useEffect } from 'react';
import videoBg from '../assets/new-background-2.mp4';
import Quote from '../Quote';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <video className="homepage-video" src={videoBg} autoPlay loop muted />
      <div className="homepage-info-container">
        <h1 className="homepage-heading">
          Need a new boiler? Get a boiler fully installed from £1,700 Choose from our range of boilers from the leading
          manufacturers. Flexible payment options available!
        </h1>
        <button className="button-homepage-1">TRADESMAN SIGN UP</button>
        <button onClick={() => navigate('/services')} className="button-homepage-2">
          SELECT A SERVICE
        </button>
      </div>
      <Quote />
    </div>
  );
};
