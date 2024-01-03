import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

const BoxContact = () => {
  return (
    <>
      {/* <div className="box-module box-supplier-fluid-2">
        <div className="box-body">
          <div className="box-img" bis_skin_checked="1">
            <Link href="/user/1003765553" title="a" className="box">
              <Image
                src="https://s1.vnecdn.net/myvne/i/v4/graphics/img_60x60.gif"
                alt="a"
                width={60}
                height={60}
                className="avatar-img"
              />
            </Link>
          </div>
          <div className="info-supplier">
            <div className="info-item d-flex flex-column">
              <div>
                <Link href="/user/1003765553" className="fs-6 ms-1 text-black">
                  haibinh153
                </Link>
              </div>

              <div className="d-flex flex-row ">
                <Rating
                  name="half-rating-read"
                  defaultValue={4.4}
                  precision={0.5}
                  readOnly
                />
                <span className="fw-bold ms-2 fs-6">3.6</span>
                <Link href={"#"} className="ms-2">
                  ( 8 đánh giá )
                </Link>
              </div>
            </div>
            <div className="border-line" bis_skin_checked="1"></div>

            <p className="info-item">
              <div
                className="d-flex flex-row justify-content-between align-items-center"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  width: "250px",
                  color: "#3c763d",
                  border: "1px solid #cacaca",
                  padding: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                <div className="d-flex flex-row align-items-center">
                  <i class="bi bi-telephone-fill ms-2 fs-5"></i>
                  <span className="ms-2">012312***</span>
                </div>

                <span className="me-2" style={{ float: "right" }}>
                  BẤM ĐỂ HIỆN SỐ
                </span>
              </div>
              <div
                className="mt-2 d-flex flex-row justify-content-between align-items-center"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  width: "250px",
                  color: "#3c763d",
                  border: "1px solid #cacaca",
                  padding: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                <i class="bi bi-chat-left-text-fill ms-2 fs-5"></i>

                <span className="me-2" style={{ float: "right" }}>
                  CHAT VỚI NGƯỜI BÁN
                </span>
              </div>
            </p>
          </div>
        </div>
      </div> */}
      <div className="box-module box-supplier-fluid-2">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-center">
            <Link href="/user/1003765553" title="a">
              <Image
                src="https://s1.vnecdn.net/myvne/i/v4/graphics/img_60x60.gif"
                alt="a"
                width={60}
                height={60}
                className="avatar-img"
              />
            </Link>
            <div className="d-flex flex-column ms-2 gap-2">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <span className="fw-bold">Thắng Trần</span>
                <div className="border ps-1 pe-1 rounded-1">
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary"
                    style={{ fontSize: "13px" }}
                  >
                    Xem trang
                  </Link>
                </div>
              </div>

              <div className="d-flex flex-row flex-wrap align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={4.4}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <span className="fw-bold ms-2 fs-6">3.6</span>
                <Link
                  href={"#"}
                  className="ms-2 text-decoration-none"
                  style={{ fontSize: "14px" }}
                >
                  ( 8 đánh giá )
                </Link>
              </div>
            </div>
          </div>
          <div className="border-line" bis_skin_checked="1"></div>
          <div
            className="d-flex flex-row justify-content-center align-items-center"
            style={{
              borderRadius: "5px",
              backgroundColor: "#589f39",
              width: "300px",
              height: "42px",
              color: "white",
              padding: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <span className="me-2" style={{ float: "right" }}>
              MUA NGAY
            </span>
          </div>
          <div
            className="d-flex flex-row justify-content-between align-items-center mt-2"
            style={{
              borderRadius: "5px",
              backgroundColor: "#fff",
              width: "300px",
              color: "#3c763d",

              border: "1px solid #cacaca",
              padding: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <div className="d-flex flex-row align-items-center">
              <i className="bi bi-telephone-fill ms-2 fs-5"></i>
              <span className="ms-2">012312***</span>
            </div>

            <span className="me-2" style={{ float: "right" }}>
              BẤM ĐỂ HIỆN SỐ
            </span>
          </div>
          <div
            className="mt-2 d-flex flex-row justify-content-between align-items-center mb-4"
            style={{
              borderRadius: "5px",
              backgroundColor: "#fff",
              width: "300px",
              color: "#589f39",
              border: "1px solid #cacaca",
              padding: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <i className="bi bi-chat-left-text-fill ms-2 fs-5"></i>

            <span className="me-2" style={{ float: "right" }}>
              CHAT VỚI NGƯỜI BÁN
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxContact;
