import { FaRegEye } from "react-icons/fa6";
import { MdOutlineFavoriteBorder, MdOutlineShuffle } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import "./index.css";
import {Link} from "react-router"


const BookItem = (props) => {
  const {bookObj} = props
  const {coverImage,Title,description,price,rating,Author} =bookObj
  return (
    <li>
    <Link className="remove-underline">
    <article className="card">
      <img
        src={coverImage}
        className="book-img"
        alt="book_imgs"
      />
      <div className="card-text">
        <h1>{Title}</h1>
        <h3>{Author}</h3>
        <h3>$ {price}</h3>
        <div className="star-cont">
          <FaStar className="stars" />
          <FaStar className="stars" />
          <FaStar className="stars" />
          <FaStar className="stars" />
          <FaStarHalfAlt className="stars" />
        </div>
        <p className="card-para">{description}</p>
        <div className="button-icons-row">
          <button className="add-to-cart-btn">Add to Cart</button>
          <span className="icons-cont">
            <span className="icons-bg">
              <MdOutlineFavoriteBorder className="icon" />
            </span>
            <span className="icons-bg">
              <MdOutlineShuffle className="icon" />
            </span>
            <span className="icons-bg">
              <FaRegEye className="icon" />
            </span>
          </span>
        </div>
      </div>
    </article>
    </Link>
    </li>
  );
};

export default BookItem;