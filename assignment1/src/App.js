import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    UserOutPutText: [
      {userName: 'Bhuvanesh', age: '24'}
    ]
  }

  changeHandler = () =>{
    this.setState({
      UserOutPutText: [
        {userName: 'Bhuvan', age: '24'}
      ]
    })
  }

 onChangeHandler = (event) => {
  this.setState({
    UserOutPutText: [
      {userName: event.target.value, age: '24'}
    ]
  })
 }

  render() {

    const buttonStyle = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '16px',
      margin: '10px',
      outline: '0',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <UserOutput 
        userName={this.state.UserOutPutText[0].userName} age={this.state.UserOutPutText[0].age} ></UserOutput>

      <button style={buttonStyle} onClick={this.changeHandler}>CLICK HERE</button>
      
      <UserInput changed={this.onChangeHandler}></UserInput>
      </div>

    );
  }
}

export default App;
