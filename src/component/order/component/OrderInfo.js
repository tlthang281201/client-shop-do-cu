import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormInfo from "./FormInfo";
import StatusOrder from "./StatusOrder";
import Image from "next/image";

const OrderInfo = () => {
  return (
    <Container>
      <Row>
        <Col lg={8} md={8} sm={12} xs={12}>
          <div className="bg-white">
            <div className="p-3 pt-4">
              <h5 className="fw-bold">Trạng thái đơn hàng</h5>
            </div>
            <StatusOrder status={-1} />
            <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />
            <div className="d-flex flex-column align-items-center gap-3 justify-content-center">
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/1027/1027650.png"}
                width={150}
                height={150}
              />
              <div>
                <span style={{ fontStyle: "italic" }}>
                  Đang chờ người bán xác nhận đơn hàng
                </span>
              </div>
            </div>
            <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />
            <div>a</div>
            <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />
            <FormInfo />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderInfo;
