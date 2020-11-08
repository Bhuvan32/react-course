# function component 

## Person-> Person.js 

```javascript

import React from 'react'

const person = () => {
    return (
        <div>
            <h1>I'm a Person</h1>
        </div>
    )
}

export default person

```

## App.js 

```javascript

import React from 'react';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <Person />
      <Person></Person>
    </div>

  );
  
}

export default App;

```
***

# class component 

```javascript

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

```