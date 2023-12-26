"use client";
import PostComponent from "@/component/listpost/right/PostComponent";
import useWindowDimensions from "@/utils/window-dimension";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

const a = [1, 1, 1, 1, 1, 1, 1, 1];
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
        opacity: 0.5,
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

const SuggestedPost = () => {
  const { width } = useWindowDimensions();

  return (
    <section className="suggestions-area bg-white mt-2">
      <div className="box-title ps-3 pt-3">
        <h2 className="title">Gợi ý cho bạn</h2>
      </div>

      <Container>
        <Row>
          <Slider
            swipeToSlide={true}
            infinite
            slidesPerRow={
              width >= 992 ? 4 : width >= 768 && width <= 992 ? 3 : 2
            }
            slidesToScroll={1}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {a.map((value, i) => (
              <Col key={i} className="p-2">
                <PostComponent />
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default SuggestedPost;
