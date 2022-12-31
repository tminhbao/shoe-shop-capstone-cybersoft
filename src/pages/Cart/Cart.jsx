import React from "react";
import { useSelector } from "react-redux";
import { history } from "../../index";
import CartBody from "../../components/CartBody/CartBody";
import styles from "./Cart.module.css";

export default function Cart() {
  const { userLogin } = useSelector((state) => state.userReducer);
  if (!userLogin) history.push("/login");
  return (
    <div className="container">
      <div className="row">
        <p className={styles["cart-title"]}>Carts</p>
      </div>
      <div className="row">
        <CartBody />
      </div>
    </div>
  );
}
