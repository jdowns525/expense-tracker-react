import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  
  const handleIncomeChange = (e) => {
    setIncome(parseInt(e.target.value));
  };

  const handleExpenseChange = (e) => {
    setExpense(parseInt(e.target.value));
  };

  const handleAddTransaction = () => {
    const newTransaction = {
      id: transactions.length + 1,
      income,
      expense,
    };
    setTransactions([...transactions, newTransaction]);
    setIncome(0);
    setExpense(0);
  };

  const handleDeleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const totalBalance = transactions.reduce(
    (acc, transaction) => acc + transaction.income - transaction.expense,
    0
  );

  return (
    <div>
      <h2>Expense Tracker</h2>
      <div>
        <label htmlFor="income">Income: </label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={handleIncomeChange}
        />
      </div>
      <div>
        <label htmlFor="expense">Expense: </label>
        <input
          type="number"
          id="expense"
          value={expense}
          onChange={handleExpenseChange}
        />
      </div>
      