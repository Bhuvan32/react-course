import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {id: "id-1", name: "Bhuvan", age: 24},
      {id: "id-2", name: "Naresh", age: 23},
      {id: "id-3", name: "Henry", age: 23}
    ],
  }
  
  toggleHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})

  }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(pIndex => {
      return pIndex.id === id
    })

    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
 
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  deletePerson = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
    
  }

    render() {
      const styles = {
        backgroundColor: 'white',
        border: '1px solid blue',
        padding: '16px',
        outline: '0',
        cursor: 'pointer'
      }
      let persons = null;

      if(this.state.showPersons) {
        persons = (
          < div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePerson(index)} 
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id) }/>
          })}
      
          </div> 
        )
      }

      return (
        <div className="App">
          <button style={styles} onClick={this.toggleHandler}>Toggle Persons</button>
     
          {persons}
        </div>
    
      );
    }
  
}

export default App;



