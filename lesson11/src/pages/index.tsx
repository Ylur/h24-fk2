import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

type Props = {
  showText: boolean;
};

const ConditionalText = ({ showText }: Props) => {
  if (!showText) {
    return null;
  }

  return (
    <p className="mt-4 text-lg text-gray-700">
      This is the text that gets conditionally rendered!
    </p>
  );
};

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleToggle = () => {
    setShowText(!showText); // Toggle state
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const onFocus = () => {
    console.log("on focus");
  };

  const onBlur = () => {
    console.log("on blur");
  };

  // Event handlers for mouse enter and leave
  const onMouseLeave = () => {
    // alert("mouse exit");
    console.log("mouse exit");
  };
  const onMouseEnter = () => {
    // alert("mouse enter");
    console.log("mouse enter");
  };

  // Event handler for key down event
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    console.log("Key pressed:", event.key);
    // setLastKeyPressed(event.key); // Set last pressed key
    if (event.key === "Enter") {
      alert("You pressed the Enter key!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl text-black font-bold mb-4">
          Toggle Text Display App
        </h1>

        <button
          onClick={handleToggle}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {showText ? "Hide Text" : "Show Text"}
        </button>

        <ConditionalText showText={showText} />

        <div className="mt-6">
          <input
            type="text"
            placeholder="Type something..."
            value={inputValue}
            onFocus={onFocus}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            className="px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {inputValue && (
          <p className="mt-4 text-lg text-blue-600">
            You typed: <strong>{inputValue}</strong>
          </p>
        )}
      </div>
    </div>
  );
}
