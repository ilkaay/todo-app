import "./toDoListItem.css";
import styled from "styled-components";
import * as themeConf from "../../../../theme";
import RemoveIcon from "./removeIcon";
import CheckControl from "./checkControl/checkControl";

const ToDoListItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  const ListItem = styled.div`
    padding: 0.8rem;
    background-color: ${themeConf.backgroundColor};
    color: ${themeConf.textColor};
    border-bottom: 1px solid rgb(108, 117, 125, 0.3);
    &:hover button {
      visibility: visible;
    }
  `;

  return (
    <ListItem>
      <CheckControl />
      <p>{props.text}</p>
      <button className='hide' onClick={props.onRemoveTodo}>
        <RemoveIcon />
      </button>
    </ListItem>
  );
};

export default ToDoListItem;
