"use client";
import { Col, Container, Row } from "react-bootstrap";
import PostComponent from "../PostComponent";
import { supabase } from "@/utils/supabase-config";
import { useEffect } from "react";

const TabTwo = () => {
  const get = async () => {
    const { data } = await supabase.from("my_view").select();
    console.log(data);
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <Container>
      <Row>
        <Col lg={4} md={4} sm={12} xs={12} className="border">
          <PostComponent
            data={
              "Thu mua iphone ipad apple khoá icloud 10123010 icloud icloud"
            }
          />
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} className="border">
          <PostComponent
            data={
              "Thu mua iphone ipad apple khoá icloud 10123010 icloud icloud"
            }
          />
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} className="border">
          <PostComponent
            data={
              "Thu mua iphone ipad apple khoá icloud 10123010 icloud icloud"
            }
          />
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} className="border">
          <PostComponent
            data={
              "Thu mua iphone ipad apple khoá icloud 10123010 icloud icloud"
            }
          />
        </Col>
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
            >
              Xem thêm <i className="bi bi-chevron-down"></i>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TabTwo;
