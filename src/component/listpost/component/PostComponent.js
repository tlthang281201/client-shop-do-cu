"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.css";
import moment from "moment";
import { formatter } from "@/utils/format-currency";
import CreateSlug from "@/utils/create-slug";
const PostComponent = ({ data }) => {
  moment.locale();
  return (
    <Link
      href={`${CreateSlug(data?.title)}-${data?.id}`}
      style={{ textDecoration: "none" }}
    >
      <div className="d-flex pt-3 flex-column  gap-2 mb-2">
        <div className="image">
          <Image
            alt="image"
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.images[0]}`}
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="body d-flex flex-column">
          <div>
            <p
              className="m-0 fs-6"
              style={{
                color: "black",
                lineHeight: "20px",
                maxHeight: "42px",
                height: "42px",
                overflow: "hidden",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
                display: "-webkit-box",
              }}
            >
              {data?.title}
            </p>
            <p style={{ color: "#c30909", fontWeight: "bold" }}>
              {data?.price ? formatter.format(data?.price) : "Thoả thuận"}
            </p>
          </div>
          <div className="sub-info">
            <div className="d-flex align-items-center text-nowrap">
              <span className="">
                <i className="bi bi-calendar3 me-1"></i>
                {/* {moment(data?.created_at, "YYYYMMDD").fromNow()} */}
                {moment(data?.created_at).format("DD/MM")}
              </span>
              <span
                className="ms-1"
                style={{ textOverflow: "ellipsis", overflow: "hidden" }}
              >
                <i className="bi bi-geo-alt-fill me-1"></i>
                {data?.city_id?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostComponent;
