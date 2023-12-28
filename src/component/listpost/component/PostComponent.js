"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.css";
const PostComponent = ({ data }) => {
  return (
    <Link href={"#"} style={{ textDecoration: "none" }}>
      <div className="d-flex pt-3 flex-column  gap-2 mb-2">
        <div className="image">
          <Image
            alt="image"
            src={
              "https://cdn.chotot.com/7ptS7Zme7uo9edDfs-qfpVLrqx2roIU4W2Vus-JMupg/preset:listing/plain/2dc3f50dcbd2fe45b31e232eece42d35-2857583644814330255.jpg"
            }
            width={500}
            height={500}
          />
        </div>
        <div className="body d-flex flex-column">
          <div>
            <p className="m-0 fs-6" style={{ color: "black" }}>
              Redmi Note 10 Pro 5G Dimen1100 ~775K Antutu
            </p>
            <p style={{ color: "#c30909", fontWeight: "bold" }}>10000000đ</p>
          </div>
          <div className="sub-info">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="bi bi-geo-alt-fill  me-1"></i>Hà nội
              </span>
              <span className="ms-3">
                <i className="bi bi-calendar3 me-2"></i>3 ngày trước
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostComponent;
