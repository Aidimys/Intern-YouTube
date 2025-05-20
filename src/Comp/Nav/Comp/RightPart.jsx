import { FaTh, FaBell, FaVideo } from "react-icons/fa";
import emptyUser from "../../../images/emptyUser.png";
import "./RightPart.css";
const RightPart = () => {
  return (
    <div className='RightPart'>
      <button className='RghtBtn'>
        <FaVideo />
      </button>
      <button className='RghtBtn'>
        <FaTh />
      </button>
      <button className='RghtBtn'>
        <FaBell />
      </button>
      <button className='UserMenuBtn'>
        <img src={emptyUser} alt='user' className='userImg' />
      </button>
    </div>
  );
};
export default RightPart;
