import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { loginApi } from "../../redux/reducers/userReducer";
import LoginFacebook from "../LoginFacebook/LoginFacebook";

export default function LoginContent() {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email cannot be empty")
        .email("email is invalid"),
      password: yup.string().required("password cannot be empty"),
    }),
    onSubmit: (values) => {
      const actionSync = loginApi(values);
      dispatch(actionSync);
    },
  });
  return (
    <form className="form-wrapper" onSubmit={form.handleSubmit}>
      <div className="form-group w-100">
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
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        {form.errors.email && (
          <small className="text-danger">{form.errors.email}</small>
        )}
      </div>
      <div className="form-group w-100 mt-5">
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
          type="password"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        {form.errors.password && (
          <small className="text-danger">{form.errors.password}</small>
        )}
      </div>
      <div className="form-group w-100 d-flex justify-content-end align-items-center mt-4">
        <div className="btn-register">
          <a href="">Register Now?</a>
        </div>
        <button className="btn btn-success btn-login" type="submit">
          Login
        </button>
      </div>
      <LoginFacebook />
    </form>
  );
}
