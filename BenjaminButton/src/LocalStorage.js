import React, { useState, useEffect } from 'react';
import './index.css';

const IncrementDecrement = () => {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(5);
  const [limit, setLimit] = useState(35);

  useEffect(() => {
    // Load stored values from localStorage
    const savedIncrement = localStorage.getItem('incrementValue');
    const savedLimit = localStorage.getItem('limit');
    
    if (savedIncrement) {
      setIncrementValue(parseInt(savedIncrement));
    }
    
    if (savedLimit) {
      setLimit(parseInt(savedLimit));
    }
  }, []);

  const increment = () => {
    setCount(prevCount => prevCount + incrementValue);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - incrementValue);
  };

  const handleIncrementChange = (e) => {
    const newIncrement = parseInt(e.target.value);
    setIncrementValue(newIncrement);
    localStorage.setItem('incrementValue', newIncrement);
  };

  const handleLimitChange = (e) => {
    const newLimit = parseInt(e.target.value);
    setLimit(newLimit);
    localStorage.setItem('limit', newLimit);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl mb-4">{count}</h1>
      <div className="space-x-4">
        <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded">Increment</button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">Decrement</button>
      </div>
      {count > limit || count < -limit ? (
        <p className="mt-4 text-red-600 text-2xl">BOOM</p>
      ) : null}

      <div className="mt-4 space-x-4">
        <input
          type="number"
          value={incrementValue}
          onChange={handleIncrementChange}
          className="border rounded p-2"
          placeholder="Increment Value"
        />
        <input
          type="number"
          value={limit}
          onChange={handleLimitChange}
          className="border rounded p-2"
          placeholder="Limit"
        />
      </div>
    </div>
  );
};

export default IncrementDecrement;
