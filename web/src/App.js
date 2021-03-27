import React from 'react';

import ImpactersList from './components/ImpactersList/ImpactersList';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="Header" />
      <div className="Body">
        <div className="ImpactersList">
          <ImpactersList />
        </div>
      </div>
      <div className="Footer" />
    </div>
  );
};

export default App;
