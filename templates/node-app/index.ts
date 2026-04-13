import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Atlas TS 🚀");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});