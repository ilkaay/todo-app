import styled from "styled-components";
import * as themeConf from "../../../theme";
import React, { useContext } from "react";
import { TodosContext } from "../../../store/toDosContext";

const Button = styled.button`
  color: ${themeConf.textColor};
`;

const ListFooter: React.FC<{
  allFilterHandler: any;
  activeFilterHandler: any;
  completedFilterHandler: any;
  clearCompletedHandler: any;
  filterButton: string;
}> = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <div className='row'>
      <div className='col-3'>{todosCtx.items.length} items left</div>
      <div className='col-6'>
        <div className='d-inline-block'>
          <Button
            onClick={props.allFilterHandler}
            className={props.filterButton === "All" ? "text-primary" : ""}
          >
            All
          </Button>
        </div>
        <div className=' d-inline-block'>
          <Button
            className={props.filterButton === "Active" ? "text-primary" : ""}
            onClick={props.activeFilterHandler}
          >
            Active
          </Button>
        </div>
        <div className=' d-inline-block'>
          <Button
            className={
              props.filterButton === "Completed" ? "text-primary " : ""
            }
            onClick={props.completedFilterHandler}
          >
            Completed
          </Button>
        </div>
      </div>
      <div className='col-3'>
        <Button onClick={props.clearCompletedHandler}>Clear Completed</Button>
      </div>
    </div>
  );
};

export default ListFooter;
