"use client";
import FilterComponent from "@/component/filter/FilterComponent";
import LeftPost from "@/component/listpost/left/LeftPost";
import RightPost from "@/component/listpost/right/RightPost";
import Slide from "@/component/slides/slides";
import { Col, Container, Row } from "react-bootstrap";

const Page = () => {
  return (
    <>
      <Container>
        <FilterComponent />
        <div className="mt-2">
          <Row>
            <Col lg={8} md={12} sm={12} xs={12}>
              <LeftPost title={"Tất cả"} />
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
              <RightPost />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Page;
