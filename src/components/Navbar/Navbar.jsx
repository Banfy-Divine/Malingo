import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/malingo.png";
import Search from "../../assets/images/search.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src={Logo} alt="Malingo Logo" className="logo" />

        <ul>
          <li>Home</li>
          <li>Create Activity</li>
          <li>Activity Details</li>
          <li>Profile</li>
        </ul>
        
        <div className="search">
          <div className="search-box">
            <input type="text" placeholder="Search For Activities..." />
            <img src={Search} alt="Search icon" className="search-icon" />
          </div>
        </div>
        
        <button className="create-button">Create</button>
      </div>
    </div>
  );
};

export default Navbar;
