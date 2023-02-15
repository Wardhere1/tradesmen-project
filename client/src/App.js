import React, { useEffect, useState } from 'react';
import './App.css';
import { ServicePage } from './components/pages/ServicePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import Navbar from './components/Navbar';
import {CustomerPage} from './components/pages/CustomerPage'
import { CustomerConfirmationPage } from './components/pages/CustomerConfirmationPage';

const serverUrl = process.env.REACT_APP_SERVER_URL;
console.log(`Server url is: ${serverUrl}`);

function App() {
  const [trademanData, setTrademenData] = useState();
  const [customerInfo, setCustomerInfo] = useState({
    firstname: '',
    surname: '',
    email: '',
    mobile_number: 0,
    postcode: '',
    brief_description: '',
    additional_comments: '',
    customer_service: '',
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/tradesman');
      const data = await response.json();
      const tradesmanFetchedData = data.rows;
      console.log('this is the data:' + JSON.stringify(tradesmanFetchedData, null, 4));
      setTrademenData(tradesmanFetchedData);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path='/customer-sign-up' element={<CustomerPage customerInfo={customerInfo} setCustomerInfo={setCustomerInfo}/>} />
        <Route path='/customer-confirmation-page' element={<CustomerConfirmationPage customerInfo={customerInfo}/>} />
      </Routes>
    </div>
  );
}

export default App;
