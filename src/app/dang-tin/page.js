import React from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.css";
import FormInput from "@/component/dang-tin/FormInput";
import { useUserContext } from "@/context/context";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: `Chợ Nhà Việt - Đăng tin`,
  };
}

const CreatePostPage = () => {
  let cookie = cookies();
  let user = cookie.get("user");
  if (!user) {
    return redirect("/dang-nhap");
  }

  return (
    <Container style={{ marginTop: "120px" }} className="ps-lg-5 pe-lg-5">
      <div className="bg-white">
        <div className="p-3">
          <h4
            className="fw-bold pb-2"
            style={{ borderBottom: "3px solid #FF5757" }}
          >
            ĐĂNG TIN
          </h4>
        </div>
        <div className="ps-5 pe-5">
          <FormInput />
        </div>
      </div>
    </Container>
  );
};

export default CreatePostPage;
