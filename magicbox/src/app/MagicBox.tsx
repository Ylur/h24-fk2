"use client";
import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

// Pre-defined colors to be used for randomizer
const tailwindColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
];

type MagicBoxHandle = {
  changeColor: () => void;
  resize: () => void;
  wiggle: () => void;
};

const MagicBox = forwardRef<MagicBoxHandle>((_, ref) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(80); // Initial size in pixels
  const [colorClass, setColorClass] = useState("bg-red-500");

  // Random color generator
  function randomColor() {
    const randomIndex = Math.floor(Math.random() * tailwindColors.length);
    return tailwindColors[randomIndex];
  }

  const changeColor = () => {
    const newColor = randomColor();
    setColorClass(newColor);
  };

  const resize = () => {
    const newSize = size === 80 ? 160 : 80; // Toggle between sizes
    setSize(newSize);
  };

  const wiggle = () => {
    if (boxRef.current) {
      boxRef.current.classList.add("animate-wiggle");
      setTimeout(() => {
        boxRef.current?.classList.remove("animate-wiggle");
      }, 500); // Duration matches the animation duration
    }
  };

  useImperativeHandle(ref, () => ({
    changeColor,
    resize,
    wiggle,
  }));

  return (
    <div
      ref={boxRef}
      style={{ width: size, height: size }}
      className={`${colorClass} transition-all duration-500`}
    />
  );
});

MagicBox.displayName = "MagicBox";

// Parent Component
function MagicBoxParent() {
  const magicBoxRef = useRef<MagicBoxHandle>(null);

  return (
    <div className="App">
      <h1>Magic Box!</h1>
      <button
        onClick={() => magicBoxRef.current?.changeColor()}
        className="m-4 border p-2"
      >
        Change Color
      </button>
      <button
        className="m-4 border p-2"
        onClick={() => magicBoxRef.current?.resize()}
      >
        Resize
      </button>
      <button
        className="m-4 border p-2"
        onClick={() => magicBoxRef.current?.wiggle()}
      >
        Wiggle
      </button>
      <MagicBox ref={magicBoxRef} />
    </div>
  );
}

export default MagicBoxParent;
