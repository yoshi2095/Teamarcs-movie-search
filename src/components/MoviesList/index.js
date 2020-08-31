import React from "react";
import MovieCard from "../MovieCard";
import "./list.css";

export default class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?s=lord&apikey=1b9a1a44&plot=full")
      .then(response => response.json())
      .then(res => {
        console.log("res:", res);
        this.setState({
          movies: [...res.Search]
        });
      })
      .catch(err => {
        console.log("err:", err);
      });
  }

  render() {
    let { movies } = this.state;
    return (
      <div className="movies-list-container">
        {movies.length ? (
          movies.map(movie => {
            return <MovieCard {...movie} />;
          })
        ) : (
          <div>No movies found</div>
        )}
      </div>
    );
  }
}
