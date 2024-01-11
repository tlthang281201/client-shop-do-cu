import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";

const SlickSlide = ({ data }) => {
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
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ backgroundColor: "#eee", padding: 0 }}
        >
          <Slider nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
            {data?.images?.map((value, index) => (
              <div key={index}>
                <Image
                  key={index}
                  alt="a"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${value}`}
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
        {/* <Col lg={3} md={3} sm={3} xs={3} className="d-none d-sm-block p-0">
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
            {data.images.map((value, index) => (
              <div key={index}>
                <Image
                  key={index}
                  alt="a"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${value}`}
                  style={{ width: "100% !important", objectFit: "contain" }}
                  width={200}
                  quality={80}
                  height={100}
                />
              </div>
            ))}
          </Slider>
        </Col> */}
      </Row>
    </div>
  );
};

export default SlickSlide;
