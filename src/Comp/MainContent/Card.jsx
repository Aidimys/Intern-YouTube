import "./Card.css";

const Card = (props) => {
  return (
    <div className='Card'>
      <img
        src={props.preview}
        alt='video'
        className={props.isBig ? "bigPreview" : "preview"}
      />
      <h4 className='vidName'>{props.name}</h4>
      <div className='infBlock'>
        <div className='shortInf'>
          <p className='vidInfo'>{props.views} views</p>
          <p className='vidInfo'>{props.date}</p>
        </div>

        <p className='vidInfo'>{props.author}</p>
      </div>
    </div>
  );
};
export default Card;
