# RENDERING CONTENT CONDITIONALLY

## App.js

- Important not, regular if conditions doesn't work

```javascript

{   
    this.state.showPersons ?
    <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changeNameHandler.bind(this, 
        'Bhuvan!!!')} changed={this.nameChangedHandler}/>
    </div> : null

}

```

# Toggle Handler

```javascript

toggleHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
}

<button style={styles} onClick={this.toggleHandler}>Button</button>



```