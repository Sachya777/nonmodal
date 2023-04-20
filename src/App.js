import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import NonModalWindow from './NonModalWindow';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openWindow = () => {
    setIsOpen(true);
  };

  const closeWindow = () => {
    setIsOpen(false);
  };

  const container = document.getElementById('non-modal-window-container');

  return (
    <div>
      <h1>B7 Window</h1>
      <button onClick={openWindow}>Open F7 Window</button>
      <button onClick={openWindow}>2nd Window</button>
      {isOpen &&
        createPortal(
          <NonModalWindow onClose={closeWindow} />,
         
          container
        )}
    </div>
  );
}

export default App;
