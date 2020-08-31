import React from "react";
import "./header.css";

function Header({ handleHomeClick, handleShowFavourites, ...props }) {
  return (
    <div className="header">
      <div
        onClick={() => {
          handleHomeClick();
        }}
        style={{ cursor: "pointer" }}
      >
        Home
      </div>
      <div
        onClick={() => {
          handleShowFavourites();
        }}
        style={{ cursor: "pointer" }}
      >
        Favourites
      </div>
    </div>
  );
}

export default Header;
