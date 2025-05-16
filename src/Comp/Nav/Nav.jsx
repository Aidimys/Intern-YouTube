import CentPart from "./Comp/CentPart";
import LeftPart from "./Comp/LeftPart";
import RightPart from "./Comp/RightPart";
import "./Nav.css";
const Nav = () => {
  return (
    <div className='Nav'>
      <LeftPart />
      <CentPart />
      <RightPart />
    </div>
  );
};

export default Nav;
