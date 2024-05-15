import Link from "next/link";
import React from "react";

const SuccessPost = () => {
  return (
    <div className="pe-4 ps-4 pb-2">
      <div
        className="d-flex flex-row gap-3 p-3"
        style={{ backgroundColor: "#12a154" }}
      >
        <i className="bi bi-check-circle-fill text-white fs-5"></i>
        <div className="d-flex flex-column">
          <span className="text-white fw-bold" style={{ fontSize: "18px" }}>
            Bạn đã hoàn tất tin đăng
          </span>
          <span className="text-white fs-6" style={{ fontSize: "15px" }}>
            Quản trị viên đang tiến hành duyệt tin của bạn
          </span>
        </div>
      </div>
      <div style={{ backgroundColor: "#12a154" }} className="pe-3 pb-3">
        <div className="d-flex flex-row justify-content-between">
          <div></div>
          <div>
            <Link
              href="/dang-tin"
              className="text-white text-decoration-none border p-2 rounded-2"
            >
              Đăng tin khác
            </Link>
            <Link
              href="/user/posts"
              className="text-white text-decoration-none ms-3 border p-2 rounded-2"
            >
              Quản lý tin đăng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPost;
