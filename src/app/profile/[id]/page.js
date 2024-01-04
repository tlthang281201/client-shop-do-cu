import Breadcumber from "@/component/breadcumber/Breadcumber";
import PostOfSeller from "@/component/profile_seller/PostOfSeller";
import Profile from "@/component/profile_seller/Profile";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Trang cá nhân của ai`,
  };
}
const SellerProfile = () => {
  return (
    <>
      <Container>
        <Breadcumber />
      </Container>
      <Container className="con">
        <div className="mt-3 pb-3">
          <Row>
            <Col lg={4} md={4} sm={12} xs={12} className="mb-3 ">
              <Profile />
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <PostOfSeller />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SellerProfile;
