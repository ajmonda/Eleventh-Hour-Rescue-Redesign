import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (

    <nav>
      <ul className="navLinks">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/donate">Donate</Link></li>
      
      </ul>
    </nav>

  );
}