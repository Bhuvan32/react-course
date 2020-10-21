# PROPS

- props is the properties of the components

### App.js

```javascript

function App() {
  return (
    <div className="App">
      <Person name="Bhuvan" age="24" />
      <Person name="Kumar" age="23" />
    </div>

  );
  
}

```

### person.js

```javascript

import React from 'react'

const person = (props) => {
    return (
        <div>
            <h1>I'm a {props.name} and I'm {props.age} old</h1>
        </div>
    )
}

export default person

```