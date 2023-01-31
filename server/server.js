import express from 'express';
import pool from './db.js';
import cors from 'cors';
// import db from './db.js'

const app = express();

app.use(express.json());
// app.use(cors.json());
app.use(
  cors({
    origin: '*',
  })
);

const apiPort = 4000;
app.listen(apiPort, () => {
  console.log(`tradesmatch app listening on port ${apiPort}`);
});

app.get('/', (req, res) => {
  res.send('Hello from trade');
});

app.get('/tradesman', async (req, res) => {
  try {
    console.log('1');
    const newTradesman = await pool.query('SELECT * FROM trademan_table');
    console.log('2');
    console.log('Function called');
    console.log(newTradesman);
    res.send('Hello from trade' + newTradesman);
  } catch (error) {
    console.log(error);
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

// UPDATE

//GET

// DELETE
