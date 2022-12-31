import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/sass/components/productFeature/cardItem.scss";

const CardItem = ({ item }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <img className="px-5 pt-4 w-100" src={item.image} alt="..." />
      <div
        className="heart-icon"
        onClick={() => {
          setLiked(!liked);
        }}
        style={{ cursor: "pointer" }}
      >
        <i
          className={liked ? "fa-solid fa-heart " : "fa-regular fa-heart "}
        ></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.shortDescription}</p>
      </div>
      <div className="d-flex text-center">
        <NavLink
          className="buy-btn w-50 text-dark py-3"
          to={`/detail/${item.id}`}
        >
          Buy now
        </NavLink>
        <div className="price w-50 py-3">{item.price}$</div>
      </div>
    </div>
  );
};

export default CardItem;
