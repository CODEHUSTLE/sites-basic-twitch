const express = require('express');
const router = express.Router();

// Get home routes
router.get('/', async (req, res) => {
  res.send('CodeHustle Sticker Request API');
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
