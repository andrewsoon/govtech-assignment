import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./MovieDetail.css";

function RenderMovie({ movie }) {
  const synopsis = movie.synopsis.replaceAll("<br />", "\n");
  return (
    <div className="movie-detail-container">
      <Link to="/" style={{ color: "#f0f0f0" }}>
        <div className="nav-to-main">Back To Main</div>
      </Link>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="detail-image">
            <img
              src={movie.image}
              alt={movie.name}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="detail-box">
            <div className="one-line">
              <div className="movie-detail-title">{movie.name}&nbsp;</div>
              <div className="movie-detail-year">
                ({movie.productionYear}),&nbsp;
              </div>
              <div className="movie-detail-genre">{movie.genre}</div>
            </div>

            <div className="movie-detail-synopsis">{synopsis}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const MovieDetail = (props) => {
  if (props.movie) {
    return (
      <div className="container">
        <RenderMovie movie={props.movie} />
      </div>
    );
  } else {
    return <div className="container">Routing Param match</div>;
  }
};

export default MovieDetail;
