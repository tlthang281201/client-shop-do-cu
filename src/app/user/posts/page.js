import LeftColumn from "@/component/account/manage/LeftColumn";
import ManagePostsComponent from "@/component/account/manage/posts/ManagePostsComponent";
import Breadcumber from "@/component/breadcumber/Breadcumber";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Quản lý tin đăng`,
  };
}
const ManagePostsPage = () => {
  return (
    <Container>
      <Breadcumber />
      <Row>
        <Col lg={4}>
          <LeftColumn />
        </Col>
        <Col lg={8}>
          <ManagePostsComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ManagePostsPage;
