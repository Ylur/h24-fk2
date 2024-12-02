//duckafuck hvað ég skil ekkert í serverum :(

'use client'
import { useState, useEffect } from 'react';

// info sem er skrifað í appið
interface Expense {
  id: number;
  name: string;
  amount: number;
}

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  // sækja  expenses frá API 
  useEffect(() => {
    fetch('http://localhost:3001/api/expenses')
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error('Error fetching expenses:', error));
  }, []);

  const addExpense = () => {
    if (!expenseName || !expenseAmount) return;

    const newExpense = {
      name: expenseName,
      amount: parseFloat(expenseAmount),
    };

    fetch('http://localhost:3001/api/create-expense', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newExpense),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.error || 'Failed to add expense.');
          });
        }
        return response.json();
      })
      .then((createdExpense) => {
        setExpenses([...expenses, createdExpense]);
        setExpenseName('');
        setExpenseAmount('');
      })
      .catch((error) => {
        console.error('Error adding expense:', error);
        alert(`Error adding expense: ${error.message}`);
      });
  };

  const removeExpense = (id: number) => {
    fetch(`http://localhost:3001/api/expense/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete expense.');
        }
        setExpenses(expenses.filter((expense) => expense.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting expense:', error);
        alert(`Error deleting expense: ${error.message}`);
      });
  };

  const totalCost = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow-md">
      <h1 className="text-xl font-semibold mb-4 text-black">My Expenses</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Expense name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          className="border p-2 rounded w-full text-black"
        />
        <input
          type="number"
          placeholder="Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          className="border p-2 rounded w-1/3 text-black"
        />
        <button
          onClick={addExpense}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="mb-4 text-black">
        <p>
          Total Expenses: <strong>{expenses.length}</strong>
        </p>
        <p>
          Total Cost: <strong>${totalCost.toFixed(2)}</strong>
        </p>
      </div>

      <ul>
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className="flex justify-between items-center p-2 border-b text-black"
          >
            <span>
              {expense.name} - ${expense.amount.toFixed(2)}
            </span>
            <button
              onClick={() => removeExpense(expense.id)}
              className="text-red-500"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
