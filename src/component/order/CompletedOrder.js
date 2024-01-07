import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Image from "next/image";
import StatusOrder from "./component/StatusOrder";
import FormInfo from "./component/FormInfo";
const CompletedOrder = ({ status }) => {
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
              <Image src={"/images/completed.png"} width={170} height={170} />
              <div>
                <span style={{ fontStyle: "italic" }}>
                  Đơn hàng đã hoàn tất
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

export default CompletedOrder;
