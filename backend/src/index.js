const express = require('express');
const bodyParser = require('body-parser');
const tradeRoutes = require('./routes/trade');
const walletRoutes = require('./routes/wallet');

const app = express();
app.use(bodyParser.json());

app.use('/api', tradeRoutes);
app.use('/api', walletRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
