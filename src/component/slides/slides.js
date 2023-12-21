"use client";
import Image from "next/image";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

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
            src={
              "https://www.shutterstock.com/image-vector/webinar-horizontal-banner-design-template-600nw-2161997983.jpg"
            }
            style={{ width: "100% !important" }}
            width={2000}
            quality={80}
            height={300}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={
              "https://www.shutterstock.com/image-vector/webinar-horizontal-banner-design-template-600nw-2161997983.jpg"
            }
            width={2000}
            height={300}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={
              "https://www.shutterstock.com/image-vector/webinar-horizontal-banner-design-template-600nw-2161997983.jpg"
            }
            width={2000}
            height={300}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Slide;
