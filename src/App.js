import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  return (    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className='Plan_name'>Plan Name
        <br></br>
        <input type="text" value={Text} placeholder="Type Here ..." onChange={handleInputChange}>        
        </input>        
      </p>
      <p className='Description'> Description
        <br></br>
        <input type='text' value={Text} placeholder='Description'></input>
      </p>
    </div>
  );
}

export default App;
