'use client'
import { SetStateAction, useState } from 'react';
import './globals.css';

const shrekQuotes = [
  "Ogres are like onions... they have layers!",
  "What are you doing in my swamp?",
  "I'm like a crackin' onion!",
  "Better out than in, I always say!",
  "Donkey, I'm warning you!",
  "This is the part where you run away."
];

export default function Home() {
  const [selectedQuote, setSelectedQuote] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const randomQuote = shrekQuotes[Math.floor(Math.random() * shrekQuotes.length)];
    setSelectedQuote(randomQuote);
  };

  const handleFocus = () => {
    console.log('Input is focused');
  };

  const handleBlur = () => {
    console.log('Input lost focus');
  };

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedQuote(e.target.value);
  };

  const handleKeyDown = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className="grid-cols-4 border-current p-6">
      <h1 className="text-4xl font-bold mb-4 text-black-50 text-center">Welcome to Shreks Swamp</h1>
      
      <div className="mt-8 flex flex-col items-center gap-4">
        <button
          className={`p-4 bg-green-700 rounded-full text-lg hover:bg-green-800 focus:outline-none ${
            isHovered ? 'scale-110' : 'scale-100'
          } transition-transform`}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Click for a Shrek Quote
        </button>

        <input
          className="mt-4 p-2 w-64 text-black rounded focus:ring-2 focus:ring-green-300"
          type="text"
          placeholder="Type your own quote"
          value={selectedQuote}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <div className="mt-6 text-xl text-center">
          <p>{selectedQuote ? `"${selectedQuote}"` : "No quote selected yet"}</p>
        </div>
      </div>
    </div>
  );
}
