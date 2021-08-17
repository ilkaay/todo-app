import { useState } from "react";
import EmptyIcon from "./icons/emptyIcon";
import CheckIcon from "./icons/checkIcon";

const CheckControl: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  const icon = !toggle ? (
    <EmptyIcon toggle={toggleHandler} />
  ) : (
    <CheckIcon toggle={toggleHandler} />
  );
  return <span>{icon}</span>;
};

export default CheckControl;
