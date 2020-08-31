import React from "react";
import "./header.css";

function Header({ ...props }) {
  return (
    <div className="header">
      <div>Home</div>
      <div>Favorites</div>
    </div>
  );
}

export default Header;
