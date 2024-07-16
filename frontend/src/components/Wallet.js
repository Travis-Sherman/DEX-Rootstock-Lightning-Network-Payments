import React, { useState } from 'react';
import axios from 'axios';

const Wallet = () => {
  const [amount, setAmount] = useState(0);

  const handleDeposit = async () => {
    await axios.post('/api/deposit', { amount });
    alert('Deposit successful!');
  };

  const handleWithdraw = async () => {
    await axios.post('/api/withdraw', { amount });
    alert('Withdrawal successful!');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Wallet</h2>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount in BTC" 
        className="border p-2 mb-4 w-full"
      />
      <button 
        onClick={handleDeposit} 
        className="bg-blue-500 text-white p-2 rounded mr-2"
      >
        Deposit
      </button>
      <button 
        onClick={handleWithdraw} 
        className="bg-red-500 text-white p-2 rounded"
      >
        Withdraw
      </button>
    </div>
  );
};

export default Wallet;
