# React Color Grid
- Show your lovely colors and copy them to the clipboard

![readme-image]

## Simple Example

```javascript
import React, { Component } from "react";
import { ColorGrid } from "react-color-grid";

class App extends Component {
  render() {
    const colors = {
      items: [
        {
          colorCode: "#1866e2",
          textColor: "white"
        },
        {
          colorCode: "#e23d17",
          textColor: "white"
        }
      ]
    }
    return (
      <div>
        <ColorGrid
          colors={colors}
        />
      </div>
    );
  }
}

export default App;

```


## PropTypes

| Props                   | Type                   | Default   | Description                                                                                         |
|-------------------------|------------------------|-----------|-----------------------------------------------------------------------------------------------------|
| colors                | object                 | none | object containing the property items which itself is an array of colors                   |
| colors.items                | array of objects                 | none | object containing  colorCode and textColor properties                   |




## Roadmap
- replace the tooltip library and toastify with css to increase performance.
- add tests
- improve documentation

## Inspiration
http://ux.mailchimp.com/patterns/color
https://hackernoon.com/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b

[readme-image]: ./img/react-color-grid.gif
