import './index.css';
import React, { useState } from 'react';

const IncrementDecrement = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 5);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 5);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl mb-4">{count}</h1>
      <div className="space-x-4">
        <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded">Increment</button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">Decrement</button>
      </div>
      {count > 35 || count < -35 ? (
        <p className="mt-4 text-red-600 text-2xl">BOOM</p>
      ) : null}
    </div>
  );
};

export default IncrementDecrement;
