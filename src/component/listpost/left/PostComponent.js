import React from "react";
import Image from "next/image";
import { formatter } from "@/utils/format-currency";
import moment from "moment";
import Link from "next/link";
import CreateSlug from "@/utils/create-slug";
const PostComponent = ({ data }) => {
  return (
    <div
      className="d-flex pt-3 pb-3"
      style={{ borderBottom: "1px solid #DFE3ED" }}
    >
      <Link href={`/${CreateSlug(data?.title)}-${data?.id}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.images[0]}`}
          alt="a"
          width={220}
          height={135}
          style={{
            width: "220px",
            height: "135px",
            objectFit: "cover",
            maxWidth: "100%",
          }}
        />
      </Link>
      <div className="ps-3 w-100">
        <h3
          style={{
            fontSize: "17px",
            lineHeight: "20px",
            color: "#3c3241",
            maxHeight: "42px",
            overflow: "hidden",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            display: "-webkit-box",
          }}
        >
          {data?.title}
        </h3>
        <div style={{ margin: "0 0 4px" }}>
          <p
            style={{
              lineHeight: "25px",
              fontWeight: "bold",
              color: "red",
              margin: 0,
            }}
          >
            <span style={{ fontSize: "16px" }}>
              {data?.price ? formatter.format(data?.price) : "Thoả thuận"}
            </span>
          </p>
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "#757575",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            margin: 0,
            whiteSpace: "normal",
          }}
        >
          {data?.ward_id?.name}, {data?.district_id?.name},{" "}
          {data?.city_id?.name}
        </p>
        <div className="d-flex justify-content-between mt-2 align-items-center">
          <div
            style={{
              fontSize: "12px",
              lineHeight: "20px",
              color: "#757575",
            }}
          >
            {moment(data?.created_at).format("DD/MM/YYYY")}
          </div>
          {/* <span
            className="savepost me-3 d-none d-md-block d-lg-block"
            style={{
              fontSize: "12px",
              lineHeight: "20px",
              color: "#757575",
              cursor: "pointer",
            }}
          >
            Lưu tin
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bookmark"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
            </svg>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
