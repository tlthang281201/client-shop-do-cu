"use client";
import { formatter } from "@/utils/format-currency";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const SuccessComponent = ({ data }) => {
  const router = useRouter();
  return (
    <div className="mt-2 bg-white p-3 mb-5 pb-5">
      <div
        style={{
          fontWeight: "bold",
          fontSize: "19px",
          borderBottom: "3px solid #FF5757",
        }}
      >
        Thanh toán thành công
      </div>
      <div className="p-3">
        <p>
          Xin chào <span className="fw-bold">{data?.user.name}</span>
        </p>
        <p className="alert alert-success">
          Bạn vừa thanh toán đơn hàng thành công qua ví điện tử Momo
        </p>
        <p className="fw-bold">Thông tin giao dịch</p>
        <p>
          - Mã giao dịch <span className="fw-bold">{data?.id}</span>
        </p>
        <p>
          - Nội dung: <span className="fw-bold">{data?.content}</span>
        </p>
        <p>
          - Số tiền đã thanh toán:{" "}
          <span className="fw-bold">{formatter.format(data?.total)}</span>
        </p>
        <p>
          - Trạng thái thanh toán:{" "}
          <span className="fw-bold text-success">Thành công</span>
        </p>
      </div>
      <div className="d-flex flex-row gap-2 px-3">
        <Button
          variant="contained"
          color="warning"
          style={{ fontStyle: "normal" }}
          onClick={() => router.push("/user/transaction")}
          startIcon={<i className="bi bi-arrow-counterclockwise"></i>}
        >
          Lịch sử giao dịch
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/")}
          style={{ fontStyle: "normal" }}
          startIcon={<i className="bi bi-house-door-fill"></i>}
        >
          Trang chủ
        </Button>
      </div>
    </div>
  );
};

export default SuccessComponent;
