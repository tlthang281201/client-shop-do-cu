"use client";

import Link from "next/link";
import { useState } from "react";

const NumberOfPost = ({ coindata }) => {
  const [option, setOption] = useState(coindata[0]?.id);
  const renderPack = (array) => {
    const pairs = [];
    for (let i = 0; i < array.length; i += 2) {
      // Tạo cặp phần tử
      const pair = array.slice(i, i + 2);
      // Tạo div chứa cặp phần tử
      const divPair = (
        <div key={i / 2} className="d-flex flex-column gap-3 deposit">
          {pair?.map((item, index) => (
            <button
              onClick={() => setOption(item.id)}
              key={index}
              className={`border p-3 rounded-2 text-nowrap ${
                option === item.id && "border-danger"
              }`}
            >
              Nạp {item.price} lượt đăng
            </button>
          ))}
        </div>
      );

      pairs.push(divPair);
    }
    return pairs;
  };
  const pairdiv = renderPack(coindata);
  return (
    <div className="mt-4">
      <div className="sodu">
        <span className="fw-bold">Số dư:</span>
        <span className="ms-5 fw-bold" style={{ color: "red" }}>
          0
        </span>
        <span className="ms-2">VND</span>
      </div>
      <div className="sodu mt-3">
        <span className="fw-bold">Nạp ví thanh toán:</span>
      </div>
      <div className="d-flex flex-row gap-5 mt-3" style={{ overflow: "auto" }}>
        {pairdiv}
      </div>

      <Link
        href={`/thanh-toan/${option}`}
        className="btn btn-danger mt-3 text-decoration-none"
      >
        Nạp ngay
      </Link>
    </div>
  );
};

export default NumberOfPost;
