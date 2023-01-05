import React from "react";
import { useSelector } from "react-redux";
import ProfileBody from "../../components/ProfileBody/ProfileBody";
import "./Profile.css";
import { history } from "../../index";

export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  if (!userLogin) history.push("/login");
  return (
    <div className="wrapper">
      <div className="profile-title-wrapper">
        <p className="profile-title text-white">Profile</p>
      </div>
      <ProfileBody />
    </div>
  );
}
