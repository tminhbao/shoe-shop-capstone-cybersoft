import React, { useState } from "react";

export default function LoginContent() {
  return (
    <div className="form-wrapper">
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
        />
        {/* {form.errors.email && (
    <p className="text-danger">{form.errors.email}</p>
  )} */}
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
        />
        {/* {form.errors.password && (
    <p className="text-danger">{form.errors.password}</p>
  )} */}
      </div>
      <div className="form-group w-100 d-flex justify-content-end align-items-center mt-4">
        <div className="btn-register">
          <a href="">Register Now?</a>
        </div>
        <button className="btn btn-success btn-login" type="submit">
          Login
        </button>
      </div>
      <div className="form-group w-100 facebook-register">
        <i className="fab fa-facebook m-2 icon-facebook"></i>
        <span className="m-2">Continue with Facebook</span>
      </div>
    </div>
  );
}
