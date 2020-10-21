# UNDERSTANDING JSX:

return (
    <div className="App">
      h1 - This is working!!
    </div>

  );

return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hello World!'))


# JSX restrictions:
    1. JSX syntax have must one root element
    2. class= className

