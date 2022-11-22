import React from "react";
import "./TodoList.css";
import styled, { css } from "styled-components";
// import styled from "styled-components";
import { listType } from "../App";

const Button = styled.button``;
const ButtonSet = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ToDoList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0px 200px;
`;

const ListP = styled.p<{ isMarked: boolean }>`
  width: 60%;
  ${(props) =>
    props.isMarked &&
    css`
      text-decoration-line: line-through;
    `};
`;

const TodoList: React.FC<listType> = (props) => {
  // const buttonSet = (
  //   <div className="button-set">
  //     <button onClick={props.onMark}>Mark as Done</button>
  //     <button onClick={props.onDelete}>Delete</button>
  //   </div>
  // );
  const buttonSet = (
    <ButtonSet>
      <Button onClick={props.onMark}>Mark as Done</Button>
      <Button onClick={props.onDelete}>Delete</Button>
    </ButtonSet>
  );
  return (
    <ToDoList>
      <p className="list-p" style={props.isMarked ? { width: "20%" } : {}}></p>
      <ListP isMarked={props.isMarked}>{props.title}</ListP>
      <div className="t">
        {props.isMarked ? `完成時間 ${props.finish.toTimeString()}` : buttonSet}
      </div>
    </ToDoList>
  );
};

export default TodoList;
