import React from "react";
import styles from "./styles.css";
import PostComponent from "./PostComponent";
const LeftPost = (props) => {
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
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
      </div>
    </div>
  );
};

export default LeftPost;
