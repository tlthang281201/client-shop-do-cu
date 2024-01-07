"use client";
import LeftColumn from "@/component/account/manage/LeftColumn";
import AccountInformationComponent from "@/component/account/manage/information/AccountInformationComponent";
import Breadcumber from "@/component/breadcumber/Breadcumber";
import { useUserContext } from "@/context/context";
import { currentUser } from "@/services/AuthService";
import { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
const UserInformationComponent = ({ session }) => {
  const { user, userSession } = useUserContext();

  return (
    <Container>
      <Breadcumber data={["Cài đặt tài khoản"]} />
      <Row>
        <Col lg={4}>
          <LeftColumn data={user} />
        </Col>
        <Col lg={8}>
          <AccountInformationComponent data={user} session={userSession} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserInformationComponent;
