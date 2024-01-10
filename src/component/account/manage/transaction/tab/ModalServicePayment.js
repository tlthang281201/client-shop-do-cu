import { formatter } from "@/utils/format-currency";
import React from "react";
import { Button, Modal, Spinner } from "react-bootstrap";

const ModalServicePayment = ({ show, setShow, data }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "17px", fontWeight: "bold" }}>
          Chi tiết
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID Giao dịch: {data?.id}</p>
        <p>Nội dung: {data?.content}</p>
        <p>
          Số tiền rút:{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            {formatter.format(data?.total)}
          </span>
        </p>
        <p>
          Ngân hàng thụ hưởng:{" "}
          <span className="fw-bold">{data?.bank_name}</span>
        </p>
        <p>
          Số tài khoản: <span className="fw-bold">{data?.account_number}</span>
        </p>
        <p>
          Tên người thụ hưởng: <span className="fw-bold">{data?.name}</span>
        </p>
        <p>
          Trạng thái:{" "}
          <span
            className={
              data?.status === 0
                ? `text-primary fw-bold`
                : data?.status === 1
                ? "text-success fw-bold"
                : "text-danger fw-bold"
            }
          >
            {data?.status === 0
              ? "Chưa duyệt"
              : data?.status === 1
              ? "Thành công"
              : "Thất bại"}
          </span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShow(false)}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalServicePayment;
