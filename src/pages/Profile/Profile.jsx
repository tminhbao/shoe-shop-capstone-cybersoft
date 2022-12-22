import React from "react";
import ProfileBody from "../../components/ProfileBody/ProfileBody";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="wrapper">
      <div className="profile-title-wrapper">
        <p className="profile-title text-white">Profile</p>
      </div>
      <ProfileBody />
    </div>
  );
}
