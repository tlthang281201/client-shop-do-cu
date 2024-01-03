import Breadcumber from "@/component/breadcumber/Breadcumber";
import PaymentMethod from "@/component/topup/service/PaymentMethod";
import PostInfo from "@/component/topup/service/PostInfo";
import React from "react";
import { Container } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Thanh toán dịch vụ`,
  };
}
const TopUpServicePage = () => {
  return (
    <Container style={{ marginTop: "80px" }} className="ps-lg-5 pe-lg-5">
      <div className="bg-white pt-2">
        <Breadcumber />
        <hr />
        <div className="d-flex justify-content-center">
          <div
            className="pe-2 ps-2"
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <span className="fw-bold d-flex justify-content-center">
              Thanh toán Dịch vụ
            </span>
            <PostInfo />
            <p className="total">
              <span style={{ float: "left" }}>Thành tiền</span>
              <span
                style={{ float: "right", fontWeight: "bold", color: "#d0021b" }}
              >
                43.000
              </span>
            </p>
            <PaymentMethod />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopUpServicePage;
