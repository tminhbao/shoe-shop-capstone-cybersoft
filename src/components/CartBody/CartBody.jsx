import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pictureProduct from "../../assets/img/image5.png";
import {
  deleteProductCart,
  updateCart,
} from "../../redux/reducers/userReducer";
import { USER_LOGIN } from "../../util/config";
import styles from "./CartBody.module.css";

export default function CartBody() {
  const dispatch = useDispatch();
  const { userCart } = useSelector((state) => state.userReducer);
  return (
    <>
      <table className="table">
        <thead
          style={{
            background: "#D9D9D9",
          }}
        >
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {userCart.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.product.id}</td>
                <td>
                  <img
                    src={item.product.image}
                    alt=""
                    style={{
                      width: "50px",
                    }}
                  />
                </td>
                <td>{item.product.name}</td>
                <td>{item.product.price}</td>
                <td>
                  <button
                    className={styles["btn-quantity"]}
                    onClick={() => {
                      const action = updateCart({
                        id: item.id,
                        value: 1,
                      });
                      dispatch(action);
                    }}
                  >
                    +
                  </button>
                  <span
                    className="quantity"
                    style={{
                      background: "#D9D9D9",
                      padding: "2px 30px",
                    }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    className={styles["btn-quantity"]}
                    onClick={() => {
                      const action = updateCart({
                        id: item.id,
                        value: -1,
                      });
                      dispatch(action);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{item.product.price * item.quantity}</td>
                <td>
                  <button className={styles["btn-quantity"]}>Edit</button>
                  <button
                    className={styles["btn-delete"]}
                    onClick={() => {
                      const action = deleteProductCart({
                        id: item.id,
                      });
                      dispatch(action);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className={styles["btn-submit-order"]}>Submit Order</button>
    </>
  );
}
