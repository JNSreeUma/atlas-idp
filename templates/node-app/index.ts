import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Atlas TS Day 21 Automation test 9🚀");
});

const PORT = parseInt(process.env.PORT || "3000", 10);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App running on port ${PORT}`);
});