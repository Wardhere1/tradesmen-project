import React, { useState, useEffect } from 'react'
import { ServicesList } from '../ServicesList'
import Navbar from '../Navbar'
import { HowItWorks } from '../HowItWorks'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

export const ServicePage = () => {
    const [servicesData, setServicesData] = useState([])
    const navigate = useNavigate()

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
            <button onClick={() => navigate('/customer-sign-up')} className='next-button'>NEXT</button>
        </div>
    )
}
