import "./toDoListItem.css";
import styled from "styled-components";
import * as themeConf from "../../../../theme";
import { useState, useContext } from "react";
import { TodosContext } from "../../../../store/toDosContext";
import RemoveIcon from "./removeIcon";
import EmptyIcon from "./icons/emptyIcon";
import CheckIcon from "./icons/checkIcon";
const ToDoListItem: React.FC<{
  text: string;
  id: string;
  status: string;
  onRemoveTodo: () => void;
}> = (props) => {
  const ListItem = styled.div`
    padding: 0.8rem;
    background-color: ${themeConf.backgroundColor};
    color: ${themeConf.textColor};
    border-bottom: 1px solid rgb(108, 117, 125, 0.3);
    &:hover button {
      visibility: visible;
    }
  `;
  const todosCtx = useContext(TodosContext);
  const toggle = props.status === "active" ? true : false;
  const [status, setStatus] = useState(toggle);
  const statusHandler = () => {
    setStatus(!status);
    todosCtx.changeStatus(props.id);
  };
  const icon = status ? (
    <EmptyIcon statusHandler={statusHandler} />
  ) : (
    <CheckIcon statusHandler={statusHandler} />
  );

  return (
    <ListItem>
      <span>{icon}</span>
      <p className={status === false ? "text-decoration-line-through" : ""}>
        {props.text}
      </p>
      <button className='hide' onClick={props.onRemoveTodo}>
        <RemoveIcon />
      </button>
    </ListItem>
  );
};

export default ToDoListItem;
