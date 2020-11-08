# EVENT

## STATE

```javascript

  state = {
    persons : [
      {name: "Bhuvan", age: 24},
      {name: "Naresh", age: 23}
    ],
    otherState: "some value"
  }

```

## Event Handler

```javascript

  changeNameHandler = () => {
    // DON'T DO THIS ==> this.state.persons[0].name = "Bhuvanesh"
    console.log(this.state.persons)
    this.setState({
      persons : [
        {name: "Bhuvanesh", age: 24},
        {name: "Naresh", age: 28}
      ],
    })
    console.log(this.state.persons)

  }

```

### app.js 

```javascript

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {name: "Bhuvan", age: 24},
      {name: "Naresh", age: 23}
    ],
    otherState: "some value"
  }
  changeNameHandler = () => {
    // DON'T DO THIS ==> this.state.persons[0].name = "Bhuvanesh"
    console.log(this.state.persons)
    this.setState({
      persons : [
        {name: "Bhuvanesh", age: 24},
        {name: "Naresh", age: 28}
      ],
    })
    console.log(this.state.persons)

  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changeNameHandler}>Button</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
  
    );
  }
  
}

export default App;


```