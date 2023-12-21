"use client";
import React from "react";
import { Card } from "react-bootstrap";

const PostComponent = () => {
  return (
    <div className="d-flex pt-3" style={{ borderBottom: "1px solid #DFE3ED" }}>
      <Card style={{ width: "100%", border: "none" }}>
        <Card.Img
          variant="top"
          height={200}
          style={{ objectFit: "cover" }}
          src="https://i-raovat.vnecdn.net/2023/06/06/capture-1686046398.PNG?w=1280&h=768&q=100&dpr=1&rt=fit&g=no&wmi=&wmg=ce&wmo=50&wms=30&wmx=0&wmy=0&s=U5b2S7MnZjMc2J9D-0S1PA"
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
            Thu mua iphone ipad apple khoá icloud 10123010 icloud icloud
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
            1230012300đ
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
            Phường hỉa châu, Phường hỉa châu, Phường hỉa châu
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostComponent;
