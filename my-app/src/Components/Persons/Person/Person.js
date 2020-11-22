import React from 'react'
import personClasses from'./Person.css'

const person = (props) => {
   
    return (
        <div className={personClasses.Person} >
            <h1 onClick={props.click}>I'm a {props.name} and I'm {props.age} old </h1>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

export default person