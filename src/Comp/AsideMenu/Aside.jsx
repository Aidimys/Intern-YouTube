import {
  FaAngleDown,
  FaBurn,
  FaFolder,
  FaHome,
  FaItunesNote,
  FaIndent,
  FaRegClock,
  FaRegStar,
  FaRegThumbsUp,
  FaBuffer,
  FaGamepad,
  FaEmpire,
} from "react-icons/fa";
import "./Aside.css";
import userImg from "../../images/emptyUser.png";
const Aside = () => {
  return (
    <aside className='LeftMenu'>
      <ul>
        <li>
          <a href='#1' id='Active'>
            <FaHome className='LeftMenuIcon' />
            Home
          </a>
        </li>
        <li>
          <a href='#1'>
            <FaBurn className='LeftMenuIcon' />
            Trending
          </a>
        </li>
        <li>
          <a href='#1'>
            <FaBuffer className='LeftMenuIcon' />
            Subsriptions
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href='#1'>
            <FaFolder className='LeftMenuIcon' />
            Library
          </a>
        </li>
        <li>
          <a href='#1'>
            <FaIndent className='LeftMenuIcon' />
            History
          </a>
        </li>
        <li>
          <a href='#1'>
            <FaRegClock className='LeftMenuIcon' />
            Watch Later
          </a>
        </li>
        <li>
          <a href='#1'>
            <FaRegStar className='LeftMenuIcon' />
            Favourites
          </a>
        </li>
        <li>
          <a href='#1'>
            <FaRegThumbsUp className='LeftMenuIcon' />
            Liked
          </a>
        </li>
        <li>
          <a href='#1'>
            <FaItunesNote className='LeftMenuIcon' />
            Music
          </a>
        </li>
        <li>
          <a href='#1'>
            <FaGamepad className='LeftMenuIcon' />
            Games
          </a>
        </li>
        <li>
          <a href='#1'>
            <FaAngleDown className='LeftMenuIcon' />
            Show More
          </a>
        </li>
      </ul>
      <h2>Subsciptions</h2>
      <ul>
        <li>
          <a href='#1'>
            <img src={userImg} alt='userPhoto' />
            Youtuber1
          </a>
        </li>
        <li>
          <a href='#1'>
            <img src={userImg} alt='userPhoto' />
            Youtuber2
          </a>
        </li>
        <li>
          <a href='#1'>
            <img src={userImg} alt='userPhoto' />
            Youtuber3
          </a>
        </li>
        <li>
          <a href='#1'>
            <img src={userImg} alt='userPhoto' />
            Youtuber4
          </a>
        </li>
        <li>
          <a href='#1'>
            <img src={userImg} alt='userPhoto' />
            Youtuber5
          </a>
        </li>
        <li>
          <a href='#1'>
            <img src={userImg} alt='userPhoto' />
            Youtuber6
          </a>
        </li>
      </ul>
      <a href='#1' className='SettingsBtn'>
        <FaEmpire className='LeftMenuIcon' />
        Settings
      </a>
    </aside>
  );
};

export default Aside;
