import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import firebase from "./firebase";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import "./styles/login.css";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Set up an authentication state listener
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        setLoggedIn(true);
      } else {
        // User is logged out
        setLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={loggedIn ? <Profile /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App;
