import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ReactTooltip from "react-tooltip";

var ColorGridComponent = function ColorGridComponent(props) {
  var colors = props.colors;

  function copyToClipboard(text) {
    toast.success("Copied ".concat(text));
  }

  return React.createElement("div", null, React.createElement(ToastContainer, {
    position: "bottom-left",
    autoClose: 1000,
    hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    pauseOnVisibilityChange: true,
    draggable: false
  }), React.createElement(ReactTooltip, null), colors.items.map(function (color, i) {
    return React.createElement("div", {
      key: i
    }, React.createElement(CopyToClipboard, {
      text: color.colorCode,
      onCopy: function onCopy() {
        return copyToClipboard(color.colorCode);
      }
    }, React.createElement("div", {
      style: {
        backgroundColor: color.colorCode,
        color: color.textColor,
        cursor: "pointer"
      },
      "data-tip": "Copy ".concat(color.colorCode)
    }, color.name && color.name, React.createElement("br", null), color.colorCode)));
  }));
};

ColorGridComponent.defaultProps = {};
export default ColorGridComponent;