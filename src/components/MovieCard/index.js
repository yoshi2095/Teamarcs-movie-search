import React from "react";
import "./card.css";
export default function MovieCard({
  handleFavourite,
  Year,
  Title,
  Poster,
  favourite,
  showFavourites,
  ...props
}) {
  return (
    <div className="movie-card-container">
      <div className="movie-card">
        <div className="movie-card-img">
          <img
            className="card-img"
            src={
              Poster === "N/A"
                ? "https://www.moooicarpets.com/wp-content/ewww/lazy/placeholder-300x450.png"
                : Poster
            }
          />
        </div>
        <div className="movie-card-title">{Title}</div>
        <div className="movie-card-date">
          <div>{Year}</div>
          {!showFavourites ? (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleFavourite();
              }}
            >
              {favourite ? "Unfavourite" : "favourite"}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
