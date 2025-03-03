import React from "react";
import "../utils/styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <h1>MyApp</h1> */}
        <img
          src="C:\Users\MR JOSEPH\Desktop\projects\MALINGO\frontend\src\assets\images\malingo.png"
          alt="Logo"
        />
      </div>
      <div className="navbar-links">
        <Link to="/home" >
          <a href="#home">Home</a>
        </Link>
        <a href="#explore">Explore</a>
        <a href="#resources">Resources</a>
        <a href="#community">Community</a>
        <a href="#create">Create</a>
      </div>
      <div className="navbar-actions">
        <button className="btn">SignIn</button>
        <button className="btn btn-primary">LogIn</button>
      </div>
    </nav>
  );
};

export default Navbar;
