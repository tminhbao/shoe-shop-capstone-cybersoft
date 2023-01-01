import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserLikedProductApi } from "../../redux/reducers/userReducer";

function FavoriteProduct() {
  const { userLikedProduct } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getUserLikedProductApi();
    dispatch(action);
  }, []);
  return (
    <table className="table">
      <thead
        style={{
          background: "#D9D9D9",
        }}
      >
        <tr>
          <th>id</th>
          <th>img</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {userLikedProduct?.map((itemProduct, index) => {
          return (
            <tr key={index}>
              <td>{itemProduct?.id}</td>
              <td>
                <img
                  src={itemProduct?.image}
                  alt=""
                  style={{ width: "50px" }}
                />
              </td>
              <td>{itemProduct?.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default FavoriteProduct;
