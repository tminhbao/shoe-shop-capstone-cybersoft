import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { loginFacebookApi } from "../../redux/reducers/userReducer";

const LoginFacebook = () => {
  const dispatch = useDispatch();
  const responseFacebook = (response) => {
    if (response) {
      const facebookToken = response.accessToken;
      const asyncAction = loginFacebookApi({ facebookToken: facebookToken });
      dispatch(asyncAction);
    }
  };
  return (
    <div className="form-group w-100 facebook-register">
      <i className="fab fa-facebook m-2 icon-facebook"></i>
      <FacebookLogin
        appId="846678199937409"
        autoLoad={false}
        fields="name,email,picture"
        onClick={(props) => <div>Login Facebook</div>}
        callback={responseFacebook}
        textButton="Login with Facebook"
        cssClass="form-group w-100 facebook-register border-0 text-white mb-1"
      />
    </div>
  );
};

export default LoginFacebook;
