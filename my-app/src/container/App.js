import React, {Component} from 'react';

import classes from './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'

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
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
    
  }

    render() {
   
      let persons = null;
      

      if(this.state.showPersons) {
        persons = <Persons 
                   persons={this.state.persons} 
                   clicked={this.deletePerson} 
                   changed={this.nameChangeHandler}/>
      }
      return (
        <div className={classes.App}>
          <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.toggleHandler}/>
          {persons}
        </div>
      );
    }
  
}

export default App;



