import React from "react";
import "./RegisterContent.css";

export default function RegisterContent() {
  return (
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
            {/* {form.errors.email && (
<p className="text-danger">{form.errors.email}</p>
)} */}
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
            {/* {form.errors.password && (
<p className="text-danger">{form.errors.password}</p>
)} */}
          </div>
        </div>
      </div>
      <div className="row mt-5 row-input-register">
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
              type="password"
            />
            {/* {form.errors.email && (
<p className="text-danger">{form.errors.email}</p>
)} */}
          </div>
        </div>
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
            {/* {form.errors.password && (
<p className="text-danger">{form.errors.password}</p>
)} */}
          </div>
        </div>
      </div>
      <div className="row mt-5 row-input-register">
        <div className="col-6">
          <div className="form-group w-75">
            <p className="form-input-title">Password Confirm</p>
            <input
              placeholder="passwordConfirm"
              className="w-100"
              name="passwordConfirm"
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
            {/* {form.errors.email && (
<p className="text-danger">{form.errors.email}</p>
)} */}
          </div>
        </div>
        <div className="col-6 d-flex mt-4">
          <p className="gender-title">Gender</p>
          <div>
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

          {/* <div className="form-group w-75">
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
          </div> */}
        </div>
      </div>

      <div className="row mt-5 row-input-register">
        <div className="col-6"></div>
        <div className="col-6">
          <div className="form-group w-75 d-flex justify-content-start align-items-center">
            <button className="btn btn-success btn-login" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
