import React, { useState } from 'react'
import { Service } from './Service'

export const ServicesList = ({ servicesData }) => {
    return (
        <div className='services-list'>
            {servicesData.map((item) => {
                return (
                    <Service item={item} />
                )
            })}
        </div>
    )
}
