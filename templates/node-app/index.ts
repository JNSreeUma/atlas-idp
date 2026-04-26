import express from 'express';

const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.get('/', (req, res) => {
  res.send("Hello from Atlas TS Day 22 Automation test Final Happy ending love you... 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0");
  // console.log(`App running on port ${PORT}`);
// });