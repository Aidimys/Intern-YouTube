import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from "./Card";
import "./MainContent.css";
import videoData from "../../Data/videos";
import author from "../../images/emptyUser.png";

const MainContent = (video, key) => {
  const firstSectionVideos = videoData.slice(0, 6);
  const secondSectionVideos = videoData.slice(6, 9);
  const thirdSectionVideos = videoData.slice(9, 15);
  return (
    <div className='MainContent'>
      <section>
        <div className='SectionInfo'>
          <div className='SectionText'>
            <img src={author} alt='author' className='AuthorImg' />
            <h2>Dollie Blair</h2>
          </div>
          <div className='CtrlBtns'>
            <button className='arrow'>
              <FaAngleLeft />
            </button>
            <button className='arrow'>
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className='wrapper'>
          <ul className='ContentList'>
            {firstSectionVideos.map((video) => {
              return (
                <li>
                  <Card key={video.id} {...video} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section>
        <div className='SectionInfo'>
          <h2 className='SectionText'>Recommended</h2>
          <div className='CtrlBtns'>
            <button className='arrow'>
              <FaAngleLeft />
            </button>
            <button className='arrow'>
              <FaAngleRight />
            </button>
          </div>
        </div>
        <ul className='ContentList'>
          {secondSectionVideos.map((video) => {
            return (
              <li>
                <Card key={video.id} {...video} />
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <div className='SectionInfo'>
          <div className='SectionText'>
            <img src={author} alt='author' className='AuthorImg' />
            <h2>Food & Drink</h2>
            <p className='RecommendedText'>Recommended channel for you</p>
          </div>

          <div className='CtrlBtns'>
            <button className='SubscribeBtn'>Subscribe 2.3m</button>
            <button className='arrow'>
              <FaAngleLeft />
            </button>
            <button className='arrow'>
              <FaAngleRight />
            </button>
          </div>
        </div>

        <ul className='ContentList'>
          {thirdSectionVideos.map((video) => {
            return (
              <li>
                <Card key={video.id} {...video} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default MainContent;
