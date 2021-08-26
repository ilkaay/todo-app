import { useState } from "react";
import EmptyIcon from "./icons/emptyIcon";
import CheckIcon from "./icons/checkIcon";
import React, { useContext } from "react";
import { TodosContext } from "../../../../../store/toDosContext";

const CheckControl: React.FC<{ id: string; status: string }> = (props) => {
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
  return <span>{icon}</span>;
};

export default CheckControl;
