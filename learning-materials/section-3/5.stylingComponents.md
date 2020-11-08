# ADD THE SYLES TO THE COMMPONENT

- create folder in Person component. Important note: this Person.css not scoped only Person compnent, It's a global css


## PERSON.CSS

```css

.Person {
    width: 60%;
    height: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    margin: 20px auto;
}

```

## IMPORT

```javascript

import './Person.css'

```

## PERSON.JS

```javascript

const person = (props) => {
    return (
        <div className="Person">
            <h1 onClick={props.click}>I'm a {props.name} and I'm {props.age} old </h1>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
}

```





