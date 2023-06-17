import React, { useState } from "react";
import firebase from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in with email and password using Firebase
      await firebase.auth().signInWithEmailAndPassword(email, password);
	  
      navigate("/profile");
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <h1>Login</h1>
          <ToastContainer />
        </Container>
      </Navbar>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-muted">
            We'll never share your email with anyone else.
          </p>
        </div>

        <div className="mb-3 " >
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            requiredplaceholder="Password"
          />
        </div>
       

        <Button variant="" type="submit">
          Login
        </Button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
