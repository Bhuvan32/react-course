import React from 'react';
import './UserOutput.css'

const UserOutput = (props) =>{
    return (
        <div className="UserOutput">
            <p>User Name: {props.userName}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default UserOutput