"use client";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import styles from "./styles.css";
import ShowingPosts from "./tabs/ShowingPosts";
import ApprovalPosts from "./tabs/ApprovalPosts";
import HiddenPosts from "./tabs/HiddenPosts";
import RejectedPosts from "./tabs/RejectedPosts";
const ManagePostsComponent = () => {
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
          Quản lý tin đăng
        </h2>
      </div>
      <Nav variant="underline" defaultActiveKey="1" className="pb-1 mt-3">
        <Nav.Item onClick={() => handleSelect(1)}>
          <Nav.Link eventKey="1">Đang hiển thị</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(2)} className="ms-2">
          <Nav.Link eventKey="2">Chờ duyệt</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(3)} className="ms-2">
          <Nav.Link eventKey="3">Đã ẩn</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(4)} className="ms-2">
          <Nav.Link eventKey="4">Bị từ chối</Nav.Link>
        </Nav.Item>
      </Nav>
      {showTab.tab1 && <ShowingPosts />}
      {showTab.tab2 && <ApprovalPosts />}
      {showTab.tab3 && <HiddenPosts />}
      {showTab.tab4 && <RejectedPosts />}
    </div>
  );
};

export default ManagePostsComponent;
