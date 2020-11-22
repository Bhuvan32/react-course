import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {id: "id-1", name: "Bhuvan", age: 24},
      {id: "id-2", name: "Naresh", age: 23},
      {id: "id-3", name: "Henry", age: 23},
    ],
    showPersons: false
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

        );
      }

      const classes = [];

      if(this.state.persons.length <= 2){
        classes.push('red')
      }
      if(this.state.persons.length <= 1){
        classes.push('normal')
      }


      return (
        <div className="App">
          <h1 className={classes.join(' ')}>This is working!!!</h1>
          <button className="button" onClick={this.toggleHandler}>Toggle Persons</button>
     
          {persons}
        </div>
      );
    }
  
}

export default App;



