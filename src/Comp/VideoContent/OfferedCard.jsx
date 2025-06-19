import "./OfferedCard.css";
const OfferedCard = (props) => {
  return (
    <div className='OfferedCard'>
      <a href='/video' className='VideoLink'>
        <div className='imgDiv2'>
          <img src={props.preview} alt='video' className='OfferedPreview' />
          <div className='timeIcon2'>{props.duration}</div>
        </div>

        <h4 className='vidName3'>{props.name}</h4>
        <div className='shortInf3'>
          <p className='vidInfo3'>{props.views} views</p>
          <p className='vidInfo3'>{props.author}</p>
        </div>
      </a>
    </div>
  );
};
export default OfferedCard;
