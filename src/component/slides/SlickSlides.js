import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
const image = [
  "https://cdn.chotot.com/VMzX0LKcVh5pQq5shnMJK4HZk3waaEBBzX0qbloUDlE/preset:view/plain/862775dfb298cc947823cbfe3995fb57-2858878959461941414.jpg",
  "https://cdn.chotot.com/EAq46j8z9iW8b7GxcnvchfsnesuufHyROATpJT2jwSE/preset:view/plain/2216de6eb0b3623cb8080aeea4be382a-2858878959234503436.jpg",
  "https://cdn.chotot.com/UsyRC2wCMAueiKmTD7Xq8buURB7U7BL03miFr-iHMRI/preset:view/plain/f2e46f9c9f4d90f1c88da21ab436b4e5-2858878958721100657.jpg",
  "https://cdn.chotot.com/TiPTY5Vt_eDZidvajklLJA_4lB4TDNF1UE2A_PbckHY/preset:view/plain/2e4d0ea8402b87322230efe0b74ea338-2858878959339716756.jpg",
];
const SlickSlide = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  let slider1 = null;
  let slider2 = null;

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          top: "50%",
          right: 0,
          zIndex: 999,
          width: "40px",
          height: "40px",
          padding: 5,
          position: "absolute",
          color: "white",
          transform: "translate(0, -50%)",
          cursor: "pointer",
          border: "none",
          outline: "none",
          background: "#000",
          opacity: 0.2,
        }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          top: "50%",
          left: 0,
          zIndex: 999,
          width: "40px",
          height: "40px",
          padding: 5,
          position: "absolute",
          color: "white",
          transform: "translate(0, -50%)",
          cursor: "pointer",
          border: "none",
          outline: "none",
          background: "#000",
          opacity: 0.2,
        }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </div>
    );
  };

  return (
    <div>
      <Row>
        <Col
          lg={9}
          md={9}
          sm={9}
          xs={12}
          style={{ backgroundColor: "#eee", padding: 0 }}
        >
          <Slider
            asNavFor={nav2}
            ref={(slider) => (slider1 = slider)}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {image.map((value, index) => (
              <div key={index}>
                <Image
                  key={index}
                  alt="a"
                  src={value}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  width={1000}
                  quality={80}
                  height={330}
                />
              </div>
            ))}
          </Slider>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3} className="d-none d-sm-block p-0">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (slider2 = slider)}
            slidesToShow={3}
            vertical
            swipeToSlide={true}
            focusOnSelect={true}
            nextArrow={<></>}
            prevArrow={<></>}
            accessibility={false}
          >
            {image.map((value, index) => (
              <div key={index}>
                <Image
                  key={index}
                  alt="a"
                  src={value}
                  style={{ width: "100% !important", objectFit: "contain" }}
                  width={200}
                  quality={80}
                  height={100}
                />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default SlickSlide;
