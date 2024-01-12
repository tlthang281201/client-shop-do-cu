import React from "react";
import PostComponent from "./PostComponent";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
const FeaturedPost = ({ data, title }) => {
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
          {title}
        </h2>
        <Link href="/tin-noi-bat" className="text-decoration-none">
          <span style={{ fontSize: "13px", color: "gray" }}>Xem tất cả</span>
        </Link>
      </div>

      <div className="mb-2">
        <Container>
          <Row>
            {data?.map((val, i) => (
              <Col key={i} lg={2} md={4} sm={6} xs={6}>
                <PostComponent data={val} key={i} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeaturedPost;
