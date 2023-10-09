import React, { useState, useEffect } from "react";
import "./style.css";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText]; //入力されているtextを incompeteTodoに追加した配列を作成
    console.log(newTodos);
    setIncompleteTodos(newTodos); //新しいtodoリストをstate関数に設定 -> 再レンダリングがかかる
    setTodoText("");
  };
  const onClickDelete = (index) => {
    alert(`index * ${index}`);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); //指定したindexの要素から、1つ削除する
    setIncompleteTodos(newTodos);
  };

  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい",
  ]);
  const [completeTodos, setCompleteTodos] = useState(["完了済み"]);

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul></ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
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
