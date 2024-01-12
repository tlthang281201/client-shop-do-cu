"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { supabase } from "@/utils/supabase-config";
import PostComponent from "@/component/listpost/component/PostComponent";
const number = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const FeaturedPostComponent = (props) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getFromAndTo = () => {
    const ITEM_PER_PAGE = 6;
    let from = page * ITEM_PER_PAGE;
    let to = from + ITEM_PER_PAGE;

    if (page > 0) {
      from += 1;
    }

    return { from, to };
  };

  const fetchMore = async () => {
    const { from, to } = getFromAndTo();
    const { data } = await supabase
      .from("post")
      .select(`*,city_id(name)`)
      .match({
        status: 1,
        is_show: true,
        is_sold: false,
        is_selling: false,
        is_featured: true,
      })
      .order("created_at", { ascending: false })
      .range(from, to);
    setPage(page + 1);
    setPosts((currentData) => [...currentData, ...data]);
  };

  const fetchPosts = async () => {
    setLoading(true);

    const { data } = await supabase
      .from("post")
      .select(`*,city_id(name)`)
      .match({
        status: 1,
        is_show: true,
        is_sold: false,
        is_selling: false,
        is_featured: true,
      })
      .order("created_at", { ascending: false })
      .range(0, 5);

    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div style={{ backgroundColor: "white" }} className="p-3 mb-3 mt-2">
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
              {number?.map((v, i) => (
                <Col lg={2} md={4} sm={6} xs={6}>
                  <Skeleton height={150} />
                  <Skeleton count={3} />
                </Col>
              ))}
            </Row>
          )}
          <Row>
            {posts?.map((val, i) => (
              <Col className="one-post" key={i} lg={2} md={4} sm={6} xs={6}>
                <PostComponent data={val} />
              </Col>
            ))}
          </Row>
          <Row>
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
                  onClick={() => fetchMore()}
                >
                  Xem thêm <i className="bi bi-chevron-down"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeaturedPostComponent;
