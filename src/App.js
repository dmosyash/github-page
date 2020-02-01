import React from 'react';
import './App.css';

import LeftPanel from './left-panel/leftPanel';
import RightPanel from './right-panel/rightPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Github Page</span>
      </header>
      <div className="wrapper">
        <div className="left-wrapper">
          <LeftPanel />
        </div>
        <div className="right-wrapper">
          <RightPanel />
          </div>
      </div>
    </div>
  );
}

export default App;
