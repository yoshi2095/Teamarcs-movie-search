import React from "react";
import "./card.css";
export default function MovieCard({ Title, Poster, ...props }) {
  return (
    <div className="movie-card-container">
      <div className="movie-card">
        <div className="movie-card-img">
          <img className="card-img" src={Poster} />
        </div>
        <div className="movie-card-title">{Title}</div>
      </div>
    </div>
  );
}
