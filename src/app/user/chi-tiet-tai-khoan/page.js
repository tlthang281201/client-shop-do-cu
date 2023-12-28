import LeftColumn from "@/component/account/manage/LeftColumn";
import AccountInformationComponent from "@/component/account/manage/account_information/AccountInformationComponent";
import Breadcumber from "@/component/breadcumber/Breadcumber";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Thông tin tài khoản`,
  };
}
const UserInformationPage = () => {
  return (
    <Container>
      <Breadcumber />
      <Row>
        <Col lg={4}>
          <LeftColumn />
        </Col>
        <Col lg={8}>
          <AccountInformationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default UserInformationPage;
