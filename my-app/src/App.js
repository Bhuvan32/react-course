import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Person name="Bhuvan" age="24" />
        <Person name="Kumar" age="23" />
      </div>
  
    );
  }
  
}

export default App;
