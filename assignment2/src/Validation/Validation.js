import React from 'react'

const Validation = (props) => {

    let validate = null;

    props.textLength <= 5 ? validate = "Too short!!" : validate = "Text long enough!!"
   
    return (
      <div> {validate}</div>
    )
}

export default Validation