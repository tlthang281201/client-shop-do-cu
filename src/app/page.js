import CategorySection from "@/component/category_menu";
import LeftPost from "@/component/listpost/left/LeftPost";
import RightPost from "@/component/listpost/right/RightPost";
import Slide from "@/component/slides/slides";
import { Col, Container, Row } from "react-bootstrap";
export default function Index() {
  return (
    <>
      <div className="d-none d-md-block">
        <Slide />
      </div>
      <div className="mt-2">
        <CategorySection />
      </div>
      <Container>
        <div className="mt-2">
          <Row>
            <Col lg={8} md={12} sm={12} xs={12}>
              <LeftPost title={"Bất động sản - giá giảm sâu"} />
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
              <RightPost />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
