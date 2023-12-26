import Link from "next/link";
const LoginDropdown = () => {
  return (
    <Link
      href={`/dang-nhap`}
      className="d-flex align-items-center bg-white me-3 login text-decoration-none"
      style={{ fontSize: "13px", color: "black" }}
    >
      <i className="bi bi-person-circle fs-4" style={{ color: "gray" }}></i>
      <span className="ms-2">Đăng nhập</span>
    </Link>
  );
};

export default LoginDropdown;
