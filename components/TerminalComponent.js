import React, { useEffect, useState } from 'react';

const TerminalComponent = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      const script = document.createElement('script');
      script.src = 'https://terminal.jup.ag/main-v1.js';
      script.setAttribute('data-preload', '');
      document.head.appendChild(script);

      script.onload = function() {
        window.Jupiter.init({
          displayMode: "integrated",
          integratedTargetId: "integrated-terminal",
          endpoint: "https://solana-devnet.g.alchemy.com/v2/f9_n6kjAVgqP7L2341WzSr7vsK1ccuTE",
          formProps: {
            fixedOutputMint: false
          }
        });
        setInitialized(true);
      };
    }
  }, [initialized]);

  return (
    <div>
      <div id="integrated-terminal"></div>
    </div>
  );
}

export default TerminalComponent;
