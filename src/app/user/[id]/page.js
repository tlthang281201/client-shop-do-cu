import Breadcumber from "@/component/breadcumber/Breadcumber";
import PostOfSeller from "@/component/profile_seller/PostOfSeller";
import Profile from "@/component/profile_seller/Profile";
import { Col, Container, Row } from "react-bootstrap";

const SellerProfile = () => {
  return (
    <Container>
      <Breadcumber />
      <div className="mt-3">
        <Row>
          <Col lg={3} md={3} sm={12} xs={12}>
            <Profile />
          </Col>
          <Col lg={9} md={9} sm={12} xs={12}>
            <PostOfSeller />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SellerProfile;
