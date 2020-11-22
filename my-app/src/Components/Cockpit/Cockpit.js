import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClasses = ''

    if(props.showPersons) {
        btnClasses = classes.Red
    }

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red)
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.normal)
    }

    return (
       <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(' ')}>This is working!!!</h1>
            <button className={btnClasses} onClick={props.clicked}>Toggle Persons</button>
       </div>
    )
}

export default cockpit;