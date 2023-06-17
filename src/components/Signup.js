import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
 const navigate = useNavigate();


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Create a new user with email and password using Firebase
      await firebase.auth().createUserWithEmailAndPassword(email, password);
	  const user = firebase.auth().currentUser;
    await user.updateProfile({
      displayName: name,
    });
      navigate("/login");
    } catch (error) {
       toast(error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <ToastContainer />
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
