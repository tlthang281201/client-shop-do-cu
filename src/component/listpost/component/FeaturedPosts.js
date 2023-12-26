import React from "react";
import PostComponent from "./PostComponent";
import { Col, Container, Row } from "react-bootstrap";
const a = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const FeaturedPost = (props) => {
  return (
    <div style={{ backgroundColor: "white" }} className="p-3 mb-3">
      <div
        className="d-flex align-items-center justify-content-between mb-1"
        style={{ borderBottom: "3px solid #F2F5F8" }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {props.title}
        </h2>
        <span style={{ fontSize: "13px", color: "gray" }}>Xem tất cả</span>
      </div>

      <div className="mb-2">
        <Container>
          <Row>
            {a.map((val, i) => (
              <Col key={i} lg={2} md={4} sm={6} xs={6}>
                <PostComponent />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeaturedPost;
