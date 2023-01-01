import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../assets/sass/components/productFeature/cardItem.scss";
import { http } from "../../util/config";

const CardItem = ({ item }) => {
  const { userLogin } = useSelector((state) => state.userReducer);
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const handleLike = (idProduct) => {
    axios({
      url: `https://shop.cyberlearn.vn/api/Users/like?productId=${idProduct}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${userLogin.accessToken}`,
      },
    })
      .then((res) => {
        console.log(res.data.content);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="card">
      <img className="px-5 pt-4 w-100" src={item.image} alt="..." />
      <div
        className="heart-icon"
        onClick={() => {
          setLiked(!liked);
          handleLike(item.id);
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
