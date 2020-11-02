import React, {Component, useState} from 'react';
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
  

   changeNameHandler = (newName) => {
    // DON'T DO THIS ==> this.state.persons[0].name = "Bhuvanesh"
    this.setState({
      persons : [
        {name: newName, age: 24},
        {name: "Naresh", age: 28}
      ],
    })

  }

    render() {
      return (
        <div className="App">
          <button onClick={this.changeNameHandler.bind(this, 'Bhuvanesh')}>Button</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changeNameHandler.bind(this, 
            'Bhuvan!!!')} />
        </div>
    
      );
    }
  
}

export default App;



