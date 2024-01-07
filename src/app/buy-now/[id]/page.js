import FormInputOrder from "@/component/buy-now/FormInput";
import StatusDeliveryComponent from "@/component/buy-now/StatusDeliveryComponent";
import { getPostById } from "@/services/PostServices";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Xác nhận đơn hàng`,
  };
}
const BuyNowPage = async ({ params }) => {
  let cookie = cookies();
  let user = cookie.get("user");
  if (!user) {
    return redirect("/dang-nhap");
  }
  const { data } = await getPostById(params.id);
  if (!data) {
    return redirect("/error/404");
  }
  if (data) {
    if (
      data.is_selling === true ||
      data.is_show === false ||
      data.is_sold === true ||
      data.status !== 1
    ) {
      return redirect("/error/404");
    }
  }
  return (
    <Container>
      <Row>
        <Col lg={8} md={8} sm={12} xs={12}>
          <div className="bg-white">
            <div className="p-3 pt-4">
              <h5 className="fw-bold">Xác nhận đơn hàng</h5>
            </div>
            <StatusDeliveryComponent />
            <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />
            <FormInputOrder data={data} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BuyNowPage;
