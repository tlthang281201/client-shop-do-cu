import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Image from "next/image";
import StatusOrder from "./component/StatusOrder";
import FormInfo from "./component/FormInfo";
const AcceptedOrder = ({ status }) => {
  return (
    <Container>
      <Row>
        <Col lg={8} md={8} sm={12} xs={12}>
          <div className="bg-white">
            <div className="p-3 pt-4">
              <h5 className="fw-bold">Thông tin đơn hàng</h5>
            </div>
            <StatusOrder status={status} />
            <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />
            <div className="d-flex flex-column align-items-center gap-3 justify-content-center">
              <Image src={"/images/check.png"} width={150} height={150} />
              <div>
                <span style={{ fontStyle: "italic" }}>
                  Đơn hàng đã xác nhận, đang đợi người bán giao hàng
                </span>
              </div>
            </div>
            <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />
            <FormInfo />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AcceptedOrder;
