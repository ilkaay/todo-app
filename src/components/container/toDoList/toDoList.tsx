import "./toDoList.css";
import ToDoListItem from "./toDoListItem/toDoListItem";
import React, { useContext } from "react";
import { TodosContext } from "../../../store/toDosContext";

const ToDoList: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className='mt-5'>
      {todosCtx.items.map((item) => (
        <ToDoListItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default ToDoList;
