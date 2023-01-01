import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderHistoryApi } from "../../redux/reducers/userReducer";

export default function OrderHistory() {
  const { userOrderHistory } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const actionSync = getUserOrderHistoryApi();
    dispatch(actionSync);
  }, []);
  return (
    <div>
      {userOrderHistory?.map((item, index) => {
        return (
          <>
            <p>Order have been placed on: {item.date}</p>
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
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
                </tr>
              </thead>
              <tbody>
                {item.orderDetail?.map((itemProduct, index) => {
                  return (
                    <tr key={index}>
                      <td>{item?.id}</td>
                      <td>
                        <img
                          src={itemProduct?.image}
                          alt=""
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>{itemProduct?.name}</td>
                      <td>{itemProduct?.price}</td>
                      <td>
                        <span
                          className="quantity"
                          style={{
                            background: "#D9D9D9",
                            padding: "2px 30px",
                          }}
                        >
                          {itemProduct?.quantity}
                        </span>
                      </td>
                      <td>{itemProduct?.price * itemProduct?.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        );
      })}
      {/* {userOrderHistory[0]?.map((item) => {
            return item.orderDetail.map((itemDetail, index) => {
              <tr key={index}>
                <td>{itemDetail?.id}</td>
                <td>
                  <img src={itemDetail.image} alt="" />
                </td>
                <td>{itemDetail.name}</td>
                <td>{itemDetail.price}</td>
                <td>
                  <span
                    className="quantity"
                    style={{
                      background: "#D9D9D9",
                      padding: "2px 30px",
                    }}
                  >
                    {itemDetail.quantity}
                  </span>
                </td>
                <td>{itemDetail.price * itemDetail.quantity}</td>
              </tr>;
            });
          })} */}
    </div>
  );
}
