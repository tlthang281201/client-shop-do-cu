"use client";

import Link from "next/link";
import { useState } from "react";

const CoinWallet = ({ coindata }) => {
  return (
    <div className="mt-4 ">
      <div className="sodu">
        <span className="fw-bold">Số dư:</span>
        <span className="ms-5 fw-bold" style={{ color: "red" }}>
          0
        </span>
        <span className="ms-2">Đồng cũ</span>
      </div>
      <div className="sodu mt-3">
        <span className="fw-bold">Bảng giá nạp tiền Đồng Cũ:</span>
      </div>
      <div
        className="d-flex flex-row gap-2 mt-3 text-nowrap"
        style={{ overflowX: "auto", maxWidth: "100%" }}
      >
        {coindata.map((val, i) => (
          <div
            className={`border rounded-2 p-1`}
            style={{ textAlign: "center", minWidth: "180px" }}
          >
            <div
              className="pt-1"
              style={{ color: "#092353", fontWeight: "bold", fontSize: "16px" }}
            >
              Gói Đồng
            </div>
            <div
              className="mt-1 pt-2 pe-2 ps-2 pb-3 rounded-2"
              style={{ backgroundColor: "#F0F7FE", fontSize: "14px" }}
            >
              <div style={{ color: "#757575" }}>Giá 1.000.000 VNĐ</div>
              <div className="fw-bold text-wrap">Nhận được 1.100.000 Đồng Cũ</div>
            </div>
            <button
              className="btn btn-primary mt-2 mb-2"
              style={{ backgroundColor: "#FF5757", border: "none" }}
            >
              Nạp ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinWallet;
