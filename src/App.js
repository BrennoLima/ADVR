import React from 'react';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Main from './Components/MainComponent'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Main/>
      </Router>
    </div>
  );
}

export default App;
