import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// HTMLのroot id の要素に APP のDOM内容を反映する
ReactDom.render(<App />, document.getElementById("root"));
