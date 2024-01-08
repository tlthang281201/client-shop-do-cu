"use client";
import { useState } from "react";
import styles from "./styles.css";
import { Nav } from "react-bootstrap";
import CashWallet from "./tabs/CashWallet";
import CoinWallet from "./tabs/CoinWallet";
import NumberOfPushPost from "./tabs/NumberOfPushPost";
import NumberOfPost from "./tabs/NumberOfPost";
const AccountBalance = ({ coindata }) => {
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
        <h2 style={{ fontSize: "17px", fontWeight: "bold" }}>Ví bán hàng</h2>
      </div>
      <Nav variant="underline" defaultActiveKey="1" className="pb-1 mt-3">
        <Nav.Item onClick={() => handleSelect(1)}>
          <Nav.Link eventKey="1">Ví bán hàng</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(2)} className="ms-2">
          <Nav.Link eventKey="2">Đồng cũ</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item onClick={() => handleSelect(3)} className="ms-2">
          <Nav.Link eventKey="3">Lượt đẩy tin</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleSelect(4)} className="ms-2">
          <Nav.Link eventKey="4">Lượt đăng tin</Nav.Link>
        </Nav.Item> */}
      </Nav>
      {showTab.tab1 && <CashWallet />}
      {showTab.tab2 && <CoinWallet coindata={coindata} />}
      {/* {showTab.tab3 && <NumberOfPushPost coindata={coindata} />}
      {showTab.tab4 && <NumberOfPost coindata={coindata} />} */}
    </div>
  );
};

export default AccountBalance;
