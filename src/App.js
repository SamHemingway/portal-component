import React from 'react';

import Portal from './Portal';

function App() {
  const [
    isPortalRendered,
    setIsPortalRendered,
  ] = React.useState(false);
  
  return (
    <>
      <button
        onClick={() => {
          setIsPortalRendered(!isPortalRendered)
        }}
      >
        Toggle portal
      </button>
      <div className="gray box">
        This box is rendered inside App.
        {isPortalRendered && (
          <Portal setIsRendered={setIsPortalRendered} isRendered={isPortalRendered}>
            <div className="pink box">
              This box should be rendered outside!
            </div>
          </Portal>
        )}
      </div>
    </>
  );
}

export default App;