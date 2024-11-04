// MagicBox.tsx
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

// TODO: According to this type, add these functions to this component to be used within the parent component.
// Hint: useImperativeHandle
type MagicBoxHandle = {
  changeColor: () => void;
  resize: () => void;
  wiggle: () => void;
};

type MagicBoxRef = MagicBoxHandle & HTMLDivElement;

// eslint-disable-next-line react/display-name
const MagicBox = forwardRef<MagicBoxHandle>((_, ref) => {
  const boxRef = useRef<MagicBoxRef>(null);
  // Using state to maintain size and color
  const [size, setSize] = useState("20");
  const [colorClass, setColorClass] = useState("bg-red-500");

  // Random color generator
  function randomColor() {
    // Get a random color from tailwindColors
    const randomIndex = Math.floor(Math.random() * tailwindColors.length);
    return tailwindColors[randomIndex];
  }

  const changeColor = () => {
    // Update the color state with a random color
    const newColor = randomColor();
    setColorClass(newColor);
  };

  const resize = () => {
    // Toggle size between "20" and "40"
    const newSize = size === "20" ? "40" : "20";
    setSize(newSize);
  };

  const wiggle = () => {
    // Add and then remove an animation from the classlist of a component
    if (boxRef.current) {
      boxRef.current.classList.add("animate-wiggle");
      setTimeout(() => boxRef.current?.classList.remove("animate-wiggle"), 2000);
    }
  };

  // Expose the functions to the parent component
  useImperativeHandle(ref, () => ({
    changeColor,
    resize,
    wiggle,
  }));

  return (
    <div
      ref={boxRef}
      className={`w-${size} h-${size} ${colorClass} transition-all duration-500`}
    />
  );
});

// Parent Component
function MagicBoxParent() {
  const magicBoxRef = useRef<MagicBoxHandle>(null);

  return (
    <div className="App">
      <h1>Magic Box!</h1>
      <button
        onClick={() => magicBoxRef.current?.changeColor()}
        className="m-4 border"
      >
        Change Color
      </button>
      <button
        className="m-4 border"
        onClick={() => magicBoxRef.current?.resize()}
      >
        Resize
      </button>
      <button
        className="m-4 border"
        onClick={() => magicBoxRef.current?.wiggle()}
      >
        Wiggle
      </button>
      <MagicBox ref={magicBoxRef} />
    </div>
  );
}

export default MagicBoxParent;
