import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import "./RegisterContent.css";
import * as yup from "yup";
import { registerApi } from "../../redux/reducers/userReducer";

export default function RegisterContent() {
  const dispatch = useDispatch();
  const form = useFormik({
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
      passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
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
        genderValue,
        phone,
      };
      const asyncAction = registerApi(data);
      dispatch(asyncAction);
    },
  });
  return (
    <form className="form-wrapper-register" onSubmit={form.handleSubmit}>
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
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.email && (
              <small className="text-danger">{form.errors.email}</small>
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
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.name && (
              <small className="text-danger">{form.errors.name}</small>
            )}
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
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.password && (
              <small className="text-danger">{form.errors.password}</small>
            )}
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
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.phone && (
              <small className="text-danger">{form.errors.phone}</small>
            )}
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
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.passwordConfirm && (
              <small className="text-danger">
                {form.errors.passwordConfirm}
              </small>
            )}
          </div>
        </div>
        <div className="col-6 d-flex mt-4">
          <p className="gender-title">Gender</p>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="true"
              className="mx-2"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="false"
              className="mx-2"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <label htmlFor="female">Female</label>
          </div>
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
    </form>
  );
}
