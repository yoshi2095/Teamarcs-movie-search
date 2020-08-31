import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import MoviesList from "./components/MoviesList";
import { Router, Switch } from "react-router-dom";

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: "Lord",
      selectedType: {
        type: "All",
        id: 1,
        value: "",
        loading: false,
        favourites: [],
        showFavourites: false
      }
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    let { searchTerm, selectedType } = this.state;
    console.log("apicall selectedType:", selectedType);
    this.setState({
      loading: true
    });
    fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&type=${selectedType.value}&apikey=1b9a1a44&plot=full`
    )
      .then(response => response.json())
      .then(res => {
        let movies = [...res.Search];
        movies.forEach(mov => {
          mov.favourite = false;
        });

        // check if any favourite movies in localStorage and mark them favourite.
        if ("favourites" in localStorage) {
          let favourites = JSON.parse(localStorage.getItem("favourites"));
          favourites.forEach(fav => {
            movies.forEach(mov => {
              if (mov.imdbID === fav.imdbID) {
                mov.favourite = fav.favourite;
              }
            });
          });
        }

        this.setState({
          movies,
          loading: false
        });
      })
      .catch(err => {
        console.log("err:", err);
        this.setState({
          loading: false
        });
      });
  }

  handleSearch = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  setSelectedType(type) {
    this.setState(prevState => {
      return {
        selectedType: { ...type }
      };
    });
  }

  handleSearchClick() {
    this.setState(
      {
        movies: []
      },
      () => {
        this.fetchMovies();
      }
    );
  }

  toggleFavourite(favItem) {
    let movies = [...this.state.movies];
    let movieClicked = movies.find(mov => {
      return mov.imdbID === favItem.imdbID;
    });
    movieClicked.favourite = !movieClicked.favourite;

    //set favourites to localstorage:
    let favouriteMovies = movies.filter(mov => {
      return mov.favourite === true;
    });

    localStorage.setItem("favourites", JSON.stringify(favouriteMovies));

    this.setState({
      movies
    });
  }

  handleShowFavourites = () => {
    let movies = [...this.state.movies];
    let favouriteMovies = movies.filter(mov => {
      return mov.favourite === true;
    });
    this.setState({
      showFavourites: true,
      favourites: favouriteMovies
    });
  };

  handleHomeClick() {
    this.setState({
      showFavourites: false
    });
  }

  render() {
    let {
      movies,
      searchTerm,
      loading,
      favourites,
      showFavourites
    } = this.state;
    return (
      <div className="container">
        <div className="content">
          <Header
            handleHomeClick={this.handleHomeClick.bind(this)}
            handleShowFavourites={this.handleShowFavourites}
          />
          {!showFavourites ? (
            <Search
              setSelectedType={this.setSelectedType.bind(this)}
              handleSearchClick={this.handleSearchClick.bind(this)}
              searchTerm={searchTerm}
              handleSearch={this.handleSearch}
            />
          ) : null}

          <MoviesList
            toggleFavourite={this.toggleFavourite.bind(this)}
            loading={loading}
            movies={showFavourites ? favourites : movies}
            showFavourites={showFavourites}
          />
        </div>
      </div>
    );
  }
}
