import React from "react";
import Image from "next/image";

const StatusOrder = ({ status }) => {
  return (
    <div className="p-3">
      <div className="d-flex flex-row gap-3 align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center">
          {/* <Image src={"/images/status1.png"} width={40} height={40} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H6C4.9 3 4 3.9 4 5V20C4 21.1 4.9 22 6 22H12.11C11.52 21.43 11.04 20.75 10.69 20H6V5H8V6C8 7.1 8.9 8 10 8H14C15.1 8 16 7.1 16 6V5H18V10.08C18.71 10.18 19.38 10.39 20 10.68V5C20 3.9 19.1 3 18 3ZM12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5ZM17 12C14.24 12 12 14.24 12 17C12 19.76 14.24 22 17 22C19.76 22 22 19.76 22 17C22 14.24 19.76 12 17 12ZM18.29 19L16.64 17.35C16.55 17.26 16.49 17.13 16.49 17V14.51C16.49 14.23 16.71 14.01 16.99 14.01C17.27 14.01 17.49 14.23 17.49 14.51V16.8L18.99 18.3C19.19 18.5 19.19 18.81 18.99 19.01C18.8 19.2 18.49 19.2 18.29 19Z"
              fill="#7AC45A"
            />
          </svg>
          <span
            className="fw-bold mt-2"
            style={{ textAlign: "center", fontSize: "15px" }}
          >
            Tiếp nhận
          </span>
        </div>
        <span
          style={{
            backgroundColor: "#7ac45a",
            minWidth: "50px",
            height: "2px",
            marginBottom: "20px",
          }}
        ></span>
        <div className="d-flex flex-column align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 16 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.333252 7.82239C0.333252 3.50216 3.81545 0 8.11106 0C12.4067 0 15.8889 3.50216 15.8889 7.82239C15.8889 9.92307 15.0609 11.929 13.7211 13.4399L8.11106 20L2.50107 13.4399C1.16125 11.929 0.333252 9.92307 0.333252 7.82239ZM5.0864 7.77006C5.0864 9.45023 6.44058 10.8122 8.11117 10.8122C9.78152 10.8122 11.1359 9.45023 11.1359 7.77006C11.1359 6.09013 9.78152 4.72819 8.11117 4.72819C6.44058 4.72819 5.0864 6.09013 5.0864 7.77006Z"
              fill={status >= 1 ? `#7AC45A` : `#CACACA`}
            />
            <script xmlns="" />
          </svg>
          <span
            className="fw-bold mt-2"
            style={{ textAlign: "center", fontSize: "15px" }}
          >
            Chốt đơn
          </span>
        </div>
        {status >= 1 ? (
          <span
            style={{
              backgroundColor: "#7AC45A",
              minWidth: "50px",
              height: "2px",
              marginBottom: "20px",
            }}
          ></span>
        ) : (
          <span
            style={{
              backgroundColor: "#e8e8e8",
              minWidth: "50px",
              height: "2px",
              marginBottom: "20px",
            }}
          ></span>
        )}

        <div className="d-flex flex-column align-items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 21 14"
            fill="none"
          >
            <path
              d="M17.6667 2C17.6667 0.9 16.7667 0 15.6667 0H12.6667V2H15.6667V4.65L12.1867 9H8.66675V4H4.66675C2.45675 4 0.666748 5.79 0.666748 8V11H2.66675C2.66675 12.66 4.00675 14 5.66675 14C7.32675 14 8.66675 12.66 8.66675 11H13.1467L17.6667 5.35V2ZM5.66675 12C5.11675 12 4.66675 11.55 4.66675 11H6.66675C6.66675 11.55 6.21675 12 5.66675 12Z"
              fill={status >= 2 ? `#7AC45A` : `#CACACA`}
            />
            <path
              d="M8.66675 1H3.66675V3H8.66675V1Z"
              fill={status >= 2 ? `#7AC45A` : `#CACACA`}
            />
            <path
              d="M17.6667 8C16.0067 8 14.6667 9.34 14.6667 11C14.6667 12.66 16.0067 14 17.6667 14C19.3267 14 20.6667 12.66 20.6667 11C20.6667 9.34 19.3267 8 17.6667 8ZM17.6667 12C17.1167 12 16.6667 11.55 16.6667 11C16.6667 10.45 17.1167 10 17.6667 10C18.2167 10 18.6667 10.45 18.6667 11C18.6667 11.55 18.2167 12 17.6667 12Z"
              fill={status >= 2 ? `#7AC45A` : `#CACACA`}
            />
            <script xmlns="" />
          </svg>
          <span
            className="fw-bold mt-2"
            style={{ textAlign: "center", fontSize: "15px" }}
          >
            Đang giao
          </span>
        </div>
        {status >= 2 ? (
          <span
            style={{
              backgroundColor: "#7AC45A",
              minWidth: "50px",
              height: "2px",
              marginBottom: "20px",
            }}
          ></span>
        ) : (
          <span
            style={{
              backgroundColor: "#e8e8e8",
              minWidth: "50px",
              height: "2px",
              marginBottom: "20px",
            }}
          ></span>
        )}
        <div className="d-flex flex-column align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 7.55566L11.5333 12.3048V21L3 16V7.55566Z"
              fill={status >= 3 ? `#7AC45A` : `#CACACA`}
            />
            <path
              d="M12.0666 1.44445L21.1333 6.44446L12.0666 11.4444L2.99997 6.44446L12.0666 1.44445Z"
              fill={status >= 3 ? `#7AC45A` : `#CACACA`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6001 12.3048L21.1334 7.55566V13.331C20.4608 13.116 19.744 13 19.0001 13C16.1451 13 13.6893 14.7092 12.6001 17.1602V12.3048Z"
              fill={status >= 3 ? `#7AC45A` : `#CACACA`}
            />
            <path
              d="M17.31 22.719C17.6834 23.0937 18.2867 23.0937 18.6601 22.719L22.7199 18.6357C23.0934 18.261 23.0934 17.6557 22.7199 17.281C22.3465 16.9063 21.7433 16.9063 21.3698 17.281L17.9803 20.6821L16.6302 19.3275C16.2567 18.9528 15.6535 18.9528 15.2801 19.3275C14.9066 19.7022 14.9066 20.3074 15.2801 20.6821L17.31 22.719Z"
              fill={status >= 3 ? `#7AC45A` : `#CACACA`}
            />
            <script xmlns="" />
          </svg>
          <span
            className="fw-bold mt-2"
            style={{ textAlign: "center", fontSize: "15px" }}
          >
            Hoàn tất
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusOrder;
