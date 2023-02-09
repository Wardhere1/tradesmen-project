import React, { useState, useEffect } from 'react'
import { ServicesList } from '../ServicesList'
import Navbar from '../Navbar'
import { HowItWorks } from '../HowItWorks'

export const ServicePage = () => {
    const [servicesData, setServicesData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:4000/services')
            const data = await response.json()
            const servicesFetchedData = data.rows
            console.log('this is the data:' + JSON.stringify(servicesFetchedData, null, 4))
            setServicesData(servicesFetchedData)
        }
        fetchData();
    }, []);

    return (
        <div className='service-container'>
            <HowItWorks />
            <ServicesList servicesData={servicesData} />
            <button className='next-button'>Next</button>
        </div>
    )
}
