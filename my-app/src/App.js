import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
function App() {
  return (
    <div className="App">
      <Person />
      <Person></Person>
    </div>

  );
  
  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hello World!'))
}

export default App;
