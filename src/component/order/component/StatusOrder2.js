import moment from "moment";
import React from "react";

const StatusOrder2 = ({ order }) => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>
          <span>Mã đơn hàng: </span>
          <span className="fw-bold">{order?.id}</span>
        </li>
        <li>
          <span>Trạng thái đơn hàng: </span>
          <span
            className={
              order?.status === 0
                ? "text-primary fw-bold"
                : order?.status === 1
                ? "text-success fw-bold"
                : order?.status === 2
                ? "text-info fw-bold"
                : order?.status === 3
                ? "text-success fw-bold"
                : "text-danger fw-bold"
            }
          >
            {order?.status === 0
              ? "Chưa xác nhận"
              : order?.status === 1
              ? "Đã xác nhận"
              : order?.status === 2
              ? "Đang giao hàng"
              : order?.status === 3
              ? "Đã hoàn thành"
              : "Bị từ chối"}
          </span>
        </li>
        <li>
          <span>Thời gian đặt hàng: </span>
          <span className="fw-bold">
            {moment(order?.created_at).format("DD/MM/YYYY, H:m:ss")}
          </span>
        </li>
        <li>
          <span>Thời gian thanh toán: </span>
          <span
            className={
              order?.paid ? "text-success fw-bold" : "text-danger fw-bold"
            }
          >
            {order?.paid
              ? moment(order?.paid_time).format("DD/MM/YYYY, H:m:ss")
              : "Chưa thanh toán"}
          </span>
        </li>
        {order?.status === 2 && (
          <li>
            <span>Thời gian giao hàng: </span>
            <span className="fw-bold">
              {moment(order?.shipping_time).format("DD/MM/YYYY, H:m:ss")}
            </span>
          </li>
        )}
        {order?.status === 3 && (
          <li>
            <span>Thời gian nhận hàng: </span>
            <span className="fw-bold">
              {order?.received_at
                ? moment(order?.received_at).format("DD/MM/YYYY, H:m:ss")
                : "Chưa nhận hàng"}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default StatusOrder2;
