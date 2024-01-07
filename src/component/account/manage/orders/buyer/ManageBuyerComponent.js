"use client";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import styles from "../styles.css";
import { useUserContext } from "@/context/context";
import ApprovalOrder from "./tab/ApprovalOrder";
import ProcessingOrder from "./tab/ProcessingOrder";
import ShippingOrder from "./tab/ShippingOrder";
import CompletedOrder from "./tab/CompletedOrder";
import RejectedOrder from "./tab/RejectedOrder";
import { getAllBuyOrderByUserId } from "@/services/OrderService";

const ManageBuyerComponent = () => {
  const { user } = useUserContext();
  const [showTab, setShowTab] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
    tab5: false,
  });
  const handleSelect = (id) => {
    getAllOrder(user?.id);
    if (id === 1) {
      setShowTab({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
        tab5: false,
      });
    } else if (id === 2) {
      setShowTab({
        tab1: false,
        tab2: true,
        tab3: false,
        tab4: false,
        tab5: false,
      });
    } else if (id === 3) {
      setShowTab({
        tab1: false,
        tab2: false,
        tab3: true,
        tab4: false,
        tab5: false,
      });
    } else if (id === 4) {
      setShowTab({
        tab1: false,
        tab2: false,
        tab3: false,
        tab4: true,
        tab5: false,
      });
    } else if (id === 5) {
      setShowTab({
        tab1: false,
        tab2: false,
        tab3: false,
        tab4: false,
        tab5: true,
      });
    }
  };
  const [count, setCount] = useState({
    approval: 0,
    processing: 0,
    shipping: 0,
    completed: 0,
    reject: 0,
  });
  const getAllOrder = async (id) => {
    const { data: order } = await getAllBuyOrderByUserId(id);
    if (order) {
      setCount({
        ...count,
        approval: order.filter(
          (onep) => onep.status === 0 && onep.is_refund === false
        ).length,
        processing: order.filter(
          (onep) => onep.status === 1 && onep.is_refund === false
        ).length,
        shipping: order.filter(
          (onep) => onep.status === 2 && onep.is_refund === false
        ).length,
        completed: order.filter(
          (onep) => onep.status === 3 && onep.is_refund === false
        ).length,
        reject: order.filter(
          (onep) => onep.is_refund === true || onep.status === -1
        ).length,
      });
    }
  };
  useEffect(() => {
    getAllOrder(user?.id);
  }, [user]);
  return (
    <div className="bg-white mt-2 p-3 mb-5">
      <div className="border-3 border-bottom">
        <h2 style={{ fontSize: "17px", fontWeight: "bold" }}>
          Quản lý đơn mua
        </h2>
      </div>
      <Nav
        variant="underline"
        defaultActiveKey="1"
        className="pb-1 mt-3"
        navbarScroll={true}
      >
        <Nav.Item onClick={() => handleSelect(1)}>
          <Nav.Link eventKey="1">Chờ xác nhận ({count.approval})</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(2)} className="ms-2">
          <Nav.Link eventKey="2">Đang xử lý ({count.processing})</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(3)} className="ms-2">
          <Nav.Link eventKey="3">Đang giao ({count.shipping})</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(4)} className="ms-2">
          <Nav.Link eventKey="4">Đã giao ({count.completed})</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(5)} className="ms-2">
          <Nav.Link eventKey="5">
            Hoàn tiền/Đã từ chối ({count.reject})
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {showTab.tab1 && <ApprovalOrder refreshCount={getAllOrder} />}
      {showTab.tab2 && <ProcessingOrder refreshCount={getAllOrder} />}
      {showTab.tab3 && <ShippingOrder refreshCount={getAllOrder} />}
      {showTab.tab5 && <RejectedOrder />}
      {showTab.tab4 && <CompletedOrder />}
    </div>
  );
};

export default ManageBuyerComponent;
