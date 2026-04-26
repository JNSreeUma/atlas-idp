import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Atlas TS Day 21 Automation test 7🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});