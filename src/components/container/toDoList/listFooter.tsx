import styled from "styled-components";
import * as themeConf from "../../../theme";

const ListFooter: React.FC<{
  allFilterHandler: any;
  activeFilterHandler: any;
  completedFilterHandler: any;
  clearCompletedHandler: any;
}> = (props) => {
  const Button = styled.button`
    color: ${themeConf.textColor};
  `;

  return (
    <div className='row'>
      <div className='col-3'>5 items left</div>
      <div className='col-6'>
        <div className='d-inline-block'>
          <Button onClick={props.allFilterHandler}>All</Button>
        </div>
        <div className=' d-inline-block'>
          <Button onClick={props.activeFilterHandler}>Active</Button>
        </div>
        <div className=' d-inline-block'>
          <Button onClick={props.completedFilterHandler}>Completed</Button>
        </div>
      </div>
      <div className='col-3'>
        <Button onClick={props.clearCompletedHandler}>Clear Completed</Button>
      </div>
    </div>
  );
};

export default ListFooter;
