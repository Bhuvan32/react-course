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

  nameChangedHandler = (event)=> {
    this.setState({
      persons : [
        {name: "Bhuvan", age: 24},
        {name: event.target.value, age: 28}
      ],
    })
  }

    render() {
      const styles = {
        backgroundColor: 'white',
        border: '1px solid blue',
        padding: '16px',
        outline: '0',
        cursor: 'pointer'
      }
      return (
        <div className="App">
          <button style={styles} onClick={this.changeNameHandler.bind(this, 'Bhuvanesh')}>Button</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changeNameHandler.bind(this, 
            'Bhuvan!!!')} changed={this.nameChangedHandler}/>
        </div>
    
      );
    }
  
}

export default App;



