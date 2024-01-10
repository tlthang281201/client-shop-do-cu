"use client";
import CreateSlug from "@/utils/create-slug";
import { formatter } from "@/utils/format-currency";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

const PostComponent = ({ data }) => {
  return (
    <Link
      href={`/${CreateSlug(data?.title)}-${data?.id}`}
      style={{ textDecoration: "none" }}
    >
      <div className="d-flex pt-3 flex-md-column flex-xs-row gap-2 mb-2">
        <div className="image">
          <Image
            alt="image"
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.images[0]}`}
            width={500}
            height={500}
          />
        </div>
        <div className="body d-flex flex-column">
          <div>
            <p className="m-0 fs-6" style={{ color: "black" }}>
              {data?.title}
            </p>
            <p style={{ color: "red", fontWeight: "bold" }}>
              {data?.price ? formatter.format(data?.price) : "Thoả thuận"}
            </p>
          </div>
          <div className="sub-info">
            <div className="d-flex  align-items-center text-nowrap">
              <span>
                <i className="bi bi-calendar3 me-2"></i>
                {moment(data?.created_at).format("DD/MM/YYYY")}
              </span>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                <i className="bi bi-geo-alt-fill  ms-2"></i>
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
