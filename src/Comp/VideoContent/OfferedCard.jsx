import "./OfferedCard.css";
const OfferedCard = (props) => {
  return (
    <div className='OfferedCard'>
      <a href='/video' className='VideoLink'>
        <div className='imgDiv'>
          <img src={props.preview} alt='video' className='OfferedPreview' />
          <div className='timeIcon2'>{props.duration}</div>
        </div>

        <h4 className='vidName'>{props.name}</h4>
        <div className='shortInf2'>
          <p className='vidInfo2'>{props.views} views</p>
          <p className='vidInfo2'>{props.author}</p>
        </div>
      </a>
    </div>
  );
};
export default OfferedCard;
