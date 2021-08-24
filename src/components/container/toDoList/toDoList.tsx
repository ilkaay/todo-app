import "./toDoList.css";
import ToDoListItem from "./toDoListItem/toDoListItem";
import React, { useContext } from "react";
import { TodosContext } from "../../../store/toDosContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ToDoList: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const handeOnDrag = (result: any) => {
    const items = Array.from(todosCtx.items);
    if (items.length > 1) {
      const [renderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, renderedItem);
    }
    todosCtx.items = items;
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
            {todosCtx.items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ToDoListItem
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
    </DragDropContext>
  );
};
export default ToDoList;
