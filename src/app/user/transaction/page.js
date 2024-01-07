import LeftColumn from "@/component/account/manage/LeftColumn";
import TransactionHistoryComponent from "@/component/account/manage/transaction/TransactionHistoryComponent";
import Breadcumber from "@/component/breadcumber/Breadcumber";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Lịch sử giao dịch`,
  };
}
const TransactionHistoryPage = () => {
  return (
    <Container>
      <Breadcumber data={["Lịch sử giao dịch"]} />
      <Row>
        <Col lg={4}>
          <LeftColumn />
        </Col>
        <Col lg={8}>
          <TransactionHistoryComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionHistoryPage;
