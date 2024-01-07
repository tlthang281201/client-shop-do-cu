import LeftColumn from "@/component/account/manage/LeftColumn";
import FavoritePostsComponent from "@/component/account/manage/favorite/FavoritePostsComponent";
import Breadcumber from "@/component/breadcumber/Breadcumber";
import { useUserContext } from "@/context/context";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Quản lý tin lưu`,
  };
}
const FavoritePostsPage = () => {
  return (
    <Container>
      <Breadcumber data={["Tin đã lưu"]} />
      <Row>
        <Col lg={4}>
          <LeftColumn />
        </Col>
        <Col lg={8}>
          <FavoritePostsComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritePostsPage;
