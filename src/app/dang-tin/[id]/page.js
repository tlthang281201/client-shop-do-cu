import Breadcumber from "@/component/breadcumber/Breadcumber";
import PostInfo from "@/component/dang-tin/result/PostInfo";
import ServiceInfo from "@/component/dang-tin/result/ServiceInfo";
import SuccessPost from "@/component/dang-tin/result/SuccessPost";
import { getPostById } from "@/services/PostServices";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { Container } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Chợ Nhà Việt - Website Mua Bán Đồ Cũ`,
  };
}
const CreatePostSuccessPage = async ({ params }) => {
  const { data } = await getPostById(params.id);
  const cookie = cookies();
  const id = JSON.parse(cookie.get("user").value).id;
  if (data.seller_id !== id) {
    return redirect("/error/403");
  }
  return (
    <Container style={{ marginTop: "80px" }} className="ps-lg-5 pe-lg-5">
      <div className="bg-white pt-2">
        <Breadcumber />
        <hr />
        <SuccessPost />
        <PostInfo data={data} />
        <hr />
        <ServiceInfo />
      </div>
    </Container>
  );
};

export default CreatePostSuccessPage;
