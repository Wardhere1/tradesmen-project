import React from 'react';
import { useState } from 'react';

export const Service = ({ item, isActive, onClick }) => {

  console.log('item', item);
  return (
    <div
      style={{
        backgroundColor: isActive ? '#0099ef' : '',
        color: isActive ? 'white' : '',
      }}
      onClick={onClick}
      className="service-card"
    >
      <img src={item.image_url} />
      <h3>{item.services}</h3>
    </div>
  );
};
