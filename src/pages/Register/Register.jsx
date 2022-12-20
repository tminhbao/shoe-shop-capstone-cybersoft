import React from "react";
import "./Register.css";
import RegisterContent from "../../components/RegisterContent/RegisterContent";

export default function Register() {
  return (
    <div className="container">
      <div className="row">
        <p className="register-title">Register</p>
      </div>
      <RegisterContent />
    </div>
  );
}
