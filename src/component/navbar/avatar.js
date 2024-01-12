"use client";
import { useUserContext } from "@/context/context";
import { logOut } from "@/services/Auth";
import { signOut } from "@/services/AuthService";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { Dropdown } from "react-bootstrap";

const AvatarDropdown = ({ user }) => {
  const { setUser } = useUserContext();
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
    deleteCookie("user");
    setUser(null);
    router.replace("/dang-nhap");
  };
  return (
    <Dropdown className="me-3">
      <Dropdown.Toggle
        variant="none"
        id="dropdown-basic"
        style={{
          width: "100%",
          maxWidth: "135px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          padding: 0,
        }}
        className="drop text-white"
      >
        <Image
          alt="avatar"
          src={user?.avatar}
          className="rounded-circle"
          width={30}
          height={30}
        />
        <span
          style={{
            fontSize: "13px",
            lineHeight: "30px",
            maxWidth: "105px",
          }}
          className="ms-2 d-none d-md-inline"
        >
          {user?.name}
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="dropdown-account mt-lg-2 mt-5"
        style={{ left: -50 }}
      >
        <Dropdown.Item
          onClick={() => router.push("/user/posts")}
          className="d-flex flex-row align-items-center gap-2"
        >
          <i
            className="bi bi-newspaper rounded-circle"
            style={{
              color: "white",
              backgroundColor: "#FF5757",
              padding: "2px 7px 2px 7px",
            }}
          ></i>
          Quản lý tin đăng
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex flex-row align-items-center gap-2"
          onClick={() => router.push("/user/balances")}
        >
          <Image
            src="https://static.chotot.com/storage/chotot-icons/svg/escrow.svg"
            width={30}
            height={30}
            alt="a"
          />
          Ví bán hàng
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex flex-row align-items-center gap-2"
          onClick={() => router.push("/user/orders/buyer")}
        >
          <Image
            src="https://static.chotot.com/storage/chotot-icons/svg/escrow_buy_orders.svg"
            width={30}
            height={30}
            alt="a"
          />
          Quản lý đơn mua
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex flex-row align-items-center gap-2"
          onClick={() => router.push("/user/orders/seller")}
        >
          <Image
            src="https://static.chotot.com/storage/chotot-icons/svg/escrow-orders.svg"
            width={30}
            height={30}
            alt="a"
          />
          Quản lý đơn bán
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex flex-row align-items-center gap-2"
          onClick={() => router.push("/user/transaction")}
        >
          <Image
            src="https://st.chotot.com/storage/chotot-icons/svg/circle-list.svg"
            width={30}
            height={30}
            alt="a"
          />
          Lịch sử giao dịch
        </Dropdown.Item>

        <Dropdown.Item
          className="d-flex flex-row align-items-center gap-2"
          onClick={() => router.push("/user/chi-tiet-tai-khoan")}
        >
          <Image
            src="https://static.chotot.com/storage/icons/svg/setting.svg"
            width={30}
            height={30}
            alt="a"
          />
          Cài đặt tài khoản
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex flex-row align-items-center gap-2"
          onClick={handleSignOut}
        >
          <Image
            src="https://static.chotot.com/storage/icons/svg/logout.svg"
            width={30}
            height={30}
            alt="a"
          />
          Đăng xuất
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AvatarDropdown;
