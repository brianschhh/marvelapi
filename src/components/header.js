import React from "react";
import "./header.css";
import img from "../marvel.png";

function Header() {
  return (
    <div className="container">
      <img src={img} alt="" width='600px'/>
    </div>
  );
}

export default Header;
