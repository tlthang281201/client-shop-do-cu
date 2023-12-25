import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Profile = () => {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="d-flex flex-column p-3 rounded-3 border"
    >
      <div>
        <Image
          alt="avatar"
          src={"https://cdn.chotot.com/uac2/19351440"}
          width={92}
          height={92}
          style={{ maxWidth: "100%" }}
          className="rounded-circle"
        />
      </div>
      <div className="mt-3">
        <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>Hyt</h1>
        <div className="d-flex align-items-center ">
          <div className="d-flex align-items-center">
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>2</span>
            <div className="ms-1 d-flex">
              <Rating
                name="half-rating-read"
                defaultValue={4.4}
                precision={0.5}
                readOnly
                size="small"
              />
            </div>
          </div>

          <Link
            href={"#"}
            className="ms-1 text-decoration-none count-review"
            style={{ fontSize: "13px" }}
          >
            ( 21 đánh giá )
          </Link>
        </div>
      </div>
      <div className="mt-2">
        <div className="d-flex flex-row" style={{ fontSize: "14px" }}>
          <i className="bi bi-calendar3" style={{ color: "gray" }}></i>
          <span className="ms-1" style={{ color: "gray" }}>
            Đã tham gia:
          </span>
          <span className="ms-1">2 năm 9 tháng</span>
        </div>
        <div
          className="d-flex flex-row align-items-center mt-2"
          style={{ fontSize: "14px" }}
        >
          <i className="bi bi-geo-alt" style={{ color: "gray" }}></i>
          <span className="ms-1" style={{ color: "gray" }}>
            Địa chỉ:
          </span>
          <span className="ms-1">Hà Nội, Hải châu</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
