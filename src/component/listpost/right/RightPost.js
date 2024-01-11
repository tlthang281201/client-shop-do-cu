import React from "react";
import style from "./styles.css";
import PostComponent from "./PostComponent";
import { Col, Row } from "react-bootstrap";
import { getAllPostByCategory } from "@/services/PostServices";
const posts = [
  {
    title: "Redmi K40 12/256G máy đẹp",
    image:
      "https://cdn.chotot.com/CM7mwnOFPJgBta2ct1Pe9bRdKwuqAy_n73dkc8atx-k/preset:view/plain/c6a4a403cc0e156bfec0a2b1cf80312f-2858888749170481477.jpg",
    price: "2.500.000",
    city: "Thành phố đà nẵng",
    district: "Quận Hải Châu",
    ward: "phường Hải Châu 2",
  },
  {
    title: "iPhone XsMax 64G máy quốc tế",
    image:
      "https://cdn.chotot.com/g_XQF92xedlwpTe1vorYQ4PutSAAQXjCkf6iau7Sevw/preset:view/plain/7edc6d75ba9bd222ddbd508414558fe3-2858581736386343745.jpg",
    price: "3.850.000",
    city: "Hà Nội",
    district: "Quận Cầu Giấy",
    ward: "Phường Trung Hoà",
  },
];
const RightPost = async ({ id }) => {
  const { data } = await getAllPostByCategory(id);
  return (
    <div style={{ backgroundColor: "white" }} className="p-3">
      <div
        className="d-flex align-items-center justify-content-between mb-1"
        style={{ borderBottom: "3px solid #F2F5F8" }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Tin đăng nổi bật
        </h2>
        <span style={{ fontSize: "13px", color: "gray" }}>Xem tất cả</span>
      </div>
      <div className="mb-2">
        <Row>
          {data?.map((item, i) => (
            <Col key={i} lg={12} md={6} sm={6} xs={6}>
              <PostComponent data={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RightPost;
