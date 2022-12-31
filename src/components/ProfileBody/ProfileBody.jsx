import React, { useEffect, useState } from "react";
import "./ProfileBody.css";
import pictureProduct from "../../assets/img/image5.png";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi } from "../../redux/reducers/userReducer";
import OrderHistory from "../OrderHistory/OrderHistory";

export default function ProfileBody() {
  const [isActiveTab, setIsActiveTab] = useState(1);
  const { userProfile, userOrder } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const actionSync = getProfileApi();
    dispatch(actionSync);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="avatar-wrapper">
            <img src={userProfile?.avatar} alt="" className="w-100" />
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
                    value={userProfile?.email}
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
                    value={userProfile?.name}
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
                    value={userProfile?.phone}
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
                    value={userProfile?.password}
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
                      defaultValue="true"
                      className="mx-2"
                      checked={userProfile?.gender}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      defaultValue="false"
                      className="mx-2"
                      checked={!userProfile?.gender}
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
          <OrderHistory />
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
