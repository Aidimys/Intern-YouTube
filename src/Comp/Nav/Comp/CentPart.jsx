import { FaSearch } from "react-icons/fa";
import "./CentPart.css";
const CentPart = () => {
  return (
    <div className='CentPart'>
      <form>
        <input className='SearchInp' placeholder='Search' />
        <button className='SearchBtn'>
          <FaSearch />
        </button>
      </form>
    </div>
  );
};
export default CentPart;
