# function component #

## Person-> Person.js ##

import React from 'react'

const person = () => {
    return (
        <div>
            <h1>I'm a Person</h1>
        </div>
    )
}

export default person

## App.js ##

import React from 'react';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <Person />
      <Person></Person>
    </div>

  );
  
  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hello World!'))
}

export default App;
