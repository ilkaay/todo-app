import { useTheme } from "./themeManager";
import styled, { ThemeProvider } from "styled-components";
import AppFooter from "./footer/footer";
import * as themeConf from "../theme";
import dark from "../assets/images/bg-desktop-dark.jpg";
import light from "../assets/images/bg-desktop-light.jpg";
import Container from "./container/container";
import darkIcon from "../assets/images/icon-sun.svg";
import lightIcon from "../assets/images/icon-moon.svg";
import TodosContextProvider from "../store/toDosContext";

const Button = styled.button`
  position: absolute;
  top: 6%;
  right: 35%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;
`;

const WrapperElement = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  z-index: -1;
  min-height: 100vh;
`;
const Wrapper: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <TodosContextProvider>
        <WrapperElement>
          <Container />
          <Button
            onClick={() => {
              theme.toggle();
            }}
          >
            {theme.mode === "dark" ? (
              <img src={darkIcon} alt='sun' />
            ) : (
              <img src={lightIcon} alt='moon' />
            )}
          </Button>
          <div>
            {theme.mode === "dark" ? (
              <img className='background' src={dark} alt='background' />
            ) : (
              <img className='background' src={light} alt='background' />
            )}
          </div>
          <AppFooter />
        </WrapperElement>
      </TodosContextProvider>
    </ThemeProvider>
  );
};

export default Wrapper;
