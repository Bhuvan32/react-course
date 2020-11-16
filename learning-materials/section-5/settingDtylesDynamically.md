# Add classes dynamically

```javascript
const classes = [];

if (this.state.persons.length <= 2) {
  classes.push("red");
}
if (this.state.persons.length <= 1) {
  classes.push("normal");
}

<h1 className={classes.join(" ")}>This is working!!!</h1>;
```
