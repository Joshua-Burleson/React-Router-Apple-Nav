import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import SubRouter from './components/SubRouter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <SubRouter />
      </header>
    </div>
  );
}

export default App;
