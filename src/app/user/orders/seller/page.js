import LeftColumn from "@/component/account/manage/LeftColumn";
import ManageSellerComponent from "@/component/account/manage/orders/seller/ManageSellerComponent";
import Breadcumber from "@/component/breadcumber/Breadcumber";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Quản lý đơn bán`,
  };
}
const ManageSellerPage = () => {
  return (
    <Container>
      <Breadcumber data={["Quản lý đơn bán"]} />
      <Row>
        <Col lg={4}>
          <LeftColumn />
        </Col>
        <Col lg={8}>
          <ManageSellerComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ManageSellerPage;
