"use client";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftColumn = () => {
  const path = usePathname();
  return (
    <div className="bg-white mt-2">
      <div className="d-flex flex-row pt-3 pe-3 ps-3 align-items-center gap-3">
        <label className="border rounded-circle position-relative">
          <Image
            alt="a"
            src="https://static.chotot.com/storage/marketplace/common/png/default_user.png"
            width={80}
            height={80}
            className="rounded-circle p-1"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            className="position-absolute text-white border rounded-circle bg-gray"
            style={{ right: "35%", bottom: "0px" }}
          >
            <i className="bi bi-camera p-1"></i>
            <input type="file" className="d-none" />
          </div>
        </label>
        <div className="d-flex flex-column gap-1">
          <div className="fw-bold">thang281201</div>
          <div className="d-flex flex-row align-items-center gap-2 flex-wrap">
            <span className="fw-bold" style={{ fontSize: "14px" }}>
              2.3
            </span>
            <Rating
              name="half-rating-read"
              defaultValue={4.4}
              precision={0.5}
              readOnly
              size="small"
            />
            <Link
              href="#"
              className="text-decoration-none "
              style={{ fontSize: "13px" }}
            >
              ( 6 đánh giá )
            </Link>
          </div>
          <div
            className="d-flex flex-row align-items-center gap-1 flex-wrap"
            style={{ color: "#757575", fontSize: "13px" }}
          >
            <i className="bi bi-calendar3"></i>
            <span>Tham gia từ:</span>
            <span>10/10/2018</span>
          </div>
          <div
            style={{ fontSize: "15px" }}
            className="d-flex flex-row align-items-center gap-2"
          >
            <Image src="/images/coin.png" width={20} height={20} />
            <div>
              Đồng cũ:{" "}
              <span style={{ color: "#d13000", fontWeight: "bold" }}>16</span>
            </div>
          </div>
        </div>
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
          href="/user/favorite"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("/user/favorite")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "black" }
          }
        >
          <div className="d-flex flex-row align-items-center gap-2">
            <Image
              src="https://static.chotot.com/storage/chotot-icons/svg/menu-saved-ad.svg"
              width={30}
              height={30}
              alt="a"
            />
            Tin đã lưu
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
