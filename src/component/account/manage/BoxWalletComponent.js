import { formatDongCu, formatMoney, formatter } from "@/utils/format-currency";
import Image from "next/image";
import React from "react";

const BoxWalletComponent = ({ title, value, type }) => {
  return (
    <div
      className="border py-2 px-3 rounded-2"
      style={{ width: "50%", boxShadow: "0px 0px 6px rgba(0,0,0,0.15)" }}
    >
      <div>
        <span
          style={{ color: "#777777", fontSize: "0.95rem", lineHeight: "20px" }}
        >
          {title}
        </span>
      </div>
      <div className="d-flex flex-row mt-2 gap-2 align-items-center">
        <span
          style={{
            color: "#222222",
            fontSize: "1rem",
            lineHeight: "20px",
            fontWeight: "bold",
          }}
        >
          {type === "wallet" ? formatMoney(value) : formatDongCu(value)}
        </span>
        {type === "wallet" && (
          <Image src="/images/wallet.jpg" width={20} height={20} alt="a" />
        )}
        {type === "coin" && (
          <Image src="/images/coin.png" width={20} height={20} alt="a" />
        )}
      </div>
    </div>
  );
};

export default BoxWalletComponent;
