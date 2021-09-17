import React, { useState } from "react";

import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  changeStatus: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
  changeStatus: () => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    var newTodo = new Todo(todoText, "active");
    setTodos((prevTodos): Todo[] => {
      return [...prevTodos, newTodo];
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const changeStatusHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      let selectedItemIndex = prevTodos.findIndex((todo) => todo.id === todoId);

      prevTodos[selectedItemIndex].status =
        prevTodos[selectedItemIndex].toggleStatus();

      return prevTodos;
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    changeStatus: changeStatusHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
