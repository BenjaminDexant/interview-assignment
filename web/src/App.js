import React from 'react';

import ImpactersList from './components/ImpactersList/ImpactersList';
import ImpacterResume from './components/Impacter/ImpacterResume';
import ImpacterPosts from './components/Impacter/ImpacterPosts';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="header" />
      <div className="body">
        <div className="impactersList">
          <ImpactersList />
        </div>
        <div className="impacter">
          <ImpacterResume className="impacterResume" />
          <ImpacterPosts className="impacterPosts" />
        </div>
      </div>
      <div className="footer" />
    </div>
  );
};

export default App;
