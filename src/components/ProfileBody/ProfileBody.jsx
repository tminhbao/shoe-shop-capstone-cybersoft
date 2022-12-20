import React, { useState } from "react";
import "./ProfileBody.css";
import picture from "../../assets/img/download.png";
import pictureProduct from "../../assets/img/image5.png";
import { Pagination } from "antd";

export default function ProfileBody() {
  const [isActiveTab, setIsActiveTab] = useState(1);
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="avatar-wrapper">
            <img src={picture} alt="" />
          </div>
        </div>
        <div className="col-9">
          <div className="form-wrapper-register">
            <div className="row mt-5 row-input-register">
              <div className="col-6">
                <div className="form-group w-75">
                  <p className="form-input-title">Email</p>
                  <input
                    placeholder="email"
                    className="w-100"
                    name="email"
                    style={{
                      width: "443px",
                      height: "54px",
                      border: "none",
                      background: "rgba(33, 33, 33, 0.08)",
                      borderRadius: "4px 4px 0px 0px",
                      padding: "16px 12px 14px 14px",

                      flex: "none",
                      order: 0,
                      alignSelf: "stretch",
                      flexGrow: 0,
                    }}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group w-75">
                  <p className="form-input-title">Name</p>
                  <input
                    placeholder="name"
                    className="w-100"
                    name="name"
                    style={{
                      width: "443px",
                      height: "54px",
                      border: "none",
                      background: "rgba(33, 33, 33, 0.08)",
                      borderRadius: "4px 4px 0px 0px",
                      padding: "16px 12px 14px 14px",

                      flex: "none",
                      order: 0,
                      alignSelf: "stretch",
                      flexGrow: 0,
                    }}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5 row-input-register">
              <div className="col-6">
                <div className="form-group w-75">
                  <p className="form-input-title">Phone</p>
                  <input
                    placeholder="phone"
                    className="w-100"
                    name="phone"
                    style={{
                      width: "443px",
                      height: "54px",
                      border: "none",
                      background: "rgba(33, 33, 33, 0.08)",
                      borderRadius: "4px 4px 0px 0px",
                      padding: "16px 12px 14px 14px",

                      flex: "none",
                      order: 0,
                      alignSelf: "stretch",
                      flexGrow: 0,
                    }}
                    type="text"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group w-75">
                  <p className="form-input-title">Password</p>
                  <input
                    placeholder="password"
                    className="w-100"
                    name="password"
                    style={{
                      width: "443px",
                      height: "54px",
                      border: "none",
                      background: "rgba(33, 33, 33, 0.08)",
                      borderRadius: "4px 4px 0px 0px",
                      padding: "16px 12px 14px 14px",

                      flex: "none",
                      order: 0,
                      alignSelf: "stretch",
                      flexGrow: 0,
                    }}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5 row-input-register">
              <div className="col-6"></div>
              <div className="col-6 ">
                <div className="gender-wrapper d-flex justify-content-start align-items-center">
                  <div className="gender-title-wrapper">
                    <p
                      className="gender-title"
                      style={{
                        lineHeight: "38px",
                      }}
                    >
                      Gender
                    </p>
                  </div>

                  <div
                    className="gender-input-radio"
                    style={{
                      lineHeight: "38px",
                    }}
                  >
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      defaultValue={1}
                      className="mx-2"
                    />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      defaultValue={0}
                      className="mx-2"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  <div
                    className="gender-update-button"
                    style={{
                      marginLeft: "22px",
                    }}
                  >
                    <button className="btn btn-success btn-login" type="submit">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr width="90%" style={{ margin: "0 auto", marginTop: "30px" }} />
      <div className="row mt-5">
        <div className="nav">
          <span
            className={isActiveTab === 1 ? "nav-links active" : "nav-links"}
            onClick={() => setIsActiveTab(1)}
          >
            Order History
          </span>
          <span
            className={isActiveTab === 2 ? "nav-links active" : "nav-links"}
            onClick={() => setIsActiveTab(2)}
          >
            Favourite
          </span>
        </div>

        <div
          id="Tab01"
          className={isActiveTab === 1 ? "tab01 d-block" : "tab01 d-none"}
        >
          <p className="mt-5 order-title">
            + Orders have been placed on 09 - 19 - 2020
          </p>
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
              <tr>
                <td>1</td>
                <td>
                  <img src={pictureProduct} alt="" />
                </td>
                <td>Product 1</td>
                <td>1000</td>
                <td>
                  <span
                    className="quantity"
                    style={{
                      background: "#D9D9D9",
                      padding: "2px 30px",
                    }}
                  >
                    1
                  </span>
                </td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-5 order-title">
            + Orders have been placed on 09 - 19 - 2020
          </p>
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
              <tr>
                <td>1</td>
                <td>
                  <img src={pictureProduct} alt="" />
                </td>
                <td>Product 1</td>
                <td>1000</td>
                <td>
                  <span
                    className="quantity"
                    style={{
                      background: "#D9D9D9",
                      padding: "2px 30px",
                    }}
                  >
                    1
                  </span>
                </td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
          <Pagination
            defaultCurrent={1}
            total={50}
            style={{
              marginLeft: "76%",
            }}
          />
        </div>
        <div
          id="Tab02"
          className={isActiveTab === 2 ? "tab02 d-block" : "tab02 d-none"}
        >
          <h2>Tab02</h2>
          <p>Tab02 is the capital of England.</p>
        </div>
      </div>
    </div>
  );
}
