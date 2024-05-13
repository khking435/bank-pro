
import React, { useState } from 'react';
import './Form.css';

const Form = ({ addTransaction }) => {

  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const currentDate = date ? date : new Date().toLocaleDateString();

    const newTransaction = {
      date: currentDate,
      category,
      description,
      amount,
    };

    addTransaction(newTransaction);

    setDate('');
    setCategory('');
    setDescription('');
    setAmount('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="transaction-form">
      
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default Form;
