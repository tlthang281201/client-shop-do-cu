"use client";
import LeftColumn from "@/component/account/manage/LeftColumn";
import ManagePostsComponent from "@/component/account/manage/posts/ManagePostsComponent";
import Breadcumber from "@/component/breadcumber/Breadcumber";
import { useUserContext } from "@/context/context";
import { getPostByUserId } from "@/services/PostServices";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ManagePost = () => {
  const { user } = useUserContext();

  return (
    <Container>
      <Breadcumber data={["Quản lý tin đăng"]} />
      <Row>
        <Col lg={4}>
          <LeftColumn data={user} />
        </Col>
        <Col lg={8}>
          <ManagePostsComponent user={user} />
        </Col>
      </Row>
    </Container>
  );
};

export default ManagePost;
