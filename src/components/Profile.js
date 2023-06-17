import React from "react";
import { useNavigate } from "react-router-dom";
import firebase from "../firebase";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Sign out the user using Firebase
      await firebase.auth().signOut();
      navigate("/");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };
  const user = firebase.auth().currentUser;
  const displayName = user ? user.displayName : "";
  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome, {displayName}!</p>
      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
