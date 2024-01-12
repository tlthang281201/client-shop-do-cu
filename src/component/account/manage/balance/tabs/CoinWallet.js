"use client";

import { useUserContext } from "@/context/context";
import { currentUser } from "@/services/AuthService";
import { formatDongCu } from "@/utils/format-currency";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CoinWallet = ({ coindata }) => {
  const router = useRouter();
  const { user } = useUserContext();
  const [coin, setCoin] = useState(0);
  const getBalance = async (id) => {
    const { data } = await currentUser(id);
    setCoin(data?.coin_wallet);
  };
  useEffect(() => {
    getBalance(user?.id);
  }, [user]);
  const handleClick = async (cash, coinid) => {
    const response = await fetch(
      "https://shop-do-cu.vercel.app/api/checkout/topup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user?.id,
          price: cash,
          coinid: coinid,
        }),
      }
    );

    const res = await response.json();
    console.log(res);
    router.push(res.url);
  };
  return (
    <div className="mt-4 ">
      <div className="sodu d-flex flex-row gap-5">
        <span className="fw-bold">Số dư:</span>
        <div className="d-flex flex-row gap-2 align-items-center">
          <span className="fw-bold" style={{ color: "red" }}>
            {formatDongCu(coin)}
          </span>
          <Image src="/images/coin.png" width={20} height={20} alt="a" />
        </div>
      </div>
      <div className="sodu mt-3">
        <span className="fw-bold">Bảng giá nạp tiền Đồng Cũ:</span>
      </div>
      <div
        className="d-flex flex-row gap-2 mt-3 text-nowrap"
        style={{ overflowX: "auto", maxWidth: "100%" }}
      >
        {coindata?.map((val, i) => (
          <div
            className={`border rounded-2 p-1`}
            style={{ textAlign: "center", minWidth: "180px" }}
          >
            {/* <div
              className="pt-1"
              style={{ color: "#092353", fontWeight: "bold", fontSize: "16px" }}
            >
              Gói {i + 1}
            </div> */}
            <div
              className="mt-1 pt-2 pe-2 ps-2 pb-3 rounded-2"
              style={{ backgroundColor: "#F0F7FE", fontSize: "14px" }}
            >
              <div style={{ color: "#757575" }}>
                Giá {formatDongCu(val?.price)} VNĐ
              </div>
              <div className="fw-bold text-wrap">
                Nhận được {formatDongCu(val?.coin)}{" "}
                <Image src="/images/coin.png" width={20} height={20} alt="a" />
              </div>
            </div>
            <button
              className="btn btn-primary mt-2 mb-2"
              onClick={() => handleClick(val?.price, val?.id)}
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
