import React from 'react'
import './Person.css'
import Radium from 'radium'

const person = (props) => {
    const style ={
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <h1 onClick={props.click}>I'm a {props.name} and I'm {props.age} old </h1>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

export default Radium(person)