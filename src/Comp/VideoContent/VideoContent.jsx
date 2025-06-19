import "./VideoContent.css";
import videoData from "../../Data/videos";
import OfferedCard from "./OfferedCard";
import author from "../../images/emptyUser.png";
import { FaShare, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import PlayingVid from "../../images/Previews/image14.jpg";
import { useEffect, useState } from "react";
import { FaBurn, FaFolder, FaHome, FaBuffer } from "react-icons/fa";

const VideoContent = (video, key) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const firstSectionVideos = videoData.slice(0, 6);
  return (
    <div className='VideoContent'>
      <div className='PlayerAndInf'>
        <img alt='vid' src={PlayingVid} className='Player' />
        <section className='VideoInteract'>
          <h1>Dude you get a telescope</h1>
          <div>
            <p className='MainVidInfo'>123k views</p>
            <div className='InteractionBtns'>
              <button className='InteractBtn'>
                <FaThumbsUp /> <p>245k</p>
              </button>
              <button className='InteractBtn'>
                <FaThumbsDown />
                <p>100k</p>
              </button>
              <button className='InteractBtn'>
                <FaShare />
                <p>Share</p>
              </button>
              <button className='InteractBtn'>···</button>
            </div>
          </div>
        </section>
        <hr />
        <section className='VideoDesription'>
          <div className='MobileDescMain'>
            <img src={author} alt='author' className='AuthorImg3' />
            <div className='DescrDiv'>
              <h2 className='AuthorName'>Food & Drink</h2>

              {isMobile ? (
                <p className='MobileSubCount'>245k Subscribed</p>
              ) : (
                <>
                  <p className='Followers'>Published 3 weeks ago</p>
                  <p className='Description'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry
                  </p>
                  <p className='Followers'>Show more</p>
                </>
              )}
            </div>
          </div>

          {isMobile ? (
            <span className='SubscribeMobile'>Subscribe</span>
          ) : (
            <button className='SubscribeBtn2'>Subscribe 245k</button>
          )}
        </section>
        {isMobile && <hr className='MobileHR' />}
      </div>
      <div className='Offered'>
        <div className='NextControl'>
          <h2>Next</h2>
          <div>
            <h3>AUTOPLAY</h3>
            <label class='switch'>
              <input type='checkbox' name='my-switch' id='my-switch' />
              <span class='slider round'></span>
            </label>
          </div>
        </div>

        <ul className='OfferedList'>
          {firstSectionVideos.map((video) => {
            return (
              <li>
                <OfferedCard key={video.id} {...video} />
              </li>
            );
          })}
        </ul>
      </div>
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
export default VideoContent;
