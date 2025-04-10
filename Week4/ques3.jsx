// server.js
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});