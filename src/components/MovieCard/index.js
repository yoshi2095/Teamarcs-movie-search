import React from "react";
import "./card.css";
import { withRouter } from "react-router-dom";
function MovieCard({
  handleFavourite,
  Year,
  Title,
  Poster,
  favourite,
  imdbID,
  showFavourites,
  ...props
}) {
  return (
    <div
      className="movie-card-container"
      onClick={() => {
        props.history.push(`/movie/${imdbID}`);
      }}
    >
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
              style={
                favourite
                  ? { cursor: "pointer", color: "red" }
                  : { cursor: "pointer", color: "blue" }
              }
              onClick={e => {
                e.stopPropagation();
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

export default withRouter(MovieCard);
