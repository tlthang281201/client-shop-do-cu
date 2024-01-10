"use client";
import { Col, Container, Row } from "react-bootstrap";
import PostComponent from "../PostComponent";
import { useEffect, useState } from "react";
import { getPostOfSeller } from "@/services/PostServices";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const number = [1, 1, 1, 1, 1, 1];

const TabTwo = ({ id }) => {
  const [loading, setLoading] = useState(true);

  const [posts, setPosts] = useState([]);
  const getAllPost = async (id) => {
    setLoading(true);
    const { data: posts } = await getPostOfSeller(id);

    if (posts) {
      setPosts(posts.filter((onep) => onep.is_sold === true));
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllPost(id);
  }, [id]);

  return (
    <Container>
      <Row>
        {posts
          ? posts?.map((val, i) => (
              <Col lg={4} md={4} sm={12} xs={12} className="border">
                <PostComponent key={i} data={val} />
              </Col>
            ))
          : ""}
        {!loading && posts.length <= 0 && (
          <div className="mt-2 pb-5 pt-5 d-flex justify-content-center">
            <span className="text-danger">Người dùng chưa có tin đăng nào</span>
          </div>
        )}
      </Row>
      {loading && (
        <Row>
          {number?.map((v, i) => (
            <Col lg={4} md={4} sm={12} xs={12} className="border">
              <Skeleton height={150} />
              <Skeleton count={3} />
            </Col>
          ))}
        </Row>
      )}
      {/* <Row>
        <Col>
          <div className="p-3 d-flex justify-content-center">
            <button
              className="d-flex align-items-center gap-2"
              style={{
                border: "none",
                backgroundColor: "white",
                color: "#306bd9",
                fontWeight: "700",
              }}
            >
              Xem thêm <i className="bi bi-chevron-down"></i>
            </button>
          </div>
        </Col>
      </Row> */}
    </Container>
  );
};

export default TabTwo;
