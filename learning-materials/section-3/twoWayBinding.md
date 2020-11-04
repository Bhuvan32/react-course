# TWO WAY BINDING

### App.js

```javascript

 <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changeNameHandler.bind(this, 
 'Bhuvan!!!')} changed={this.nameChangedHandler}/>

```

### CHANGE HANDLER EVENT

```javascript

  nameChangedHandler = (event)=> {
    this.setState({
      persons : [
        {name: "Bhuvan", age: 24},
        {name: event.target.value, age: 28}
      ],
    })
  }

```

### Person.js

```javascript

  <input type="text" onChange={props.changed}></input>

```