import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import MoviesList from "./components/MoviesList";

export default class App extends React.Component {
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
