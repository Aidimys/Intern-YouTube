import { FaTh, FaBell, FaVideo, FaGripVertical } from "react-icons/fa";
import emptyUser from "../../../images/emptyUser.png";
import "./RightPart.css";
const RightPart = () => {
  return (
    <div className='RightPart'>
      <button className='RightBtn'>
        <FaVideo />
      </button>
      <button className='RightBtn'>
        <FaTh />
      </button>
      <button className='RightBtn'>
        <FaBell />
      </button>
      <button className='UserMenuBtn'>
        <img src={emptyUser} alt='user' className='userImg' />
        <p className='OpenBtn'>
          <FaGripVertical />
        </p>
      </button>
    </div>
  );
};
export default RightPart;
