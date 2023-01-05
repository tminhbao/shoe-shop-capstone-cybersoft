import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "../../assets/sass/components/productFeature/productFeature.scss";
import {
  getProductApi,
  getProductDetailPagingApi,
} from "../../redux/reducers/productReducer";
import CardItem from "../CardItem/CardItem";
import { ITEM_PER_PAGE } from "../../util/config";
import { NavLink } from "react-router-dom";

const ProductFeature = () => {
  const { productPaging } = useSelector((state) => state.productReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const totalPage = Number(Math.ceil(productPaging?.length / ITEM_PER_PAGE));

  const getArrProductApi = async () => {
    dispatch(getProductApi());
  };

  useEffect(() => {
    //getArrProductApi();
    const action = getProductDetailPagingApi(1, ITEM_PER_PAGE);
    dispatch(action);
  }, []);

  const handleClick = (e) => {
    // do nothing
    //e.target.classList.add("active");
  };

  return (
    <div className="productFeature py-5">
      <h2 className="title ps-5 py-2 text-light">Product Feature</h2>
      <div className="container pt-5">
        <div className="row g-5">
          {productPaging?.map((item, i) => {
            return (
              <div className="col col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                <CardItem item={item} />
              </div>
            );
          })}
          <div class="center">
            <div class="pagination">
              <NavLink>
                <span>&laquo;</span>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  const action = getProductDetailPagingApi(1, ITEM_PER_PAGE);
                  dispatch(action);
                  handleClick(e);
                }}
              >
                <span className="paging">1</span>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  const action = getProductDetailPagingApi(2, ITEM_PER_PAGE);
                  dispatch(action);
                  handleClick(e);
                }}
              >
                <span className="paging">2</span>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  const action = getProductDetailPagingApi(3, ITEM_PER_PAGE);
                  dispatch(action);
                  handleClick(e);
                }}
              >
                <span className="paging">3</span>
              </NavLink>
              <NavLink>
                <span>&raquo;</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
