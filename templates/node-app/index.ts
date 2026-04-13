import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Atlas TS 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});