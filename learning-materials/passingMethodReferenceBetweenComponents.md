# PASSING METHOD REFERNCE BETWEEN COMPONENTS

### App.js

```javascript

  changeNameHandler = (newName) => {
    this.setState({
      persons : [
        {name: newName, age: 24},
        {name: "Naresh", age: 28}
      ],
    })
  }

 <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changeNameHandler.bind(this, 'Bhuvan!!!')}

```

### Person.js

```javascript

const person = (props) => {
    return (
        <div>
        <h1 onClick={props.click}>I'm a {props.name} and I'm {props.age} old </h1>
        </div>
    )
}

```