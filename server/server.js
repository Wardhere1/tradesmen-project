import express from 'express';
import pool from './db';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors.json());

const apiPort = 4000;
app.listen(apiPort, () => {
  console.log(`tradesmatch app listening on port ${apiPort}`);
});

app.get('/', (req, res) => {
  res.send('Hello from trades');
});

//ROUTES
app.post('/tradesman', async (req, res) => {
  try {
    const { firstname } = req.body;
    const newTradesman = await pool.query('INSERT INTO trademan_table (firstname) VALUES($1)', [firstname]);
    res.json(newTradesman);
  } catch (err) {
    console.error(err.message);
  }
});
// CREATE

// UPDATE

//GET

// DELETE
