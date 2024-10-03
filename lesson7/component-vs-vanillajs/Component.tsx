import React, { useState } from 'react';

export default function MyComponent() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleMessage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Hello from React!</h1>
      <button onClick={toggleMessage}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>This is a toggled message!</p>}
    </div>
  );
}
