import styled from "styled-components";
import * as themeConf from "../../../../theme";

const CheckIcon: React.FC = () => {
  const Svg = styled.svg`
    fill: ${themeConf.textColor};
  `;

  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      className='bi bi-x'
      viewBox='0 0 16 16'
    >
      <path d='M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z' />
    </Svg>
  );
};

export default CheckIcon;
