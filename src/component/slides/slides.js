"use client";
import Image from "next/image";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styles from "./styles.css";
function Slide({ data }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data?.map((val, i) => (
          <Carousel.Item key={i}>
            <Image
              alt="a"
              src={val.url}
              width={1200}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Slide;
