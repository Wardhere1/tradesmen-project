import React from 'react';
import { useState } from 'react';

export const Service = ({ item }) => {
  const [isActive, setIsActive] = useState(false);
  const selectedCard = () => {
    setIsActive((current) => !current);
  };

  return (
    <div
      style={{
        backgroundColor: isActive ? '#0099ef' : '',
        color: isActive ? 'white' : '',
      }}
      onClick={selectedCard}
      className="service-card"
    >
      <img src={item.image_url} />
      <h3>{item.services}</h3>
    </div>
  );
};
