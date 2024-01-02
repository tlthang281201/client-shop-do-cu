import Breadcumber from "@/component/breadcumber/Breadcumber";
import React from "react";
import { Container } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Chợ Nhà Việt - Website Mua Bán Đồ Cũ`,
  };
}
const CreatePostSuccessPage = () => {
  return (
    <Container style={{ marginTop: "80px" }}>
      <div className="bg-white pt-2">
        <Breadcumber />
        <hr />
      </div>
    </Container>
  );
};

export default CreatePostSuccessPage;
