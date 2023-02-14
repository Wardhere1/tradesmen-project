import express from 'express';
import pool from './db.js';
import cors from 'cors';
// import db from './db.js'

const app = express();

app.use(express.json());
app.use(cors());

const apiPort = 4000;
app.listen(apiPort, () => {
  console.log(`tradesmatch app listening on port ${apiPort}`);
});

app.get('/', (req, res) => {
  console.log('GET / called');
  res.send('Hello from trade');
});

app.get('/tradesman', async (req, res) => {
  try {
    // console.log('GET /tradesman called, querying trademan_table');
    const newTradesman = await pool.query('SELECT * FROM trademan_table');
    // console.log(`Data successfully fetched, newTradesman: ${JSON.stringify(newTradesman, null, 4)}`);
    res.status(200).json(newTradesman);
  } catch (error) {
    console.log('Error in GET /tradesman: ', error);
    res.status(500).json({ message: 'There was an internal server error, please contact support' });
  }
});

app.get('/services', async (req, res) => {
  try {
    // console.log('GET /services called, querying services_table');
    const services = await pool.query('SELECT * FROM services_table');
    // console.log(`Data successfully fetched, services: ${JSON.stringify(services, null, 4)}`);
    res.status(200).json(services);
  } catch (error) {
    console.log('Error in GET /services: ', error);
    res.status(500).json({ message: 'There was an internal server error, please contact support' });
  }
});

app.get('/customer-sign-up', async (req, res) => {
  try {
    console.log('GET /customer called, querying customer_table');
    const customer = await pool.query('SELECT * FROM customer_table');
    console.log(`Data successfully fetched, services: ${JSON.stringify(customer, null, 4)}`);
    res.status(200).json(customer);
  } catch (error) {
    console.log('Error in GET /customer: ', error);
    res.status(500).json({ message: 'There was an internal server error, please contact support' });
  }
});

// app.get('/tradesman', (req, res) => {
//   try {
//     console.log('Success');
//   } catch (error) {
//     console.log(error);
//   }
// });

//ROUTES
app.post('/tradesman', async (req, res) => {
  try {
    const { firstname } = req.body;
    const newTradesman = await pool.query('INSERT INTO trademan_table (firstname) VALUES($1);', [firstname]);
    res.json(newTradesman);
  } catch (err) {
    console.error(err.message);
  }
});
// CREATE

app.post('/customer-sign-up', async (req, res) => {
  try {
    console.log(req.body)
    const { firstname,surname,email,mobile_number,postcode,brief_description,additional_comments,customer_service } = req.body;
    const newCustomer = await pool.query('INSERT INTO customer_table (firstname,surname,email,mobile_number,postcode,brief_description,additional_comments,customer_service) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING* ;', [firstname,surname,email,mobile_number,postcode,brief_description,additional_comments,customer_service]);
    res.json(newCustomer);
  } catch (err) { 
    console.error(err.message);
  }
});

// UPDATE

//GET

// DELETE
