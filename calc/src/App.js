import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [result, setResult] = useState("");

  const buttons = ["AC", "CE", ".", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "="];

  const handleClick = (buttonValue) => {
    if (buttonValue === "=") {
      calculate();
    } else if (buttonValue === "AC") {
      reset();
    }
    else if (buttonValue === "CE") {
      backspace();
    }
    else {
      setResult(result + buttonValue);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  return (
    <div className='container'>
      <input type='text' value={result} readOnly />
      <div className='keypad'>
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
