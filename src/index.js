import React from "react";
import { render } from "react-dom";
import { ColorGrid } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <ColorGrid />
  </div>
);

render(<App />, document.getElementById("root"));
