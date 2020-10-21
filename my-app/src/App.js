import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [ personsState, setPersonsState ]= useState({
    persons : [
      {name: "Bhuvan", age: 24},
      {name: "Naresh", age: 23}
    ],
    otherState: "some value"
  })
  console.log(personsState);
  const changeNameHandler = () => {
    // DON'T DO THIS ==> this.state.persons[0].name = "Bhuvanesh"
    setPersonsState({
      persons : [
        {name: "Bhuvanesh", age: 24},
        {name: "Naresh", age: 28}
      ],
      otherState: personsState.otherState
    })
  }

    return (
      <div className="App">
        <button onClick={changeNameHandler}>Button</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      </div>
  
    );
  
}

export default App;



