import "./container.css";
import ToDoInput from "./toDoInput/toDoInput";
import ToDoList from "./toDoList/toDoList";

const Container: React.FC = () => {
  return (
    <div className='container col-4'>
      <h1 className='toDoHeader'>TODO</h1>
      <ToDoInput />
      <ToDoList />
    </div>
  );
};

export default Container;
