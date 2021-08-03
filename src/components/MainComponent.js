import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Header from "./HeaderComponent";
import Home from "../components/HomeComponent/HomeComponent";
import Footer from "./FooterComponent";
import "../App.css";
import { MOVIES } from "../resources/Movies";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MOVIES,
    };
  }
  render() {
    return (
      <div className="page-layout">
        <Header />
        <Switch>
          <Route
            path="/"
            component={() => <Home movies={this.state.movies} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
