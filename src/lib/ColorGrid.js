import PropTypes from "prop-types";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorGridComponent = props => {
  const { colors } = props;
  const [copySuccess, setCopySuccess] = useState("");
  function copyToClipboard(text) {
    setCopySuccess(`Copied ${text}!`);
  }
  return (
    <div>
      {document.queryCommandSupported("copy") && <div>{copySuccess}</div>}
      {colors.items.map((color, i) => (
        <CopyToClipboard
          text={color.colorCode}
          onCopy={() => copyToClipboard(color.colorCode)}
        >
          <div
            key={i}
            style={{
              backgroundColor: color.colorCode,
              color: color.textColor,
              cursor: "pointer"
            }}
          >
            {color.name}
            {<br />}
            {color.colorCode}
          </div>
        </CopyToClipboard>
      ))}
    </div>
  );
};

ColorGridComponent.propTypes = {
  colors: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        colorCode: PropTypes.string,
        textColor: PropTypes.string
      })
    )
  })
};
ColorGridComponent.defaultProps = {
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

export default ColorGridComponent;
