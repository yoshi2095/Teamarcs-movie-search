import React from "react";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";

function SingleMovie({ ...props }) {
  let [loading, setLoading] = useState(false);

  let [movie, setMovie] = useState({});
  useEffect(() => {
    //call the API here:

    let movieId = props.match.params.id;
    setLoading(true);
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=1b9a1a44&plot=full`)
      .then(response => response.json())
      .then(res => {
        setMovie(res);
        setLoading(false);
      })
      .catch(err => {
        console.log("Error:", err);
      });
  }, []);
  return (
    <div className="single-movie-container">
      {loading ? (
        "Loading...."
      ) : Object.keys(movie).length ? (
        <div className="content">
          <div className="img-container">
            <img src={movie.Poster} />
          </div>
          <div className="movie-details">
            <div className="movie-title">{movie.Title}</div>
            <div className="movie-year">{movie.Year}</div>
          </div>
          <div
            className="go-back-button"
            onClick={() => {
              props.history.push("/");
            }}
          >
            <button>Go back</button>
          </div>
        </div>
      ) : (
        <div className="content">No such movie found</div>
      )}
    </div>
  );
}

export default withRouter(SingleMovie);
