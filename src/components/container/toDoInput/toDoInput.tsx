import "./toDoInput.css";
import * as themeConf from "../../../theme";
import styled from "styled-components";
import { useRef, useContext } from "react";
import { TodosContext } from "../../../store/toDosContext";

const ToDoInput: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  const Input = styled.input`
    text-indent: 3rem;
    color: ${themeConf.textColor};
    background-color: ${themeConf.backgroundColor};
  `;

  const Svg = styled.svg`
    fill: ${themeConf.textColor};
  `;

  return (
    <div className='inputContainer'>
      <form onSubmit={submitHandler}>
        <Input
          className='border rounded w-100 p-3'
          type='text'
          ref={todoTextInputRef}
        />
      </form>
      <Svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        className='bi bi-circle inputImg'
        viewBox='0 0 16 16'
      >
        <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
      </Svg>
    </div>
  );
};

export default ToDoInput;
