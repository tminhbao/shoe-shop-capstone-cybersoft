import React, { useEffect, useState } from "react";
import "./ProfileBody.css";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileApi,
  updateUserProfileApi,
} from "../../redux/reducers/userReducer";
import OrderHistory from "../OrderHistory/OrderHistory";
import FavoriteProduct from "../FavoriteProduct/FavoriteProduct";
import { history } from "../../index";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function ProfileBody() {
  const [isActiveTab, setIsActiveTab] = useState(1);
  const { userProfile, userLogin } = useSelector((state) => state.userReducer);
  if (!userLogin) history.push("/login");
  const formUpdate = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: "",
      phone: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email cannot be empty")
        .email("email is invalid"),
      password: yup
        .string()
        .required("password cannot be empty")
        .min(6, "password must be at least 6 characters"),
      name: yup.string().required("name cannot be empty").max(50),
      gender: yup.bool().required("gender cannot be empty"),
      phone: yup.string().required("phone cannot be empty"),
    }),
    onSubmit: (values) => {
      let { email, password, name, gender, phone } = values;
      let genderValue = gender === "true";
      let data = {
        email,
        password,
        name,
        gender: genderValue,
        phone,
      };
      const action = updateUserProfileApi(data);
      dispatch(action);
    },
  });
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
          <form
            className="form-wrapper-register"
            onSubmit={formUpdate.handleSubmit}
          >
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
                    defaultValue={userProfile?.email}
                    onChange={formUpdate.handleChange}
                    onBlur={formUpdate.handleBlur}
                  />
                  {formUpdate.errors.email && (
                    <small className="text-danger">
                      {formUpdate.errors.email}
                    </small>
                  )}
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
                    defaultValue={userProfile?.name}
                    onChange={formUpdate.handleChange}
                    onBlur={formUpdate.handleBlur}
                  />
                  {formUpdate.errors.name && (
                    <small className="text-danger">
                      {formUpdate.errors.name}
                    </small>
                  )}
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
                    defaultValue={userProfile?.phone}
                    onChange={formUpdate.handleChange}
                    onBlur={formUpdate.handleBlur}
                  />
                  {formUpdate.errors.phone && (
                    <small className="text-danger">
                      {formUpdate.errors.phone}
                    </small>
                  )}
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
                    defaultValue={userProfile?.password}
                    onChange={formUpdate.handleChange}
                    onBlur={formUpdate.handleBlur}
                  />
                  {formUpdate.errors.password && (
                    <small className="text-danger">
                      {formUpdate.errors.password}
                    </small>
                  )}
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
                      defaultChecked={userProfile?.gender}
                      onChange={formUpdate.handleChange}
                      onBlur={formUpdate.handleBlur}
                    />

                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      defaultValue="false"
                      className="mx-2"
                      defaultChecked={!userProfile?.gender}
                      onChange={formUpdate.handleChange}
                      onBlur={formUpdate.handleBlur}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  {formUpdate.errors.gender && (
                    <small className="text-danger">
                      {formUpdate.errors.gender}
                    </small>
                  )}
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
          </form>
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
          <FavoriteProduct />
        </div>
      </div>
    </div>
  );
}
