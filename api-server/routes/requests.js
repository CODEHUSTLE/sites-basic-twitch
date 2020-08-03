const express = require('express');
const router = express.Router();
const Request = require('../models/request');
// Get all sticker request
router.get('/', async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one sticker request by id
router.get('/:id', (req, res) => {});

// Create one sticker request
router.post('/', async (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// Update one sticker request by id
router.patch('/:id', (req, res) => {});

// Delete one sticker request by id
router.delete('/:id', (req, res) => {});

module.exports = router;
