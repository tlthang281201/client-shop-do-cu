"use client";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import styles from "./styles.css";
import ShowingPosts from "./tabs/ShowingPosts";
import ApprovalPosts from "./tabs/ApprovalPosts";
import HiddenPosts from "./tabs/HiddenPosts";
import RejectedPosts from "./tabs/RejectedPosts";
import { getPostByUserId } from "@/services/PostServices";
import SoldPosts from "./tabs/SoldPosts";
const ManagePostsComponent = ({ user }) => {
  const [showTab, setShowTab] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
    tab5: false,
  });
  const handleSelect = (id) => {
    getNumberOfPosts(user?.id);
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
    show: 0,
    approval: 0,
    hide: 0,
    sold: 0,
    reject: 0,
  });
  const getNumberOfPosts = async (id) => {
    const { data: post } = await getPostByUserId(id);
    if (post) {
      setCount({
        ...count,
        show: post.filter(
          (onep) =>
            onep.status === 1 &&
            onep.is_show === true &&
            onep.is_sold === false &&
            onep.is_selling === false
        ).length,
        approval: post.filter(
          (onep) =>
            onep.status === 0 && onep.is_show === true && onep.is_sold === false
        ).length,
        hide: post.filter((onep) => onep.is_show === false).length,
        sold: post.filter((onep) => onep.is_sold === true).length,
        reject: post.filter((onep) => onep.status === 2).length,
      });
    }
  };
  useEffect(() => {
    getNumberOfPosts(user?.id);
  }, [user]);

  return (
    <div className="bg-white mt-2 p-3 mb-5">
      <div className="border-3 border-bottom">
        <h2 style={{ fontSize: "17px", fontWeight: "bold" }}>
          Quản lý tin đăng
        </h2>
      </div>
      <Nav variant="underline" defaultActiveKey="1" className="pb-1 mt-3">
        <Nav.Item onClick={() => handleSelect(1)}>
          <Nav.Link eventKey="1">Đang hiển thị ({count.show})</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(2)} className="ms-2">
          <Nav.Link eventKey="2">Chờ duyệt ({count.approval})</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(3)} className="ms-2">
          <Nav.Link eventKey="3">Đã ẩn ({count.hide})</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item onClick={() => handleSelect(5)} className="ms-2">
          <Nav.Link eventKey="5">Đã bán ({count.sold})</Nav.Link>
        </Nav.Item> */}
        <Nav.Item onClick={() => handleSelect(4)} className="ms-2">
          <Nav.Link eventKey="4">Bị từ chối ({count.reject})</Nav.Link>
        </Nav.Item>
      </Nav>
      {showTab.tab1 && <ShowingPosts />}
      {showTab.tab2 && <ApprovalPosts />}
      {showTab.tab3 && <HiddenPosts />}
      {showTab.tab5 && <SoldPosts />}
      {showTab.tab4 && <RejectedPosts />}
    </div>
  );
};

export default ManagePostsComponent;
