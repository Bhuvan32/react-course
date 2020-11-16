# Using RADIUM

## IMPORT

```javascript
import Radium from "radium";
```

## How to use

    - adding hover effect ifor button

```javascript
const styles = {
  backgroundColor: "white",
  border: "1px solid blue",
  padding: "16px",
  outline: "0",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "lightgreen",
  },
};

styles.backgroundColor = "red";
styles[":hover"] = {
  backgroundColor: "#e27272",
};
```
