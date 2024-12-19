"use client";
import { useState } from "react";
import "../styles/globals.css";

const shrekQuotes = [
  "Ogres are like onions... they have layers!",
  "What are you doing in my swamp?",
  "I'm like a crackin' onion!",
  "Better out than in, I always say!",
  "Donkey, I'm warning you!",
  "This is the part where you run away.",
];

export default function Home() {
  const [selectedQuote, setSelectedQuote] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const randomQuote =
      shrekQuotes[Math.floor(Math.random() * shrekQuotes.length)];
    setSelectedQuote(randomQuote);
  };

  return (
    <div className="bg-green-400 w-96 h-auto md:w-1/2 md:h-auto rounded border-solid p-10 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-700 text-center">
        Welcome to Shrek&apos;s Swamp
      </h1>

      <div className="grid grid-cols-1 mt-8 place-items-center gap-4">
        <input
          className="text-center mt-4 p-2 w-11/12 border-b-4 text-black rounded focus:ring-2 focus:ring-green-300"
          type="text"
          placeholder="Type your own quote"
          value={selectedQuote}
          onChange={(e) => setSelectedQuote(e.target.value)}
        />

        <div className="mt-4 p-2 w-64 text-black rounded focus:ring-2 text-center">
          <p>
            {selectedQuote ? `"${selectedQuote}"` : "No quote selected yet"}
          </p>
        </div>

        <div className="relative text-center">
          <button
            type="button"
            className={`p-4 bg-green-700 rounded-full text-lg hover:bg-green-800 focus:outline-none disabled:opacity-50 ${
              isHovered ? "scale-110" : "scale-100"
            } transition-transform`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Click for a Shrek Quote
          </button>
        </div>
      </div>
    </div>
  );
}
