import { useTheme } from "./themeManager";
import styled, { ThemeProvider } from "styled-components";
import * as themeConf from "../theme";
import Background from "./background";
import ToggleButton from "./toggleButton";
import TodoApp from "./container/container";
import TodosContextProvider from "../store/toDosContext";

const WrapperElement = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  min-height: 100vh;
`;
const Wrapper: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <TodosContextProvider>
        <WrapperElement>
          <TodoApp />
          <ToggleButton themeToggle={theme.toggle} themeMode={theme.mode} />
          <Background themeMode={theme.mode}></Background>
        </WrapperElement>
      </TodosContextProvider>
    </ThemeProvider>
  );
};

export default Wrapper;
