import PropTypes from "prop-types";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ReactTooltip from 'react-tooltip';

const ColorGridComponent = props => {
  const { colors } = props;
  function copyToClipboard(text) {
    toast.success(`Copied ${text}`);
  }

  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnVisibilityChange
        draggable={false}
      />
      <ReactTooltip />
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
            data-tip={`Copy ${color.colorCode}`} 
          >
            {color.name && 
            color.name}
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
        colorCode: "#1866e2",
        textColor: "white"
      },
      {
        colorCode: "#e23d17",
        textColor: "white"
      }
    ]
  }
};

export default ColorGridComponent;
