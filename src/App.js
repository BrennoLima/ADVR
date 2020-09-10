import React from 'react';
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Main from './Components/MainComponent'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
