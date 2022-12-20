import React from "react";
import LoginContent from "../../components/LoginContent/LoginContent";
import "./Login.css";

export default function Login() {
  return (
    <div className="container">
      <div className="row">
        <p className="login-title">Login</p>
      </div>
      <div className="row">
        <LoginContent />
      </div>
    </div>
  );
}
