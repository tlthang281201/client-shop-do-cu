"use client";
import CreateSlug from "@/utils/create-slug";
import { formatter } from "@/utils/format-currency";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

const PostComponent = ({ data }) => {
  return (
    <Link
      href={`/${CreateSlug(data.title)}-${data.id}`}
      className="d-flex pt-3 text-decoration-none"
      style={{ borderBottom: "1px solid #DFE3ED" }}
    >
      <Card style={{ width: "100%", border: "none" }}>
        <Card.Img
          variant="top"
          height={200}
          style={{ objectFit: "cover" }}
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.images[0]}`}
        />
        <Card.Body style={{ padding: "10px 0" }}>
          <Card.Title
            style={{
              fontSize: "17px",
              lineHeight: "20px",
              height: "42px",
              maxHeight: "42px",
              overflow: "hidden",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
              display: "-webkit-box",
            }}
          >
            {data?.title}
          </Card.Title>
          <p
            style={{
              lineHeight: "25px",
              fontWeight: "bold",
              color: "#d92c37",
              margin: 0,
              fontSize: "16px",
            }}
          >
            {data?.price ? formatter.format(data?.price) : "Thoả thuận"}
          </p>
          <span
            style={{
              fontSize: "14px",
              color: "#757575",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
          >
            {data?.district_id.name}, {data?.city_id.name}
          </span>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PostComponent;
