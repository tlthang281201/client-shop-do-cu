import React from "react";
import styles from "./styles.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
const PostComponent = () => {
  return (
    <div className="mb-3">
      <div className="container-border p-2 rounded-1">
        <div className="d-flex flex-row gap-2">
          <Image
            src={
              "https://cdn.chotot.com/j6x7IlmqJLMaADq_qHpud_wf24gzFhNEBEuKOXKQcuE/preset:listing/plain/b7b988f0adb54d7278331707f519065e-2859194353782525030.jpg"
            }
            alt="a"
            width={80}
            height={80}
            style={{ objectFit: "cover", borderRadius: "0.25rem" }}
          />
          <div className="d-flex flex-column">
            <Link href="#" className="text-decoration-none text-black">
              Bán laptop dell vostro 5568 đã qua sử dụng
            </Link>
            <span className="fw-bold" style={{ color: "rgb(229 25 59)" }}>
              7.600.000 đ
            </span>
            <span style={{ fontSize: ".85rem", lineHeight: "1.25rem" }}>
              <span style={{ color: "rgb(115 115 115)" }}>Ngày đăng tin: </span>
              <span>02/01/24</span>
            </span>
            <span style={{ fontSize: ".85rem", lineHeight: "1.25rem" }}>
              <span style={{ color: "rgb(115 115 115)" }}>Lượt xem: </span>
              <span>
                <i className="bi bi-eye me-1"></i>4
              </span>
            </span>
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-center gap-1 mt-2 border-top pt-2"
          style={{ fontSize: ".875rem", lineHeight: "1.25rem" }}
        >
          <i className="bi bi-info-circle-fill"></i>
          <span>Chưa sử dụng dịch vụ nào</span>
        </div>
        <div className="d-flex flex-row gap-2 mt-2">
          <div className="border px-3 py-1 rounded-2 d-flex flex-row align-items-center ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="!mr-0"
            >
              <path
                d="M9.14743 20H5.24129C4.91642 19.9918 4.60652 19.8617 4.37325 19.6354C4.14005 19.4061 4.00605 19.0944 4 18.7674V15.0609C4.00067 14.8971 4.0331 14.735 4.09548 14.5835C4.15825 14.4315 4.2496 14.293 4.36457 14.1755L14.1126 4.37543C14.2281 4.2559 14.367 4.16136 14.5205 4.09766C14.6745 4.0332 14.8397 4 15.0066 4C15.1735 4 15.3388 4.0332 15.4927 4.09766C15.6463 4.16136 15.7852 4.2559 15.9007 4.37543L19.5291 8.0038C19.6453 8.11683 19.7381 8.25168 19.8022 8.40063C19.8662 8.54958 19.9003 8.70971 19.9023 8.87183C19.9009 9.03838 19.8685 9.2032 19.8069 9.35793C19.738 9.51337 19.6409 9.65465 19.5204 9.77458L9.58144 19.783C9.52722 19.8463 9.46089 19.8981 9.38636 19.9353C9.31182 19.9726 9.23059 19.9946 9.14743 20ZM15.0414 5.24346L5.20656 15.0349V18.698L8.90438 18.7414L18.6697 8.96731L15.0414 5.24346Z"
                fill="currentColor"
              ></path>
              <path
                d="M18.9125 20.0004H9.14717C8.98602 20.0004 8.83147 19.9364 8.71752 19.8224C8.60357 19.7085 8.53955 19.5539 8.53955 19.3928C8.53955 19.2316 8.60357 19.0771 8.71752 18.9631C8.83147 18.8492 8.98602 18.7852 9.14717 18.7852H18.9125C19.0737 18.7852 19.2282 18.8492 19.3422 18.9631C19.4561 19.0771 19.5202 19.2316 19.5202 19.3928C19.5202 19.5539 19.4561 19.7085 19.3422 19.8224C19.2282 19.9364 19.0737 20.0004 18.9125 20.0004Z"
                fill="currentColor"
              ></path>
            </svg>
            <span
              style={{ fontSize: "14px" }}
              className="fw-bold ms-2 d-none d-md-block"
            >
              Sửa tin
            </span>
          </div>
          <div className="border px-3 py-1 rounded-2 d-flex align-items-center">
            <span style={{ fontSize: "14px" }} className="fw-bold">
              <i className="bi bi-eye-slash me-2"></i>
              Đã bán/Ẩn tin
            </span>
          </div>
          <Button
            style={{
              backgroundColor: "#12a154",
              border: "none",
            }}
          >
            <svg
              data-type="monochrome"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
            >
              <path
                d="M18.7655 6.85008L20.846 7.43909C21.3774 7.58953 21.6862 8.14227 21.5358 8.67367L18.6349 18.9201C18.4845 19.4515 17.9317 19.7603 17.4003 19.6099L7.15393 16.709C6.62253 16.5586 6.3137 16.0058 6.46415 15.4744L7.05316 13.3939M14.2014 5.55796L12.6801 5.12725L10.5996 4.53824C10.0682 4.3878 9.51544 4.69662 9.36499 5.22802L8.77598 7.30853L8.34528 8.82987"
                stroke="currentColor"
                strokeWidth="1.4"
              ></path>
              <g fill="currentColor">
                <path d="M13.0649 7.72267C12.9649 8.0961 13.1865 8.47994 13.5599 8.58C13.9333 8.68005 14.3171 8.45845 14.4172 8.08502L13.0649 7.72267ZM16.9286 8.75795C16.8286 9.13138 17.0502 9.51521 17.4236 9.61527C17.797 9.71533 18.1809 9.49372 18.2809 9.1203L16.9286 8.75795ZM14.4172 8.08502L15.1937 5.18724L13.8414 4.8249L13.0649 7.72267L14.4172 8.08502ZM17.7051 5.86017L16.9286 8.75795L18.2809 9.1203L19.0574 6.22252L17.7051 5.86017ZM16.7858 4.268C17.4793 4.45383 17.8909 5.16667 17.7051 5.86017L19.0574 6.22252C19.4433 4.78216 18.5885 3.30165 17.1482 2.91571L16.7858 4.268ZM15.1937 5.18724C15.3795 4.49374 16.0923 4.08218 16.7858 4.268L17.1482 2.91571C15.7078 2.52977 14.2273 3.38454 13.8414 4.8249L15.1937 5.18724Z"></path>
                <path d="M11.5 9.27422C11.8866 9.27422 12.2 8.96082 12.2 8.57422C12.2 8.18762 11.8866 7.87422 11.5 7.87422V9.27422ZM3.5 7.87422C3.1134 7.87422 2.8 8.18762 2.8 8.57422C2.8 8.96082 3.1134 9.27422 3.5 9.27422V7.87422ZM11.5 7.87422H3.5V9.27422H11.5V7.87422Z"></path>
                <path d="M9 11.7742C9.3866 11.7742 9.7 11.4608 9.7 11.0742C9.7 10.6876 9.3866 10.3742 9 10.3742V11.7742ZM2 10.3742C1.6134 10.3742 1.3 10.6876 1.3 11.0742C1.3 11.4608 1.6134 11.7742 2 11.7742V10.3742ZM9 10.3742H2V11.7742H9V10.3742Z"></path>
                <path d="M15 14.2742C15.3866 14.2742 15.7 13.9608 15.7 13.5742C15.7 13.1876 15.3866 12.8742 15 12.8742V14.2742ZM11 12.8742C10.6134 12.8742 10.3 13.1876 10.3 13.5742C10.3 13.9608 10.6134 14.2742 11 14.2742V12.8742ZM15 12.8742H11V14.2742H15V12.8742Z"></path>
                <path d="M8 14.2742C8.3866 14.2742 8.7 13.9608 8.7 13.5742C8.7 13.1876 8.3866 12.8742 8 12.8742V14.2742ZM4 12.8742C3.6134 12.8742 3.3 13.1876 3.3 13.5742C3.3 13.9608 3.6134 14.2742 4 14.2742V12.8742ZM8 12.8742H4V14.2742H8V12.8742Z"></path>
              </g>
            </svg>
            <span className="ms-2">Bán nhanh hơn</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
