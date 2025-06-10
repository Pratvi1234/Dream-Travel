// routes/destinations.js
const express = require('express');
const router = express.Router();
const destinationsData = require('../data/destinations');

// GET /api/destinations - list all
router.get('/', (req, res) => {
  const destinations = destinationsData.getAll();
  res.json(destinations);
});

// POST /api/destinations - add new
router.post('/', (req, res) => {
  const { name, description, packages, image } = req.body;

  // Basic validation
  if (!name || !description || !Array.isArray(packages) || packages.length === 0) {
    return res.status(400).json({ error: 'Name, description, and at least one package are required.' });
  }
  
  // Normalize package prices as numbers
  const normalizedPackages = packages.map(pkg => ({
    name: pkg.name,
    price: Number(pkg.price),
  }));

  const newDestination = {
    name,
    description,
    packages: normalizedPackages,
    image: image || 'https://via.placeholder.com/800x450?text=No+Image'
  };

  destinationsData.add(newDestination);
  res.status(201).json(newDestination);
});

module.exports = router;
