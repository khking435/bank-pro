import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
    // Define state variables using useState hook
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
   // useEffect hook to fetch data when component mounts
  useEffect(() => {
  // Fetch transactions data from the server
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))// Set transactions state with fetched data
      .catch(error => console.error('Error fetching data:', error));
  }, []); 
// Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="container">
      <header>
        <h1 className='starter'>The Royal Bank Of Flatiron</h1>
      </header>
      <div className="content">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Form addTransaction={addTransaction} />
        <Table transactions={transactions} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
