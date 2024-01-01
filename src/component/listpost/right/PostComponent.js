"use client";
import React from "react";
import { Card } from "react-bootstrap";

const PostComponent = ({ data }) => {
  return (
    <div className="d-flex pt-3" style={{ borderBottom: "1px solid #DFE3ED" }}>
      <Card style={{ width: "100%", border: "none" }}>
        <Card.Img
          variant="top"
          height={200}
          style={{ objectFit: "cover" }}
          src={data?.image}
        />
        <Card.Body style={{ padding: "10px 0" }}>
          <Card.Title
            style={{
              fontSize: "17px",
              lineHeight: "20px",
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
              color: "#40A691",
              margin: 0,
              fontSize: "16px",
            }}
          >
            {data?.price} đ
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
            {data?.district}, {data?.ward}, {data?.city}
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostComponent;
