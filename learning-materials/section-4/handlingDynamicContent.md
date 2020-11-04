# Handling Dynamic Content "The Javascript way"

## App.js

```javascript

    let persons = null;

    if(this.state.showPersons) {
    persons = (
        <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changeNameHandler.bind(this, 
        'Bhuvan!!!')} changed={this.nameChangedHandler}/>
        </div> 
    )
    }

```

### return the variable

```javascript

    return (
    <div className="App">
        <button style={styles} onClick={this.toggleHandler}>Toggle Persons</button>
    
        {persons}
    </div>

    );

```