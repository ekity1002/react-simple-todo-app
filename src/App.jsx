import React from "react";

const onClick = () => alert("hoge");
const contentStyle = {
  color: "blue",
  fontSize: "18px",
};
const App = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>HELLO</h1>
      <p style={contentStyle}>元気ですか</p>
      <button onClick={onClick}>button</button>
    </>
  );
};

export default App;
