import React from 'react';
import './NonModalWindow.css';

function NonModalWindow({ onClose }) {
  return (
    <div className="non-modal-window">
      <h2>F7 Window</h2>
      <p>F7 window is non modal. Please close mee..!</p>
      <button onClick={onClose}>Close Window</button>
    </div>
  );
}

export default NonModalWindow;
