import React, { FC } from 'react';
import './App.css';
import Router from './router';

const App: FC = function (props) {
  return (
    <div data-testid="app" className="App">
      <Router></Router>
    </div>
  );
};

export default App;
