// components/TetrisSwitcher.js

import React, { useState } from 'react';

const TetrisSwitcher = () => {
  const [showFirstPage, setShowFirstPage] = useState(true);

  const togglePage = () => {
    setShowFirstPage(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={togglePage}>
        Switch
      </button>
      {showFirstPage ? (
        <iframe
          src="/Solana/tetris.html"
          title="Tetris Game 1"
          width="100%"
          height="500px"
        />
      ) : (
        <iframe
          src="/Solana/Tetris2.html"
          title="Tetris Game 2"
          width="100%"
          height="500px"
        />
      )}
    </div>
  );
};

export default TetrisSwitcher;
