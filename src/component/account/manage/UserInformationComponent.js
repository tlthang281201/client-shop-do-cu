"use client";
import LeftColumn from "@/component/account/manage/LeftColumn";
import AccountInformationComponent from "@/component/account/manage/information/AccountInformationComponent";
import Breadcumber from "@/component/breadcumber/Breadcumber";

import { Col, Container, Row } from "react-bootstrap";
const UserInformationComponent = () => {
  //   const { user } = useUserContext();
  //   const path = usePathname();
  //   if (!user) {
  //     const uri = encodeURIComponent(process.env.NEXT_PUBLIC_ORGIN_URL + path);
  //     return redirect(`/dang-nhap?return=${uri}`);
  //   }

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

export default UserInformationComponent;
