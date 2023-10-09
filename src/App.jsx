import React, { useState, useEffect } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./style.css";

const App = () => {
  console.log("Apppppppppppppppp");
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
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); //指定したindexの要素から、1つ削除する
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい",
  ]);
  const [completeTodos, setCompleteTodos] = useState(["完了済み"]);

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      ></InputTodo>
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTOODは5個まで!!!!!! 消化しろ</p>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

export default App;
