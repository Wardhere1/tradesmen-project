import React, { useState } from 'react';
import { Service } from './Service';

export const ServicesList = ({ servicesData }) => {
  const [activeId, setActiveId] = useState(null);
  
  return (
    <div className="services-list">
      {servicesData.map((item) => {
        return <Service item={item} isActive={activeId === item?.service_id} onClick={() => setActiveId(item?.service_id)}/>;
      })}
    </div>
  );
};
