# INLINE STYLES


```javascript

    const styles = {
        backgroundColor: 'white',
        border: '1px solid blue',
        padding: '16px',
        outline: '0',
        cursor: 'pointer'
    }

```

### How to use

```javascript

  <button style={styles} onClick={this.changeNameHandler.bind(this, 'Bhuvanesh')}>Button</button>

```

### App.js

```javascript

    render() {
      const styles = {
        backgroundColor: 'white',
        border: '1px solid blue',
        padding: '16px',
        outline: '0',
        cursor: 'pointer'
      }

      return (
        <div className="App">

          <mark><button style={styles} onClick={this.changeNameHandler.bind(this, 'Bhuvanesh')}>Button</button></mark>

          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changeNameHandler.bind(this, 
            'Bhuvan!!!')} changed={this.nameChangedHandler}/>
        </div>
    
      );
    }
  
}

```