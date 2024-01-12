import { Rating } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Profile = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="d-flex flex-column p-3 rounded-3 border mb-5"
    >
      <div>
        <Image
          alt="avatar"
          src={data?.avatar}
          width={92}
          height={92}
          style={{ maxWidth: "100%" }}
          className="rounded-circle"
        />
      </div>
      <div className="mt-3">
        <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>{data?.name}</h1>
        <div className="d-flex align-items-center ">
          <div className="d-flex align-items-center">
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              {data?.number_reviews > 0
                ? data?.rating / data?.number_reviews
                : 0}
            </span>
            <div className="ms-1 d-flex">
              <Rating
                name="half-rating-read"
                value={
                  data?.number_reviews > 0
                    ? data?.rating / data?.number_reviews
                    : 0
                }
                precision={0.5}
                readOnly
                size="small"
              />
            </div>
          </div>
          {data?.number_reviews === 0 && (
            <span style={{ fontSize: "13px" }} className="text-secondary mt-1">
              (Chưa có đánh giá)
            </span>
          )}
          {data?.number_reviews > 0 && (
            <Link
              href={`/user/danh-gia/${data?.id}`}
              className="ms-1 text-decoration-none count-review"
              style={{ fontSize: "13px" }}
            >
              ( {data?.number_reviews} đánh giá )
            </Link>
          )}
        </div>
      </div>
      <div className="mt-2">
        <div className="d-flex flex-row" style={{ fontSize: "14px" }}>
          <i className="bi bi-calendar3" style={{ color: "gray" }}></i>
          <span className="ms-1" style={{ color: "gray" }}>
            Đã tham gia:
          </span>
          <span className="ms-1">
            {moment(data?.created_at).format("DD/MM/YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
