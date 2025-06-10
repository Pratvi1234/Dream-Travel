// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const destinationsRouter = require('./routes/destinations');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Allow all origins for dev, configure restrictively for prod
app.use(bodyParser.json());

// API prefix for versioning clarity
app.use('/api/destinations', destinationsRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Serve 404 for unknown endpoints
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`Dream Travel API server running at http://localhost:${port}`);
});
