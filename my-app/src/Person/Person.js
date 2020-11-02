import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <h1 onClick={props.click}>I'm a {props.name} and I'm {props.age} old </h1>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

export default person