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