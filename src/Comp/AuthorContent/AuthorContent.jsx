import "./AuthorContent.css";
import author from "../../images/emptyUser.png";
import backImg from "../../images/back.jpg";
import videoData from "../../Data/videos";
import Card from "../MainContent/Card";
import bigImg from "../../images/Previews/image1.jpg";
import { FaBell, FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import { FaBurn, FaFolder, FaHome, FaBuffer } from "react-icons/fa";
const AuthorContent = () => {
  const thirdSectionVideos = videoData.slice(9, 15);
  return (
    <div className='AuthorContent'>
      <img src={backImg} alt='back' className='backImg' />
      <section className='AuthorSection'>
        <div className='AutInfPose'>
          <img src={author} alt='author' className='AuthorImg2' />
          <div className='TxtPose'>
            <h2 className='AuthorName'>Food & Drink</h2>
            <p className='Followers'>245k subscribers</p>
          </div>
        </div>
        <div className='SubBtns'>
          <button className='RightBtn'>
            <FaBell />
          </button>
          <button className='SubscribeBtn'>Subscribe 245k</button>
        </div>
      </section>
      <section className='MainSection'>
        <div className='SectionChoose'>
          <nav>
            <ul className='Catigories'>
              <li id='active'>
                <a href='/AuthorHome' id='active'>
                  <h4>Home</h4>
                </a>
              </li>
              <li>
                <a href='/videos'>
                  <h4>Videos</h4>
                </a>
              </li>
              <li>
                <a href='/playlists'>
                  <h4>Playlists</h4>
                </a>
              </li>
              <li>
                <a href='/playlists'>
                  <h4>Channels</h4>
                </a>
              </li>
              <li>
                <a href='/playlists'>
                  <h4>Discussion</h4>
                </a>
              </li>
              <li>
                <a href='/playlists'>
                  <h4>About</h4>
                </a>
              </li>
              <li>
                <FaSearch />
              </li>
              <li>
                <button className='dropdown-toggle'>
                  <h4>▼</h4>
                </button>
              </li>
            </ul>
            <div>
              <div className='VideoDiv'>
                <div className='imgDiv'>
                  <img src={bigImg} alt='preview' className='bigImg' />
                  <div className='timeIcon'>7:36</div>
                </div>
                <div className='DescriptionDiv'>
                  <h3>Some text of video name</h3>
                  <p className='Description'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div className='shortInf2'>
                    <p className='vidInfo2'>11k views</p>
                    <p className='vidInfo2'>·</p>
                    <p className='vidInfo2'>6 month ago</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className='RecChan'>
          <p>Recommended channels</p>
          <ul className='RecChanList'>
            <li>
              <a href='youtuber'>
                <img src={author} alt='author' className='AuthorImg2' />
                <h4>Youtuber1</h4>
              </a>
            </li>
            <li>
              <a href='youtuber'>
                <img src={author} alt='author' className='AuthorImg2' />
                <h4>Youtuber1</h4>
              </a>
            </li>
            <li>
              <a href='youtuber'>
                <img src={author} alt='author' className='AuthorImg2' />
                <h4>Youtuber1</h4>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className='SectionInfo'>
          <h3>Food & Drink videos</h3>
          <div className='CtrlBtns'>
            <button className='arrow'>
              <FaAngleLeft />
            </button>
            <button className='arrow'>
              <FaAngleRight />
            </button>
          </div>
        </div>

        <ul className='AuthorList'>
          {thirdSectionVideos.map((video) => {
            return (
              <li>
                <Card key={video.id} {...video} />
              </li>
            );
          })}
        </ul>
      </section>
      <div className='BottomMenu'>
        <a href='#home'>
          <FaHome />
          Home
        </a>
        <a href='#trending'>
          <FaBurn />
          Trending
        </a>
        <a href='#subscriptions'>
          <FaBuffer />
          Subs
        </a>
        <a href='#library'>
          <FaFolder />
          Library
        </a>
      </div>
    </div>
  );
};
export default AuthorContent;
