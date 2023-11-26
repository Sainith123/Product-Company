import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    updateButtonStates(position);
  }, []); // Run this effect only on mount

  const updateButtonStates = (position) => {
    const isAtTop = position.top === 0;
    const isAtBottom = position.top === 450;
    const isAtLeft = position.left === 0;
    const isAtRight = position.left === 450;

    document.getElementById('up').disabled = isAtTop;
    document.getElementById('down').disabled = isAtBottom;
    document.getElementById('left').disabled = isAtLeft;
    document.getElementById('right').disabled = isAtRight;
  };

  const moveBlock = (direction) => {
    let newPosition = { ...position };

    switch (direction) {
      case 'up':
        if (newPosition.top > 0) {
          newPosition.top = Math.max(newPosition.top - 50, 0);
        } else {
          alert('Cannot move up. Already at the top.');
        }
        break;
      case 'down':
        newPosition.top = Math.min(newPosition.top + 50, 450);
        break;
      case 'left':
        newPosition.left = Math.max(newPosition.left - 50, 0);
        break;
      case 'right':
        newPosition.left = Math.min(newPosition.left + 50, 450);
        break;
      default:
        break;
    }

    setPosition(newPosition);
    updateButtonStates(newPosition);
  };
  return (
    <div className="App">
      <h1>Made by Sainith</h1>
      <div className="grid-container">
        <button  id="up" className="up"  onClick={() => moveBlock('up')}>Up</button>
        <button id="left" className="left" onClick={() => moveBlock('left')}>Left</button>
        <div className="game-container">
          <div className="block" style={{ top: `${position.top}px`, left: `${position.left}px` }}></div>
        </div>
        <button id="right" className="right" onClick={() => moveBlock('right')}>Right</button>
        <button id="down" className="down" onClick={() => moveBlock('down')}>Down</button>
      </div>
    </div>
  );
}

export default App;
