import "./VideoContent.css";
import videoData from "../../Data/videos";
import OfferedCard from "./OfferedCard";
import author from "../../images/emptyUser.png";
import { FaShare, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import PLayingVid from "../../images/Previews/image14.jpg";
const VideoContent = (video, key) => {
  const firstSectionVideos = videoData.slice(0, 6);
  return (
    <div className='VideoContent'>
      <div className='PlayerAndInf'>
        <img alt='vid' src={PLayingVid} className='Player' />
        <section className='VideoInteract'>
          <h1>Dude you get a telescope</h1>
          <div>
            <p className='vidInfo2'>123k views</p>
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
          <div>
            <img src={author} alt='author' className='AuthorImg2' />
            <div className='DescrDiv'>
              <h2 className='AuthorName'>Food & Drink</h2>
              <p className='Followers'>Published 3 weeks ago</p>
              <p className='Description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p className='Followers'>Show more</p>
            </div>
          </div>
          <button className='SubscribeBtn'>Subscribe 245k</button>
        </section>
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
    </div>
  );
};
export default VideoContent;
