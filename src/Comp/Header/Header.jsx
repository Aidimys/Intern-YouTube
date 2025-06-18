import CentPart from "./Comp/CentPart";
import LeftPart from "./Comp/LeftPart";
import RightPart from "./Comp/RightPart";
import "./Header.css";
const Header = () => {
  return (
    <header className='Header'>
      <LeftPart />
      <CentPart />
      <RightPart />
    </header>
  );
};

export default Header;
