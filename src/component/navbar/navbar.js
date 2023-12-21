"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./navbar.css";
import { Button, Form } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <Navbar expand={true} className="bg-white">
        <Container>
          <Navbar.Brand>
            <Link href={"/"}>
              <svg
                width="151"
                height="45"
                viewBox="0 0 151 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.3875 37.0499H5.62498C2.51249 37.0499 0 34.5374 0 31.4249V5.62498C0 2.51249 2.51249 0 5.62498 0H14.8125C19.0124 0 23.1375 1.08751 26.6625 3.3375C26.8875 3.4875 27.0749 3.59999 27.2624 3.74999C33.4499 7.98747 37.0499 15.15 37.0499 22.6499V31.4249C37.0499 34.5374 34.5374 37.0499 31.4249 37.0499H31.0124L26.7374 30.4124L23.3999 25.0499C25.1249 24.5999 26.6249 23.5874 27.7499 22.1999C29.2874 20.3249 30.1124 17.9624 30.0374 15.5624C30.0374 13.875 29.6624 12.1875 28.9124 10.6875C27.6749 8.06247 25.2749 6.11248 22.4249 5.43748C21.1125 5.13748 19.7249 5.02499 18.3749 5.02499C18.2249 5.02499 18.075 5.02499 17.925 5.02499H7.35001V37.0499H7.3875ZM25.0124 37.0499H12.3V9.93747H17.2125C17.4375 9.93747 17.6625 9.93747 17.925 9.93747C19.0875 9.93747 20.25 10.05 21.4125 10.275C22.05 10.4625 22.6125 10.7625 23.1 11.2125C23.7 11.7375 24.15 12.375 24.4499 13.125C24.7874 13.95 24.9374 14.8124 24.9374 15.6749C24.9749 17.0249 24.45 18.2999 23.475 19.1999C22.9875 19.6499 22.3874 20.0249 21.7499 20.2499C21.1124 20.4749 20.4375 20.6249 19.725 20.6249C19.65 20.6249 19.5749 20.6249 19.4999 20.6249H14.8875L25.0124 37.0499ZM37.0499 10.35C36.9374 10.0125 36.7874 9.63746 36.6374 9.29996C34.9124 5.21248 31.6499 1.94998 27.5624 0.22499C27.3749 0.14999 27.1875 0.0749998 27.0375 0H31.4249C34.5374 0 37.0499 2.51249 37.0499 5.62498V10.35Z"
                  fill="#40A691"
                ></path>
                <path
                  d="M122.699 36.8623C119.737 36.8623 116.812 35.6623 114.674 33.5623C112.424 31.4623 111.187 28.4623 111.262 25.3498C111.187 22.2373 112.462 19.2748 114.749 17.1749C116.924 15.0749 119.962 13.8749 122.999 13.9499C125.662 13.9499 127.837 14.6624 129.599 16.1249V14.4749H134.399V36.3748H129.599V34.6498C127.837 36.1123 125.624 36.8248 122.999 36.8248C122.849 36.8623 122.774 36.8623 122.699 36.8623ZM122.699 18.4499C120.937 18.4499 119.212 19.1624 117.937 20.4373C116.624 21.7498 115.912 23.5873 115.987 25.4248V25.4623V25.4998C115.949 27.3373 116.662 29.0998 117.937 30.4123C119.249 31.6873 121.049 32.3998 122.887 32.3623H122.924H122.962C124.762 32.3998 126.524 31.6498 127.762 30.3373C129.037 29.0248 129.749 27.2623 129.712 25.4623V24.8998C129.599 23.2873 128.924 21.7123 127.762 20.5498C126.524 19.1998 124.762 18.4498 122.962 18.4873H122.924H122.887C122.849 18.4498 122.774 18.4499 122.699 18.4499ZM51.7122 36.8623C48.7497 36.8623 45.8247 35.6623 43.6872 33.5623C41.4372 31.4623 40.1997 28.4623 40.2747 25.3498C40.1997 22.2373 41.4747 19.2748 43.7622 17.1749C45.9372 15.0749 48.9372 13.8749 52.0122 13.9499C54.6747 13.9499 56.8497 14.6624 58.6122 16.1249V14.4749H63.4122V36.3748H58.6122V34.6498C56.8497 36.1123 54.6372 36.8248 52.0122 36.8248C51.8622 36.8623 51.7872 36.8623 51.7122 36.8623ZM51.7122 18.4499C49.9497 18.4499 48.2247 19.1624 46.9497 20.4373C45.6372 21.7498 44.9247 23.5873 44.9997 25.4248V25.4623V25.4998C44.9622 27.3373 45.6747 29.0998 46.9497 30.4123C48.2622 31.6873 50.0622 32.3998 51.8997 32.3623H51.9372H51.9747C53.7747 32.3998 55.5372 31.6498 56.7747 30.3373C58.0496 29.0248 58.7622 27.2623 58.7247 25.4623V25.4248V25.3873C58.7622 23.5873 58.0496 21.7873 56.7747 20.5124C55.5372 19.1624 53.7747 18.4124 51.9747 18.4499H51.9372H51.8997C51.8622 18.4499 51.7872 18.4499 51.7122 18.4499ZM77.0621 36.8623C76.9871 36.8623 76.9121 36.8623 76.8371 36.8623C73.9121 36.8623 71.0246 35.6623 68.9621 33.5248C66.7871 31.4623 65.5496 28.5373 65.5871 25.5373C65.5496 22.5373 66.7496 19.5374 68.8871 17.3999C70.9496 15.1874 73.8371 13.9499 76.8371 13.9499C76.8746 13.9499 76.9496 13.9499 76.9871 13.9499C79.9871 13.9124 82.9121 15.1499 85.0121 17.3249C87.1871 19.4249 88.4246 22.3498 88.3871 25.3498V25.3873C88.4246 28.4248 87.1871 31.3498 85.0121 33.4873C82.9496 35.6248 80.0621 36.8623 77.0621 36.8623ZM145.537 36.3748H140.774V18.9374H136.612V14.4374H140.774V6.3374H145.537V14.4374H150.262V18.9374H145.537V36.3748ZM103.05 36.3748H98.7745L89.5121 14.4374H94.6495L100.837 29.2123L107.137 14.4374H112.274L103.05 36.3748ZM76.9496 32.3248C78.7871 32.3623 80.5121 31.6123 81.7121 30.2623C82.9871 28.9123 83.6621 27.1498 83.5871 25.2748V24.7123C83.4746 23.0998 82.7996 21.5998 81.6746 20.4373L81.6371 20.3999C80.4371 19.0874 78.7496 18.3749 76.9871 18.3749C75.1496 18.3374 73.4246 19.0874 72.2246 20.4373C70.9496 21.7873 70.2746 23.5498 70.2746 25.3873C70.2371 27.1873 70.9496 28.9498 72.2246 30.1873L72.2621 30.2248C73.4621 31.6123 75.1871 32.3623 76.9496 32.3248Z"
                  fill="#6E6E6E"
                ></path>
                <path
                  d="M123.487 45C125.144 45 126.487 43.6568 126.487 42C126.487 40.3431 125.144 39 123.487 39C121.83 39 120.487 40.3431 120.487 42C120.487 43.6568 121.83 45 123.487 45Z"
                  fill="#6E6E6E"
                ></path>
                <path
                  d="M123.637 11.0252C123.562 11.0252 123.525 11.0252 123.45 11.0252C122.4 11.0627 121.312 10.8377 120.375 10.3502C119.287 9.78767 118.5 8.85017 118.087 7.72518L117.6 6.2627H121.312L121.65 6.7127C121.762 6.8627 122.137 7.38769 123.412 7.38769C123.787 7.38769 124.162 7.31269 124.537 7.20019C124.837 7.08769 125.062 6.9377 125.25 6.7127L125.587 6.2627H129.337L128.812 7.76269C128.4 8.88769 127.612 9.82518 126.562 10.3877C125.625 10.8002 124.612 11.0252 123.637 11.0252Z"
                  fill="#6E6E6E"
                ></path>
              </svg>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="py-3">
            <Nav className="me-auto"></Nav>
            <Form
              className="d-flex w-50 d-md-block d-sm-none d-none"
              style={{ position: "relative" }}
            >
              <Form.Control
                type="search"
                placeholder="Nhập từ khoá để tìm kiếm"
                className="me-2 rounded-pill"
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
                  style={{ color: "#40A691" }}
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </Form>
            <Nav className="ms-5">
              <NavDropdown title="Thang" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Button
                className="ms-5 d-flex align-items-center"
                style={{ backgroundColor: "#40A691", border: "none" }}
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Nav className="d-md-none">
        <Container>
          <Form
            className="d-flex w-50 justify-content-center w-100 mb-3"
            style={{ position: "relative" }}
          >
            <Form.Control
              type="search"
              placeholder="Nhập từ khoá để tìm kiếm"
              className="me-2 rounded-pill"
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
                style={{ color: "#40A691" }}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </Form>
        </Container>
      </Nav>
    </>
  );
};
export default Header;
