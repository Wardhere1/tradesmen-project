import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
const serverUrl = process.env.REACT_APP_SERVER_URL;
console.log(`Server url is: ${serverUrl}`);

function App() {
  const [trademanData, setTrademenData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/');
      const data = await response.json();
      setTrademenData(data);
    }
    fetchData();
  }, []);

  console.log(trademanData);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn
        </a>
      </header>
    </div>
  );
}

export default App;
