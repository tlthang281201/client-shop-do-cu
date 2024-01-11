"use client";
import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import styles from "./styles.css";
import TabOne from "./tabs/TabOne";
import TabTwo from "./tabs/TabTwo";
const PostOfSeller = ({ id }) => {
  const [showTab1, setShowTab1] = useState(true);
  const handleSelect = (id) => {
    setShowTab1(id === 1 ? true : false);
  };
  return (
    <div style={{ backgroundColor: "white" }} className="rounded-3 border">
      {/* <Nav
        justify
        variant="underline"
        defaultActiveKey="1"
        className="pb-1 ps-3 pe-3 pt-2"
      >
        <Nav.Item onClick={() => handleSelect(1)}>
          <Nav.Link eventKey="1">Đang hiển thị</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(2)}>
          <Nav.Link eventKey="2">Đã bán</Nav.Link>
        </Nav.Item>
      </Nav> */}
      <div className="p-3 d-flex justify-content-center">
        <span style={{ textAlign: "center" }} className="fw-bold">
          Tin đăng đang hiển thị
        </span>
      </div>
      {showTab1 && <TabOne id={id} />}

      {showTab1 === false && <TabTwo id={id} />}
    </div>
  );
};

export default PostOfSeller;
