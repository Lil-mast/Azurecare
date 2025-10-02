const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();  // For environment variables

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());  // Allow frontend to connect
app.use(bodyParser.json());

// Sample route for medical directory search
app.get('/api/search', (req, res) => {
  const query = req.query.q;  // e.g., ?q=doctor
  // In real app, query your DB here
  res.json({ results: [`Mock results for: ${query}`] });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});