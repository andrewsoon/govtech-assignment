import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./HomeComponent.css";

function RenderCard({ item }) {
  console.log(item.name);
  const urlName = item.name.replace(" ", "+");
  return (
    <div className="card">
      <Link to={`/${urlName}`} style={{ color: "#fff" }}>
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
          <div className="card-body">{item.synopsisShort}</div>
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
  const movies = props.movies.map((movie) => {
    return (
      <Col xs={12} sm={12} md={8} lg={6} xl={4}>
        <div key={movie.name}>
          <RenderCard item={movie} onClick={props.onClick} />
        </div>
      </Col>
    );
  });

  return (
    <div className="container">
      <Row gutter={[32, 16]}>{movies}</Row>
    </div>
  );
};

export default Home;
