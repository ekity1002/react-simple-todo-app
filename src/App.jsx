import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("@@@@@@@@@@@@@@@@@@@@");
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchFaceShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // setstateの引数にはState変数の初期値を指定できる
  const [num, setNum] = useState(0); //Stateの変数名、Stateを変更する関数
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  useEffect(() => {
    console.log("num useEffect!!!!!");
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>HELLO</h1>
      <ColorfulMessage color="blue" message="元気ですか" />
      <ColorfulMessage color="green" message="はげ" />
      <ColorfulMessage color="red">はげてねえよ</ColorfulMessage>
      <button onClick={onClickCountUp}>button</button>
      <p>{num}</p>
      <button onClick={onClickSwitchFaceShowFlag}>on/off</button>
      {faceShowFlag && <p>(*^^*)</p>}
    </>
  );
};

export default App;
