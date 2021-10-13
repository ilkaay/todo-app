import "./toDoList.css";
import ToDoListItem from "./toDoListItem/toDoListItem";
import React, { useContext, useState, useEffect } from "react";
import { TodosContext } from "../../../store/toDosContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListFooter from "./listFooter";

const ToDoList: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const [items, setItems] = useState(todosCtx.items);

  const [filterButton, setFilterButton] = useState("All");

  useEffect(() => {
    setItems(todosCtx.items);
  }, [todosCtx.items]);

  const handeOnDrag = (result: any) => {
    const items = todosCtx.items;
    if (items.length > 1) {
      const [renderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, renderedItem);
    }
    setItems(items);
    todosCtx.items = items;
  };

  const allFilterHandler = () => {
    setItems(todosCtx.items);
    setFilterButton("All");
  };

  const activeFilterHandler = () => {
    setItems(todosCtx.items.filter((item) => item.status === "active"));
    setFilterButton("Active");
  };

  const completedFilterHandler = () => {
    setItems(todosCtx.items.filter((item) => item.status === "completed"));
    setFilterButton("Completed");
  };

  const clearCompletedHandler = () => {
    const items = todosCtx.items.filter((item) => item.status === "completed");
    for (const item of items) {
      todosCtx.removeTodo(item.id);
    }
  };
  return (
    <DragDropContext onDragEnd={handeOnDrag}>
      <Droppable droppableId='items'>
        {(provided) => (
          <ul
            className='mt-5'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ToDoListItem
                      status={item.status}
                      id={item.id}
                      text={item.text}
                      onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                    />
                  </li>
                )}
              </Draggable>
            ))}
          </ul>
        )}
      </Droppable>
      <ListFooter
        filterButton={filterButton}
        allFilterHandler={allFilterHandler}
        activeFilterHandler={activeFilterHandler}
        completedFilterHandler={completedFilterHandler}
        clearCompletedHandler={clearCompletedHandler}
      />
    </DragDropContext>
  );
};
export default ToDoList;
