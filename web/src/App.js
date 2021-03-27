import React from 'react';

import ImpactersList from './components/ImpactersList/ImpactersList';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="header" />
      <div className="body">
        <div className="impactersList">
          <ImpactersList />
        </div>
      </div>
      <div className="footer" />
    </div>
  );
};

export default App;
