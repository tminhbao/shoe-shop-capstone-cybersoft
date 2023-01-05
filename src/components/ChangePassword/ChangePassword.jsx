import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import { useDispatch } from "react-redux";
import { changePasswordApi } from "../../redux/reducers/userReducer";

function ChangePassword() {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      newPassword: "",
      newPasswordConfirm: "",
    },
    validationSchema: yup.object().shape({
      newPassword: yup
        .string()
        .required("password cannot be empty")
        .min(6, "password must be at least 6 characters"),
      newPasswordConfirm: yup
        .string()
        .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      const { newPassword } = values;
      const action = changePasswordApi({ newPassword });
      dispatch(action);
    },
  });
  return (
    <div className="container">
      <div className="row">
        <form
          className="form-wrapper-register"
          onSubmit={form.handleSubmit}
          style={{ margin: "0 100px" }}
        >
          <div className="row mt-5 row-input-register">
            <div className="col-6">
              <div className="form-group w-75">
                <p className="form-input-title">New Password</p>
                <input
                  placeholder="newPassword"
                  className="w-100"
                  name="newPassword"
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
                {form.errors.newPassword && (
                  <small className="text-danger">
                    {form.errors.newPassword}
                  </small>
                )}
              </div>
            </div>
          </div>
          <div className="row mt-5 row-input-register">
            <div className="col-6">
              <div className="form-group w-75">
                <p className="form-input-title">New Password Confirm</p>
                <input
                  placeholder="newPasswordConfirm"
                  className="w-100"
                  name="newPasswordConfirm"
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
                {form.errors.newPasswordConfirm && (
                  <small className="text-danger">
                    {form.errors.newPasswordConfirm}
                  </small>
                )}
              </div>
            </div>
          </div>
          <button className="btn btn-warning mt-4 p-3" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
