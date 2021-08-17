import "./footer.css";
import * as themeConf from "../../theme";
import styled from "styled-components";
const Footer: React.FC = () => {
  const Footer = styled.div`
    background-color: ${themeConf.backgroundColor};
  `;

  const context = (
    <div className='footer'>
      <span>Challenge by</span>
      <a
        rel='noreferrer'
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
      >
        {" "}
        Frontend Mentor
      </a>
      <span>. Coded by</span>
      <a
        rel='noreferrer'
        href='https://www.linkedin.com/in/ilkaayyuksel/'
        target='_blank'
      >
        {" "}
        ilkay
      </a>
      .
    </div>
  );
  return <Footer>{context}</Footer>;
};
export default Footer;
