import { FaBars } from "react-icons/fa";
import logo from "../../../images/logo.png";
import "./LeftPart.css";
<link rel='preconnect' href='https://fonts.googleapis.com'></link>;
const LeftPart = () => {
  return (
    <div className='LeftPart'>
      <button className='burger'>
        <FaBars />
      </button>
      <a href='#main' className='Logo'>
        <img src={logo} alt='logo' className='logoImg' />
        <p>
          <b>YouTube</b>
        </p>
      </a>
    </div>
  );
};
export default LeftPart;
