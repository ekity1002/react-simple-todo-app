import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>HELLO</h1>
      <p>元気ですか</p>
    </>
  );
};

// HTMLのroot id の要素に APP のDOM内容を反映する
ReactDom.render(<App />, document.getElementById("root"));
