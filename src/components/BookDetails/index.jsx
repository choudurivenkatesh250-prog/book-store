import Header from "../Header";
import "./index.css";

import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdOutlineFavoriteBorder, MdOutlineShuffle } from "react-icons/md";

import { useState, useEffect } from "react";
import { useParams } from "react-router";

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const url = "https://www.jsonkeeper.com/b/SQID2";
        const response = await fetch(url);
        const data = await response.json();

        const actualBook = data.filter(
          (eachobj) => eachobj.Id === Number(id)
        );

        setBookDetails(actualBook[0]);
      } catch (error) {
        console.log("Error fetching book:", error);
      }
    };

    getBookDetails();
  }, [id]);

  const { Title, coverImage, description, price } = bookDetails;

  return (
    <>
      <Header />

      <main className="bd-main-cont">
     
        <section className="bd-img-container">
          <img src={coverImage} alt={Title} />
        </section>

       
        <section className="bd-text-container">
          <h1>{Title}</h1>

          
          <div>
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaRegStarHalfStroke className="star" />
          </div>

          <p>{description}</p>

          <h2>${price}</h2>

          <div className="btn-container">
            <button className="add-to-cart-btn">Add to Cart</button>

            <span className="icons-cont">
              <span className="icons-bg">
                <MdOutlineFavoriteBorder className="icon" />
              </span>

              <span className="icons-bg">
                <MdOutlineShuffle className="icon" />
              </span>
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default BookDetails;