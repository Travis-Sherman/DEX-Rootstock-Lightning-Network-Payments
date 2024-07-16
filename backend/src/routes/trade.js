const express = require('express');
const router = express.Router();
const axios = require('axios');

// Mock fetching price from Anduro
router.get('/price', async (req, res) => {
  const response = await axios.get('https://api.anduro.io/price/BTC'); // Replace with actual API call
  const price = response.data.price || 45000; // Mock price
  res.json({ price });
});

router.post('/trade', (req, res) => {
  const { amount } = req.body;
  // Implement trade logic here, interact with smart contract
  res.send('Trade successful');
});

module.exports = router;
