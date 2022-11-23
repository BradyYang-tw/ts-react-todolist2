import React, { useState } from "react";
import TodoList from "./components/TodoList";
import uuid from "react-uuid";
import "./App.css";

export type listType = {
  id: string;
  key?: string;
  title: string;
  isMarked: boolean;
  finish: Date;
  onDelete?: () => void;
  onMark?: () => void;
};
const App = () => {
  const [list, setList] = useState<listType[]>([]);
  const [currentData, setCurrentData] = useState<string>("");

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("click");

    let newData: listType = {
      id: uuid(),
      title: currentData,
      isMarked: false,
      finish: new Date(),
    };
    setList((prev: listType[]) => {
      return [...prev, newData];
    });
    setCurrentData("");
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setCurrentData(event.currentTarget.value);
  };

  const handleCheck = () => {
    console.log("checked");
  };

  const handleDelete = (id: string) => {
    console.log("delete", id);
    setList((prev: listType[]) => prev.filter((data) => data.id != id));
  };

  const handleMark = (id: string) => {
    console.log("Mark", id);
    setList((prev: listType[]) =>
      prev.map((data) =>
        data.id == id
          ? { ...data, isMarked: !data.isMarked, finish: new Date() }
          : data
      )
    );
  };

  //Note: Data
  const data = list.map((item) => {
    return (
      <TodoList
        id={item.id}
        key={item.id}
        title={item.title}
        isMarked={item.isMarked}
        finish={item.finish}
        onDelete={() => {
          handleDelete(item.id);
        }}
        onMark={() => {
          handleMark(item.id);
        }}
      ></TodoList>
    );
  });

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <h3>A Simple todolist built react hooks & context </h3>
      <div className="input-field">
        <input
          data-testid="test-app-input"
          className="App-input"
          type="text"
          placeholder="Add your text here..."
          onChange={handleChange}
          value={currentData}
        />
        <button className="App-button" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="summary">
        <p>{`${list.length != 0 ? list.length : 0} item(s)`}</p>
        <div>
          <input type="checkbox" id="check" onChange={handleCheck} />
          <label htmlFor="check">Show Done Items</label>
        </div>
      </div>
      {data}
      {/* {{list.length != 0 && data}} */}
    </div>
  );
};

export default App;
