import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const onClick = () => alert("hoge");

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // setstateの引数にはState変数の初期値を指定できる
  const [num, setNum] = useState(0); //Stateの変数名、Stateを変更する関数

  return (
    <>
      <h1 style={{ color: "red" }}>HELLO</h1>
      <ColorfulMessage color="blue" message="元気ですか" />
      <ColorfulMessage color="green" message="はげ" />
      <ColorfulMessage color="red">はげてねえよ</ColorfulMessage>
      <button onClick={onClickCountUp}>button</button>
      <p>{num}</p>
    </>
  );
};

export default App;
