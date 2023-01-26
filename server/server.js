import express from 'express';
const app = express();

app.use(express.json());

const apiPort = 4000;
app.listen(apiPort, () => {
  console.log(`tradesmatch app listening on port ${apiPort}`);
});

app.get('/', (req, res) => {
  res.send('Hello from tradess');
});
