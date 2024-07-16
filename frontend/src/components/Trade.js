import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trade = () => {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    fetchPrice();
  }, []);

  const fetchPrice = async () => {
    const response = await axios.get('/api/price');
    setPrice(response.data.price);
  };

  const handleTrade = async () => {
    await axios.post('/api/trade', { amount });
    alert('Trade successful!');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Trade</h2>
      <p className="mb-2">Current BTC Price: ${price}</p>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount in USD" 
        className="border p-2 mb-4 w-full"
      />
      <button 
        onClick={handleTrade} 
        className="bg-green-500 text-white p-2 rounded"
      >
        Trade
      </button>
    </div>
  );
};

export default Trade;
