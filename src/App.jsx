import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
import "./style.css";
const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい",
  ]);
  const [completeTodos, setCompleteTodos] = useState(["完了済み"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul></ul>
        {incompleteTodos.map((todo) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          );
        })}
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>戻る</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
