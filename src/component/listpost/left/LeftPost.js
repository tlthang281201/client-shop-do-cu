import React from "react";
import styles from "./styles.css";
import PostComponent from "./PostComponent";
const LeftPost = ({ data, title }) => {
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
      </div>

      <div className="mb-2">
        {data?.map((val, i) => (
          <PostComponent key={i} data={val} />
        ))}
        {data?.length <= 0 && (
          <div className="mt-3">
            <span className="text-danger">Không tìm thấy tin đăng</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftPost;
