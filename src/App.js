import React from 'react';
import Login from './components/Login';

function App() {
  return (
    <div className="App w-100 bg-light">
      <Login/>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
    </div>
  );
}

export default App;
