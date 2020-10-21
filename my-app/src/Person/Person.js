import React from 'react'

const person = (props) => {
    return (
        <div>
            <h1>I'm a {props.name} and I'm {props.age} old</h1>
        </div>
    )
}

export default person