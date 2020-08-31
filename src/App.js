import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Search />
        <MoviesList />
      </div>
    </div>
  );
}

export default App;
