import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Header from "./HeaderComponent";
import Home from "../components/HomeComponent/HomeComponent";
import Footer from "./FooterComponent";
import "../App.css";
import { MOVIES } from "../resources/Movies";
import MovieDetail from "../components/MovieDetailComponent/MovieDetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MOVIES,
    };
  }
  render() {
    const movieName = ({ match }) => {
      return (
        <MovieDetail
          movie={
            this.state.movies.filter(
              (movie) => movie.name.replace(" ", "+") === match.params.movieName
            )[0]
          }
        />
      );
    };
    return (
      <div className="page-layout">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home movies={this.state.movies} />}
          />
          <Route path="/:movieName" component={movieName} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
