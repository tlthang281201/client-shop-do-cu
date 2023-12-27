"use client";
import Image from "next/image";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styles from "./styles.css";
function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
            alt="a"
            src={
              "https://cdn.chotot.com/admincentre/rll99oqimepkScsxNPzvFc8FBuNZWF6SD47F4QD_F3M/preset:raw/plain/9e0b12cc08494bec0a1aa4c3eafa7434-2857583462080118280.jpg"
            }
            width={1200}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            alt="a"
            src={
              "https://cdn.chotot.com/admincentre/c6JH9bZT1wUlMtXz8XY8ywIK2fUFhwoEkrLaN59dbC8/preset:raw/plain/1e4d357de784993463d16b866b76f595-2857519600084450230.jpg"
            }
            width={1200}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            alt="a"
            src={
              "https://cdn.chotot.com/admincentre/rll99oqimepkScsxNPzvFc8FBuNZWF6SD47F4QD_F3M/preset:raw/plain/9e0b12cc08494bec0a1aa4c3eafa7434-2857583462080118280.jpg"
            }
            width={1200}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Slide;
