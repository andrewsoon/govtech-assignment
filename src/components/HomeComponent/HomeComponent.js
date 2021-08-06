import React, { useState } from "react";
import { Row, Col, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./HomeComponent.css";

//render card function
function RenderCard({ item }) {
  const urlName = item.name.replace(" ", "+");
  return (
    <div className="card">
      <Link to={`/${urlName}`} style={{ color: "#f0f0f0" }}>
        <div className="image">
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="card-hover">
          <div className="hover-title">
            <div className="movie-name">{item.name}&nbsp;</div>
            <div className="movie-year">({item.productionYear})</div>
          </div>
          <div className="movie-genre">{item.genre} </div>
          <div className="movie-synopsis">{item.synopsisShort}</div>
        </div>
      </Link>
      <div className="card-title">
        <div className="movie-name">{item.name}&nbsp;</div>
        <div className="movie-year">({item.productionYear})&nbsp;</div>
        <div className="movie-genre">{item.genre}</div>
      </div>
    </div>
  );
}

const Home = (props) => {
  const [movieList, setMovieList] = useState(props.movies);
  //map array to render card for each array item
  const movies = movieList.map((movie) => {
    return (
      <Col xs={12} sm={12} md={8} lg={6} xl={4}>
        <div key={movie.name}>
          <RenderCard item={movie} onClick={props.onClick} />
        </div>
      </Col>
    );
  });

  // --------------------filter logic-----------------------------//

  //filter repeated genre values
  var allGenres = [];
  props.movies.map((movie) => {
    if (allGenres.includes(movie.genre)) {
      return <div></div>;
    } else {
      allGenres.push(movie.genre);
      allGenres.sort();
      return <div></div>;
    }
  });

  //filter repeated year values
  var allYears = [];
  props.movies.map((movie) => {
    if (allYears.includes(movie.productionYear)) {
      return <div></div>;
    } else {
      allYears.push(movie.productionYear);
      allYears.sort();
      return <div></div>;
    }
  });

  function dropdownMenu(filteredArr) {
    const menuItem = filteredArr.map((type) => {
      return <Menu.Item key={type}>{type}</Menu.Item>;
    });
    return <Menu onClick={onClick}>{menuItem}</Menu>;
  }

  const [combinedFilter, setCombinedFilter] = useState([0, 0]);
  const [genreFilter, setGenreFilter] = useState("Movie Genre");
  const [yearFilter, setYearFilter] = useState("Production Year");
  const onClick = ({ key }) => {
    //check if it is a string of numbers(productionYear) only
    let isnum = /^\d+$/.test(key);
    if (isnum) {
      const yearKey = parseInt(key);
      const filteredMovies = props.movies.filter(
        (movie) => movie.productionYear === yearKey
      );
      setYearFilter(key);
      setMovieList(filteredMovies);
      const newFilter = combinedFilter;
      newFilter.splice(0, 1, yearKey);
      setCombinedFilter(newFilter);
    } else {
      //filter movies by genre only
      const filteredMovies = props.movies.filter(
        (movie) => movie.genre === key
      );
      setGenreFilter(key);
      setMovieList(filteredMovies);
      const newFilter = combinedFilter;
      newFilter.splice(1, 1, key);
      setCombinedFilter(newFilter);
    }
    //For movies by genre AND year
    if (combinedFilter[0] !== 0 && combinedFilter[1] !== 0) {
      const allMovies = props.movies;
      const year = combinedFilter[0];
      const genre = combinedFilter[1];
      var twoFilterArr = [];
      allMovies.map((movie) => {
        if (movie.productionYear === year && movie.genre === genre) {
          if (twoFilterArr.includes(movie)) {
          } else {
            twoFilterArr.push(movie);
          }
        }
        setMovieList(twoFilterArr);
        return <div></div>;
      });
    }
  };

  // reset filters
  const resetFilters = () => {
    setGenreFilter("Movie Genre");
    setYearFilter("Production Year");
    setCombinedFilter([0, 0]);
    setMovieList(props.movies);
  };

  function DropdownFilterMenu({ overlayMenu, label }) {
    return (
      <Dropdown overlay={overlayMenu}>
        <Button
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          style={{
            backgroundColor: "#464646",
            color: "#f0f0f0",
            border: "1px solid #b1b1b1",
            margin: "10px 20px 10px 0px",
            width: "200px",
          }}
        >
          {label} <DownOutlined />
        </Button>
      </Dropdown>
    );
  }

  return (
    <div className="container">
      <div className="filter-row">
        <div className="filter-by">Filter By:</div>
        <DropdownFilterMenu
          overlayMenu={dropdownMenu(allGenres)}
          label={genreFilter}
        />
        <DropdownFilterMenu
          overlayMenu={dropdownMenu(allYears)}
          label={yearFilter}
        />
        {combinedFilter[0] !== 0 || combinedFilter[1] !== 0 ? (
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#f0f0f0",
              border: "1px solid #b1b1b1",
              margin: "10px 20px 10px 0px",
            }}
            onClick={resetFilters}
          >
            Clear Filters
          </Button>
        ) : null}
      </div>
      <Row gutter={[32, 16]}>{movies}</Row>
      <div>
        {movieList.length === 0 ? (
          <div className="errMessage">No movies matching both filters.</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Home;
