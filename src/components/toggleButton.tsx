import styled from "styled-components";
import darkIcon from "../assets/images/icon-sun.svg";
import lightIcon from "../assets/images/icon-moon.svg";
const ToggleButton: React.FC<{ themeToggle: () => void; themeMode: string }> = (
  props
) => {
  const Button = styled.button`
    position: absolute;
    top: 6%;
    right: 35%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 2;
  `;
  return (
    <Button onClick={props.themeToggle}>
      {props.themeMode === "dark" ? (
        <img src={darkIcon} alt='sun' />
      ) : (
        <img src={lightIcon} alt='moon' />
      )}
    </Button>
  );
};
export default ToggleButton;
