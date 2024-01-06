"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LoginDropdown = () => {
  return (
    <Link
      href={`/dang-nhap`}
      className="d-flex align-items-center bg-none me-3 login text-decoration-none"
      style={{ fontSize: "13px", color: "white" }}
    >
      <i className="bi bi-person-circle fs-4" style={{ color: "white" }}></i>
      <span className="ms-2">Đăng nhập</span>
    </Link>
  );
};

export default LoginDropdown;
