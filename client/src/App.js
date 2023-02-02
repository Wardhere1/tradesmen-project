import React, { useEffect, useState } from 'react';
import './App.css';
import { ServicePage } from './components/pages/ServicePage';

const serverUrl = process.env.REACT_APP_SERVER_URL;
console.log(`Server url is: ${serverUrl}`);

function App() {
  const [trademanData, setTrademenData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/tradesman')
      const data = await response.json()
      const tradesmanFetchedData = data.rows
      console.log('this is the data:' + JSON.stringify(tradesmanFetchedData,null,4))
      setTrademenData(tradesmanFetchedData);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <ServicePage />
    </div>
  );
}

export default App;
