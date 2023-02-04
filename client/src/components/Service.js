import React from 'react'

export const Service = ({item}) => {
  return (
    <div className='service-card'>
        <img src={item.image_url}/>
        <h3>{item.services}</h3>
    </div>
  )
}
