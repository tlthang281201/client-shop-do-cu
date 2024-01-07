"use client";
import React, { useState } from "react";
import styles from "./styles.css";
import { Button } from "react-bootstrap";
const PaymentMethod = () => {
  const [option, setOption] = useState(1);
  return (
    <div>
      <span>Chọn hình thức thanh toán</span>
      <ul className="ul-payment mt-2">
        <li onClick={() => setOption(1)} className={`li-payment `}>
          <div className={`li-item ${option === 1 && "active-option"} `}>
            {option === 1 && <i className="radio-fill"></i>}
            {option === 2 && <i className="radio"></i>}
            <span className="dc-coin"></span>
            <span className="ms-5">Đồng Cũ</span>
          </div>
        </li>
        <li onClick={() => setOption(2)} className={`li-payment `}>
          <div className={`li-item ${option === 2 && "active-option"} `}>
            {option === 2 && <i className="radio-fill"></i>}
            {option === 1 && <i className="radio"></i>}
            <span className="momo"></span>
            <span className="ms-5">Ví Momo</span>
          </div>
        </li>
      </ul>
      <Button
        className="mb-5"
        style={{
          backgroundColor: "#5a9e3f",
          width: "100%",
          border: "none",
          fontWeight: "bold",
        }}
      >
        THANH TOÁN
      </Button>
    </div>
  );
};

export default PaymentMethod;
