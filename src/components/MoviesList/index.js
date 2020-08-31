import React from "react";
import MovieCard from "../MovieCard";

export default class MoviesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MovieCard />
      </div>
    );
  }
}
