"use client";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import styles from "./styles.css";
import PostPayment from "./tab/PostPayment";
import ServicePayment from "./tab/ServicePayment";
import WithdrawRequest from "./tab/WithdrawRequest";

const TransactionHistoryComponent = () => {
  const [showTab, setShowTab] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
  });
  const handleSelect = (id) => {
    if (id === 1) {
      setShowTab({ tab1: true, tab2: false, tab3: false, tab4: false });
    } else if (id === 2) {
      setShowTab({ tab1: false, tab2: true, tab3: false, tab4: false });
    } else if (id === 3) {
      setShowTab({ tab1: false, tab2: false, tab3: true, tab4: false });
    } else if (id === 4) {
      setShowTab({ tab1: false, tab2: false, tab3: false, tab4: true });
    }
  };
  return (
    <div className="bg-white mt-2 p-3 mb-5">
      <div className="border-3 border-bottom">
        <h2 style={{ fontSize: "17px", fontWeight: "bold" }}>
          Lịch sử giao dịch
        </h2>
      </div>
      <Nav variant="underline" defaultActiveKey="1" className="pb-1 mt-3">
        <Nav.Item onClick={() => handleSelect(1)}>
          <Nav.Link eventKey="1">Thanh toán đơn mua</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(2)}>
          <Nav.Link eventKey="2">Thanh toán dịch vụ</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(3)} className="ms-2">
          <Nav.Link eventKey="3">Lịch sử rút tiền</Nav.Link>
        </Nav.Item>
      </Nav>
      {showTab.tab1 && <PostPayment />}
      {showTab.tab2 && <ServicePayment />}
      {showTab.tab3 && <WithdrawRequest />}
    </div>
  );
};

export default TransactionHistoryComponent;
