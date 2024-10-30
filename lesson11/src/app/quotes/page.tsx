"use client";
import { useState } from "react";

const QUOTES = [
  "Ogres are like onions.",
  "What are you doing in my swamp?!",
  "Better out than in, I always say.",
  "This is the part where you run away!",
  "Donkey, you're going the right way for a smack bottom.",
];

export default function Quotes() {
  const [quote, setQuote] = useState(QUOTES[0]);

  const handleNewQuote = () => {
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setQuote(randomQuote);
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b  text-white">
      <h2 className="text-4xl font-bold mb-6 drop-shadow-md">
        Shrek&apos;s Iconic Quotes
      </h2>

      <div className="bg-green-800 bg-opacity-70 p-8 rounded-lg shadow-lg max-w-lg text-center">
        <p className="text-xl font-serif italic mb-6">{quote}</p>
      </div>

      <button
        onClick={handleNewQuote}
        className="mt-8 bg-yellow-500 text-green-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
      >
        Get a new quote
      </button>
    </div>
  );
}
