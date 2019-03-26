import React from "react";
import PropTypes from "prop-types";
import "./ColorGrid.css";
const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object)
};

const defaultProps = {
  colors: {
    items: [
      {
        name: "Red Color",
        colorCode: "red",
        textColor: "white"
      },
      {
        name: "Blue Color",
        colorCode: "blue",
        textColor: "white"
      }
    ]
  }
};

const ColorGridComponent = props => {
  const { colors } = props;
  return (
    <div className={"grid-container"}>
      {colors.items.map((color, i) => (
        <div
          style={{
            backgroundColor: color.colorCode,
            color: color.textColor
          }}
        >
          {color.name}
          {<br />}
          {color.colorCode}
        </div>
      ))}
    </div>
  );
};

ColorGridComponent.propTypes = propTypes;
ColorGridComponent.defaultProps = defaultProps;

export default ColorGridComponent;
