
import React, { useState } from "react";
import "./App.css";

function App() {
  // Initialize counter using useState
  const [count, setCount] = useState(0);

  // Increment counter
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Decrement counter (minimum value is 0)
  const decrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  // Reset counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counter-card">
        <h1>Counter App</h1>

        <p className="description">
          A simple React application using the useState Hook
        </p>

        <div className="counter-display">
          {count}
        </div>

        <div className="button-group">
          <button
            className="btn increment-btn"
            onClick={increment}
          >
            + Increment
          </button>

          <button
            className="btn decrement-btn"
            onClick={decrement}
            disabled={count === 0}
          >
            - Decrement
          </button>

          <button
            className="btn reset-btn"
            onClick={reset}
          >
            Reset
          </button>
        </div>

        {/* Conditional Rendering */}
        {count === 0 ? (
          <p className="message minimum">
            Minimum limit reached
          </p>
        ) : (
          <p className="message success">
            Counter is running!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
