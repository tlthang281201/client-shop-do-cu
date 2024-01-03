import Breadcumber from "@/component/breadcumber/Breadcumber";
import PostInfo from "@/component/dang-tin/result/PostInfo";
import ServiceInfo from "@/component/dang-tin/result/ServiceInfo";
import SuccessPost from "@/component/dang-tin/result/SuccessPost";
import React from "react";
import { Container } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Chợ Nhà Việt - Website Mua Bán Đồ Cũ`,
  };
}
const CreatePostSuccessPage = () => {
  return (
    <Container style={{ marginTop: "80px" }} className="ps-lg-5 pe-lg-5">
      <div className="bg-white pt-2">
        <Breadcumber />
        <hr />
        <SuccessPost />
        <PostInfo />
        <hr />
        <ServiceInfo />
      </div>
    </Container>
  );
};

export default CreatePostSuccessPage;
