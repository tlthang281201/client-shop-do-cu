"use client";
import { CircularProgress, Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BoxWalletComponent from "./BoxWalletComponent";
import moment from "moment";
import { upImage } from "@/utils/utils";
import { useUserContext } from "@/context/context";
import { updateAvatar } from "@/services/AuthService";
import { use, useEffect, useState } from "react";

const LeftColumn = () => {
  const path = usePathname();
  const [loading, setLoading] = useState(false);
  const { user } = useUserContext();
  const { userSession, getUserInfo } = useUserContext();
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      setLoading(true);
      const fileName = await upImage(file);
      const data = await updateAvatar(
        `https://weeevlktjgkhinnqsmai.supabase.co/storage/v1/object/public/post_images/avatar/${fileName}`,
        user.id
      );
      getUserInfo();
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className="bg-white mt-2">
      <div className="d-flex flex-row pt-3 pe-3 ps-3 align-items-center gap-3">
        <label className="border rounded-circle position-relative">
          <Image
            alt="a"
            src={
              user
                ? user.avatar
                : "https://static.chotot.com/storage/marketplace/common/png/default_user.png"
            }
            width={80}
            height={80}
            className="rounded-circle p-1 "
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                color: "white",
                top: "50%",
                left: "50%",
                marginLeft: "-12px",
                marginTop: "-13px",
              }}
            />
          )}
          <div
            className="position-absolute text-white border rounded-circle bg-gray"
            style={{ right: "35%", bottom: "0px" }}
          >
            <i className="bi bi-camera p-1"></i>
            <input
              type="file"
              onChange={handleFileUpload}
              accept="image/png, image/jpg, image/jpeg"
              className="d-none"
            />
          </div>
        </label>
        <div className="d-flex flex-column gap-1">
          <div className="fw-bold">{user?.name}</div>
          <div className="d-flex flex-row align-items-center gap-2 flex-wrap">
            <span className="fw-bold" style={{ fontSize: "14px" }}>
              {user?.number_reviews > 0
                ? user?.rating / user?.number_reviews
                : 0}
            </span>
            <Rating
              name="half-rating-read"
              value={
                user?.number_reviews > 0
                  ? user?.rating / user?.number_reviews
                  : 0
              }
              precision={0.5}
              readOnly
              size="small"
            />
            {user?.rating === 0 && (
              <span style={{ fontSize: "13px" }} className="text-secondary">
                (Chưa có đánh giá)
              </span>
            )}
            {user?.rating !== 0 && (
              <Link
                href={`/user/danh-gia/${user?.id}`}
                className="text-decoration-none "
                style={{ fontSize: "13px" }}
              >
                ( {user?.number_reviews} đánh giá )
              </Link>
            )}
          </div>
          <div
            className="d-flex flex-row align-items-center gap-1 flex-wrap"
            style={{ color: "#757575", fontSize: "13px" }}
          >
            <i className="bi bi-calendar3"></i>
            <span>Tham gia từ:</span>
            <span>{moment(user?.created_at).format("DD/MM/YYYY")}</span>
          </div>

          {/* <div
            style={{ fontSize: "15px" }}
            className="d-flex flex-row align-items-center gap-2"
          >
            <Image src="/images/coin.png" width={20} height={20} />
            <div>
              Đồng cũ:{" "}
              <span style={{ color: "#d13000", fontWeight: "bold" }}>16</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="d-flex flex-row px-3 pt-2 gap-2">
        <BoxWalletComponent
          title={"Ví Bán Hàng"}
          value={user ? user?.cash_wallet : 0}
          type="wallet"
        />
        <BoxWalletComponent
          title={"Đồng Cũ"}
          value={user ? user?.coin_wallet : 0}
          type="coin"
        />
      </div>
      <hr className="ms-3 me-3 border-3" />
      <div className="d-flex flex-column pe-3 ps-3 pb-3">
        <Link
          href="/user/balances"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("balances")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "black" }
          }
        >
          <div className="d-flex flex-row align-items-center gap-2">
            <Image
              src="https://static.chotot.com/storage/chotot-icons/svg/escrow.svg"
              width={30}
              height={30}
              alt="a"
            />
            Ví bán hàng
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link
          href="/user/posts"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("/user/posts")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "black" }
          }
        >
          <div className="d-flex flex-row align-items-center gap-2">
            <div>
              <i
                className="bi bi-newspaper rounded-circle px-2"
                style={{
                  color: "white",
                  backgroundColor: "#FF5757",
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
              ></i>
            </div>
            Quản lý tin đăng
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link
          href="/user/orders/buyer"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("/user/orders/buyer")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "black" }
          }
        >
          <div className="d-flex flex-row align-items-center gap-2">
            <Image
              src="https://static.chotot.com/storage/chotot-icons/svg/escrow_buy_orders.svg"
              width={30}
              height={30}
              alt="a"
            />
            Quản lý đơn mua
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link
          href="/user/orders/seller"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("/user/orders/seller")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "black" }
          }
        >
          <div className="d-flex flex-row align-items-center gap-2">
            <Image
              src="https://static.chotot.com/storage/chotot-icons/svg/escrow-orders.svg"
              width={30}
              height={30}
              alt="a"
            />
            Quản lý đơn bán
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link
          href="/user/transaction"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("/user/transaction")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "black" }
          }
        >
          <div className="d-flex flex-row align-items-center gap-2">
            <Image
              src="https://st.chotot.com/storage/chotot-icons/svg/circle-list.svg"
              width={30}
              height={30}
              alt="a"
            />
            Lịch sử giao dịch
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>

        <Link
          href="/user/chi-tiet-tai-khoan"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("chi-tiet-tai-khoan")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "black" }
          }
        >
          <div className="d-flex flex-row align-items-center gap-2">
            <Image
              src="https://static.chotot.com/storage/icons/svg/setting.svg"
              width={30}
              height={30}
              alt="a"
            />
            Cài đặt tài khoản
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default LeftColumn;
