import React from 'react'
import './Char.css';

const Char = (props) => {

    return (
    <p className="Char"onClick={props.clicked}>
       {props.text}
    </p>
    )
}

export default Char