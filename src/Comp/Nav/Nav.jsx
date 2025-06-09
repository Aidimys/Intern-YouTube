import CentPart from './Comp/CentPart';
import LeftPart from './Comp/LeftPart';
import RightPart from './Comp/RightPart';
import './Nav.css';
const Nav = () => {
  return (
    <header className="Nav">
      <LeftPart />
      <CentPart />
      <RightPart />
    </header>
  );
};

export default Nav;
