import dark from "../assets/images/bg-desktop-dark.jpg";
import light from "../assets/images/bg-desktop-light.jpg";
const Background: React.FC<{ themeMode: any }> = (props) => {
  return (
    <div>
      {props.themeMode === "dark" ? (
        <img className='background' src={dark} alt='background' />
      ) : (
        <img className='background' src={light} alt='background' />
      )}
    </div>
  );
};
export default Background;
