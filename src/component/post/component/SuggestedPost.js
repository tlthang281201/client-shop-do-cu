import PostComponent from "@/component/listpost/right/PostComponent";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SuggestedPost = () => {
  return (
    <section className="suggestions-area">
      <div className="box-title">
        <h2 className="title">Gợi ý cho bạn</h2>
      </div>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={6} xs={6}>
            <PostComponent />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6}>
            <PostComponent />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6}>
            <PostComponent />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6}>
            <PostComponent />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6}>
            <PostComponent />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SuggestedPost;
