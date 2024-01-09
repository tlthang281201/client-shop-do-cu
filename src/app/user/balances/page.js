import LeftColumn from "@/component/account/manage/LeftColumn";
import AccountBalance from "@/component/account/manage/balance/AccountBalance";
import Breadcumber from "@/component/breadcumber/Breadcumber";
import { getCoin } from "@/services/TopUpServices";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Ví bán hàng`,
  };
}
export const revalidate = 0;

const UserBalancePage = async () => {
  const { data: coinData } = await getCoin();

  return (
    <Container>
      <Breadcumber data={["Ví bán hàng"]} />
      <Row>
        <Col lg={4}>
          <LeftColumn />
        </Col>
        <Col lg={8}>
          <AccountBalance coindata={coinData} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserBalancePage;
