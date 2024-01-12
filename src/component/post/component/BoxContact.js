"use client";
import { useUserContext } from "@/context/context";
import { Rating } from "@mui/material";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const BoxContact = ({ data, id }) => {
  const [show, setShow] = useState(false);
  const { user } = useUserContext();

  return (
    <>
      <div className="box-module box-supplier-fluid-2">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-center">
            <Link href={`/profile/${data.seller_id.id}`} title="a">
              <Image
                src={data.seller_id.avatar}
                alt="a"
                width={60}
                height={60}
                className="avatar-img"
              />
            </Link>
            <div className="d-flex flex-column ms-2 gap-2">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <span className="fw-bold">{data?.seller_id.name}</span>
                <div className="border ps-1 pe-1 rounded-1">
                  <Link
                    href={`/profile/${data.seller_id.id}`}
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
                  defaultValue={
                    data.seller_id.rating === 0
                      ? 0
                      : data.seller_id.rating / data.seller_id.number_reviews
                  }
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <span className="fw-bold ms-2 fs-6">
                  {data.seller_id.rating === 0
                    ? 0
                    : data.seller_id.rating / data.seller_id.number_reviews}
                </span>
                {data.seller_id.rating === 0 ? (
                  <span
                    style={{ fontSize: "14px" }}
                    className="ms-2 text-secondary"
                  >
                    (Chưa có đánh giá)
                  </span>
                ) : (
                  <Link
                    href={"#"}
                    className="ms-2 text-decoration-none"
                    style={{ fontSize: "14px" }}
                  >
                    ( {data.seller_id.number_reviews} đánh giá )
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="border-line" bis_skin_checked="1"></div>

          {data.seller_id.id === user?.id && (
            <div>
              <Link
                href="/user/posts"
                className="mt-2 d-flex flex-row justify-content-center align-items-center mb-2 gap-2 text-decoration-none"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "rgb(51, 168, 55)",
                  width: "300px",
                  color: "white",
                  border: "1px solid rgb(51, 168, 55)",
                  padding: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                <i class="bi bi-eye-slash ms-2 fs-5"></i>
                <span
                  className="me-2"
                  style={{ float: "right", fontSize: "15px" }}
                >
                  Đã bán/Ẩn tin
                </span>
              </Link>
            </div>
          )}
          {data.seller_id.id !== user?.id && (
            <Link
              href={user ? `/buy-now/${id}` : "/dang-nhap"}
              className="d-flex flex-row justify-content-center align-items-center text-decoration-none"
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
            </Link>
          )}
          {data.seller_id.id !== user?.id && (
            <div
              className={`d-flex flex-row ${
                show === false
                  ? "justify-content-between"
                  : "justify-content-center"
              } align-items-center mt-2 `}
              onClick={() => setShow(true)}
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
              {show && (
                <span style={{ textAlign: "center" }}>{data.phone}</span>
              )}
              {show === false && (
                <div className="d-flex flex-row align-items-center">
                  <i className="bi bi-telephone-fill ms-2 fs-5"></i>
                  <span className="ms-2">0935***</span>
                </div>
              )}

              {show === false && (
                <span className="me-2" style={{ float: "right" }}>
                  BẤM ĐỂ HIỆN SỐ
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BoxContact;
