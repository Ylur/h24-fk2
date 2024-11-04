"use client";
import { useState } from "react";

// Define the Expense type
interface Expense {
  id: number;
  name: string;
  amount: number;
}

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const addExpense = () => {
    if (!expenseName || !expenseAmount) return;

    setExpenses([
      ...expenses,
      { id: Date.now(), name: expenseName, amount: parseFloat(expenseAmount) },
    ]);
    setExpenseName("");
    setExpenseAmount("");
  };

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
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

      <div className="mb-4 text-black ">
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
            className="flex justify-between items-center p-2 border-b text-black "
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
