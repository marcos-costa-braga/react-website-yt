import React from 'react';
import './App.css';
import FootBar from './components/FootBar/FootBar';
import Home from './components/Home/Home';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Home />
      <FootBar />
    </div>
  );
}

export default App;
