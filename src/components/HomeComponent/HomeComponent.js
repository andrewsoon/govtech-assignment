import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Row, Col } from "antd";
import "./HomeComponent.css";

function RenderCard({ item }) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={item.image}
        alt={item.name}
        style={{ width: "100% " }}
      />
      <div className="card-body">
        <div className="card-title">
          {item.name} ({item.productionYear}), {item.genre}
        </div>
        <div className="card-subtitle"></div>
        {/* <div className="card-text">{item.synopsisShort}</div> */}
      </div>
    </div>
  );
}

const Home = (props) => {
  const movies = props.movies.map((movie) => {
    return (
      <Col xs={12} sm={12} md={12} lg={8} xl={6}>
        <div key={movie.name}>
          <RenderCard item={movie} />
        </div>
      </Col>
    );
  });

  return (
    <div className="container">
      <Row gutter={[16, 8]}>{movies}</Row>
    </div>
  );
};

export default Home;
