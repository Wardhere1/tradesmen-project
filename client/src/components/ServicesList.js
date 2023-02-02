import React, { useState } from 'react'
import { Service } from './Service'

export const ServicesList = ({ servicesData }) => {
    return (
        <div>
            {servicesData.map((item) => {
                return (
                    <Service item={item} />
                )
            })}
        </div>
    )
}
