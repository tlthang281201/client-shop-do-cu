import React from "react";
import style from "./styles.css";
import PostComponent from "./PostComponent";
import { Col, Row } from "react-bootstrap";
const RightPost = () => {
  return (
    <div style={{ backgroundColor: "white" }} className="p-3">
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
          Tin rao nổi bật
        </h2>
        <span style={{ fontSize: "13px", color: "gray" }}>Xem tất cả</span>
      </div>
      <div className="mb-2">
        <Row>
          <Col lg={12} md={6} sm={6} xs={6}>
            <PostComponent />
          </Col>
          <Col lg={12} md={6} sm={6} xs={6}>
            <PostComponent />
          </Col>
          <Col lg={12} md={6} sm={6} xs={6}>
            <PostComponent />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RightPost;
