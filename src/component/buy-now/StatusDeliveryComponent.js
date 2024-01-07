import React from "react";
import Image from "next/image";

const StatusDeliveryComponent = () => {
  return (
    <div className="p-3">
      <div className="d-flex flex-row gap-3 align-items-center">
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
          <Image src={"/images/delivery_accepted.svg"} width={30} height={30} />
          <span
            className="fw-bold mt-2"
            style={{ textAlign: "center", fontSize: "15px" }}
          >
            Chốt đơn
          </span>
        </div>
        <span
          style={{
            backgroundColor: "#e8e8e8",
            minWidth: "50px",
            height: "2px",
            marginBottom: "20px",
          }}
        ></span>
        <div className="d-flex flex-column align-items-center ">
          <Image src={"/images/delivery_shipping.svg"} width={30} height={30} />
          <span
            className="fw-bold mt-2"
            style={{ textAlign: "center", fontSize: "15px" }}
          >
            Đang giao
          </span>
        </div>
        <span
          style={{
            backgroundColor: "#e8e8e8",
            minWidth: "50px",
            height: "2px",
            marginBottom: "20px",
          }}
        ></span>
        <div className="d-flex flex-column align-items-center">
          <Image src={"/images/delivery_done.svg"} width={30} height={30} />
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

export default StatusDeliveryComponent;
