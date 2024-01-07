"use client";
import React, { useEffect, useState } from "react";
import PostComponent from "./PostComponent";
import { Col, Container, Row } from "react-bootstrap";
import { getAllPost } from "@/services/PostServices";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const number = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const NewPost = (props) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    setLoading(true);
    const { data } = await getAllPost();
    setPosts(data.filter((onep) => onep.is_selling === false));
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
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
        {/* <span style={{ fontSize: "13px", color: "gray" }}>Xem tất cả</span> */}
      </div>

      <div className="mb-2">
        <Container>
          {loading && (
            <Row>
              {number.map((v, i) => (
                <Col lg={2} md={4} sm={6} xs={6}>
                  <Skeleton height={150} />
                  <Skeleton count={3} />
                </Col>
              ))}
            </Row>
          )}
          <Row>
            {posts.map((val, i) => (
              <Col key={i} lg={2} md={4} sm={6} xs={6}>
                <PostComponent data={val} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NewPost;
