# Media Query usng 'RADIUM'

## import

```javascript
import Radium, { StyleRoot } from "radium";
```

## How to use

- wrap the entire element into the <StyleRoot> tag

```javascript
<StyleRoot>
  <div className="App">
    <h1 className={classes.join(" ")}>This is working!!!</h1>
    <button style={styles} onClick={this.toggleHandler}>
      Toggle Persons
    </button>

    {persons}
  </div>
</StyleRoot>
```

## Media Query

```javascript
const style = {
  "@media (min-width: 500px)": {
    width: "450px",
  },
};
```
