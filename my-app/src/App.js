import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {name: "Bhuvan", age: 24},
      {name: "Naresh", age: 23}
    ]
  }
  render() {
    return (
      <div className="App">
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
  
    );
  }
  
}

export default App;
