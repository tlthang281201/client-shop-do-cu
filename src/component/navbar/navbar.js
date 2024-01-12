"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./navbar.css";
import { Button, Form } from "react-bootstrap";
import Link from "next/link";
import AvatarDropdown from "./avatar";
import LoginDropdown from "./login-dropdown";
import Image from "next/image";

import { useUserContext } from "@/context/context";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const NavbarHeader = () => {
  const { user } = useUserContext();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const router = useRouter();
  const [search, setSearch] = useState(keyword ? keyword : "");
  const handleSubmit = () => {
    router.push(`/tim-kiem?keyword=${search}`);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <>
      <Navbar
        expand={true}
        style={{ backgroundColor: "#FF5757" }}
        fixed="top"
        className="p-0"
      >
        <Container>
          <Navbar.Brand>
            <Link href={"/"}>
              <Image
                alt="a"
                className="d-none d-lg-block"
                src="/images/logo3.png"
                width={270}
                height={70}
                style={{ objectFit: "cover" }}
              />

              <Image
                src="/images/logo3.png"
                width={200}
                height={50}
                className="d-none d-sm-block d-lg-none"
                style={{ objectFit: "cover" }}
              />
              <Image
                src="/images/logo3.png"
                width={120}
                height={50}
                className="d-block d-sm-none"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="py-3">
            <Nav className="me-auto"></Nav>
            <div
              className="d-flex w-50 d-lg-block d-sm-none d-none me-lg-5"
              style={{ position: "relative" }}
            >
              <Form.Control
                type="search"
                placeholder="Nhập từ khoá để tìm kiếm"
                className="rounded-3"
                aria-label="Search"
                onKeyDown={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={() => handleSubmit()}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  position: "absolute",
                  right: 10,
                  bottom: 5,
                }}
              >
                <i className="bi bi-search" style={{ color: "#FF5757" }}></i>
              </button>
            </div>
            <Nav className="align-items-center">
              {user ? <AvatarDropdown user={user} /> : <LoginDropdown />}

              <Link
                href={user ? `/dang-tin` : `dang-nhap`}
                className="text-decoration-none"
              >
                <Button
                  className="d-flex align-items-center"
                  style={{ backgroundColor: "#c30909", border: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-square-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                  </svg>
                  Đăng tin
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar
        fixed="top"
        className="d-lg-none p-0"
        style={{ backgroundColor: "#FF5757", marginTop: "4rem" }}
      >
        <Container>
          <Form
            className="d-flex w-50 justify-content-center w-100 p-0 mb-2 mt-1"
            style={{ position: "relative" }}
          >
            <Form.Control
              type="search"
              placeholder="Nhập từ khoá để tìm kiếm"
              className="me-2 rounded-3 "
              aria-label="Search"
            />
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                position: "absolute",
                right: 15,
                bottom: 7,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search bg-"
                viewBox="0 0 16 16"
                style={{ color: "#FF5757" }}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarHeader;
