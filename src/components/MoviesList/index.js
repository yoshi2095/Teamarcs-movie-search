import React from "react";
import MovieCard from "../MovieCard";
import "./list.css";

export default class MoviesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { movies, loading, toggleFavourite, showFavourites } = this.props;
    return (
      <div
        className={
          loading || (!loading && !movies.length)
            ? "movies-list-container"
            : "movies-list-container-grid"
        }
      >
        {loading ? (
          <div className="movies-list-loading">Loading.....</div>
        ) : movies.length ? (
          movies.map(movie => {
            return (
              <MovieCard
                handleFavourite={() => {
                  toggleFavourite(movie);
                }}
                {...movie}
                showFavourites={showFavourites}
              />
            );
          })
        ) : (
          <div className="movies-list-loading">No movies found</div>
        )}
      </div>
    );
  }
}
