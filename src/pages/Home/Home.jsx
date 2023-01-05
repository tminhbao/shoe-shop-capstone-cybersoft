import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carou from "../../components/Carousel/Carou";
import ProductFeature from "../../components/ProductFeature/ProductFeature";
import { getProductApi } from "../../redux/reducers/productReducer";

const Home = () => {
  const { product } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const getArrProductApi = async () => {
    dispatch(getProductApi());
  };

  useEffect(() => {
    getArrProductApi();
  }, []);
  return (
    <div>
      <Carou />
      <ProductFeature />
    </div>
  );
};

export default Home;
