import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const onClick = () => alert("hoge");
const App = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>HELLO</h1>
      <ColorfulMessage color="blue" message="元気ですか" />
      <ColorfulMessage color="green" message="はげ" />
      <ColorfulMessage color="red">はげてねえよ</ColorfulMessage>
      <button onClick={onClick}>button</button>
    </>
  );
};

export default App;
