"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftColumn = () => {
  const path = usePathname();
  return (
    <div className="bg-white mt-2">
      <div className="d-flex flex-row pt-3 pe-3 ps-3 align-items-center gap-3">
        <div className="border rounded-circle position-relative">
          <Image
            alt="a"
            src="https://a1.vnecdn.net/t71360687213249374259.png?w=60&h=60&s=dDaUYLRDxBW6j49R6JIlyg"
            width={84}
            height={84}
            className="rounded-circle p-1"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            className="position-absolute text-white border rounded-circle bg-gray"
            style={{ right: "35%", bottom: "0px" }}
          >
            <i className="bi bi-camera p-1"></i>
          </div>
        </div>
        <div className="d-flex flex-column gap-1">
          <div className="fw-bold">thang281201</div>
          <div style={{ color: "#757575", fontSize: "15px" }}>
            Tham gia từ: 10/10/2018
          </div>
          <div
            style={{ fontSize: "15px" }}
            className="d-flex flex-row align-items-center gap-2"
          >
            <i
              className="bi bi-coin"
              style={{ color: "#d13000", marginTop: "2px" }}
            ></i>
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
          href="/user/chi-tiet-tai-khoan"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("chi-tiet-tai-khoan")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "gray" }
          }
        >
          <div>Thông tin tài khoản</div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link
          href="/user/balances"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("balances")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "gray" }
          }
        >
          <div>Tài khoản đăng tin</div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link
          href="/user/balances"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("quan-ly-tin-dang")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "gray" }
          }
        >
          <div>Quản lý tin đăng</div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link
          href="/user/chi-tiet-tai-khoan"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("lich-su-giao-dich")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "gray" }
          }
        >
          <div>Lịch sử giao dịch</div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link
          href="/user/chi-tiet-tai-khoan"
          className="d-flex flex-row justify-content-between mb-2 pb-2 border-bottom text-decoration-none"
          style={
            path.includes("quan-ly-tin-luu")
              ? { color: "#FF5757", fontWeight: "bold" }
              : { color: "gray" }
          }
        >
          <div>Quản lý tin lưu</div>
          <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default LeftColumn;
