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
router.get('/:id', getRequest, (req, res) => {
  console.log(`RequestObj: ${res.request}`);
  res.json(res.request);
});

// Create one sticker request
router.post('/', async (req, res) => {
  if (req.body) {
    const emailCheck = await Request.findOne({ email: req.body.email });
    if (emailCheck == null) {
      const request = new Request(
        req.body /* {
        name: req.body.name,
        email: req.body.email,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
      } */
      );
      try {
        const newRequest = await request.save();
        res.status(201).json(newRequest);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    } else {
      console.log('Email already exists');
      res.send('Email already exists');
    }
  }
});

// Update one sticker request by id
router.patch('/:id', getRequest, async (req, res) => {});

// Delete one sticker request by id
router.delete('/:id', getRequest, async (req, res) => {});

async function getRequest(req, res, next) {
  try {
    request = await Request.findById(req.params.id);
    if (request == null) {
      return res.status(404).json({ message: `Can't find request` });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.request = request;
  next();
}

module.exports = router;
