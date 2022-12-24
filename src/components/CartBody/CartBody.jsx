import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import pictureProduct from "../../assets/img/image5.png";
import { USER_LOGIN } from "../../util/config";
import styles from "./CartBody.module.css";

export default function CartBody() {
  const dispatch = useDispatch();
  const { email } = JSON.parse(localStorage.getItem(USER_LOGIN));
  const { userCart } = useSelector((state) => state.userReducer);

  const updatedData = {
    orderDetail: [
      {
        productId: "1",
        quantity: 2,
      },
    ],
    email,
  };

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
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "50px",
                    }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button className={styles["btn-quantity"]}>+</button>
                  <span
                    className="quantity"
                    style={{
                      background: "#D9D9D9",
                      padding: "2px 30px",
                    }}
                  >
                    2
                  </span>
                  <button className={styles["btn-quantity"]}>-</button>
                </td>
                <td>{item.price * 2}</td>
                <td>
                  <button className={styles["btn-quantity"]}>Edit</button>
                  <button className={styles["btn-delete"]}>Delete</button>
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
