import LeftColumn from "@/component/account/manage/LeftColumn";
import ManageBuyerComponent from "@/component/account/manage/orders/buyer/ManageBuyerComponent";
import Breadcumber from "@/component/breadcumber/Breadcumber";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Quản lý đơn mua`,
  };
}
const ManageBuyerPage = () => {
  return (
    <Container>
      <Breadcumber data={["Quản lý đơn mua"]} />
      <Row>
        <Col lg={4}>
          <LeftColumn />
        </Col>
        <Col lg={8}>
          <ManageBuyerComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ManageBuyerPage;
