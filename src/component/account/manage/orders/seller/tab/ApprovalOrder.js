import React from "react";
import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useUserContext } from "@/context/context";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Button, Modal, Spinner } from "react-bootstrap";
import {
  getAllBuyOrderByUserId,
  getAllSellOrderByUserId,
  updateStatusOrder,
} from "@/services/OrderService";
import { formatter } from "@/utils/format-currency";
import { toast } from "sonner";

const customStyles = {
  header: {
    style: {
      minHeight: "56px",
    },
  },
  headRow: {
    style: {
      borderTopStyle: "solid",
      borderTopWidth: "1px",
      borderTopColor: "rgba(0, 0, 0, 0.12)",
      fontWeight: "bold",
    },
  },
  headCells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: "rgba(0, 0, 0, 0.12)",
        borderLeftStyle: "solid",
        borderLeftWidth: "1px",
        borderLeftColor: "rgba(0, 0, 0, 0.12)",
      },
      fontSize: "15px",
    },
  },
  cells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: "rgba(0, 0, 0, 0.12)",
        borderLeftStyle: "solid",
        borderLeftWidth: "1px",
        borderLeftColor: "rgba(0, 0, 0, 0.12)",
      },
      fontSize: "15px",
      paddingTop: "15px",
      paddingBottom: "15px",
    },
  },
};
const paginationComponentOptions = {
  rowsPerPageText: "Số hàng mỗi trang",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Tất cả",
};

const ApprovalOrder = ({ refreshCount }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [idOrder, setIdOrder] = useState("");
  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);
  const columns = useMemo(
    () => [
      {
        name: "ID",
        selector: (row) => row.id,
        width: "70px",
      },
      {
        name: "Tin đăng",
        width: "260px",
        wrap: true,
        cell: (row) => <div className="d-flex">{row.post_id?.title}</div>,
      },
      {
        name: "Tổng tiền",
        width: "120px",
        sortable: true,
        selector: (row) => (
          <div className="text-danger fw-bold">
            {formatter.format(row.post_id?.price)}
          </div>
        ),
      },
      {
        name: "Ngày đặt hàng",
        selector: (row) => row.created_at,
        wrap: true,
        sortable: true,
        width: "180px",
        format: (row) => moment(row.created_at).format("DD/MM/YYYY, HH:mm:ss"),
      },
      {
        name: "Thanh toán",
        wrap: true,
        sortable: true,
        width: "160px",
        selector: (row) => (
          <span
            className={
              row?.paid === true
                ? "text-success fw-bold"
                : "text-danger fw-bold"
            }
          >
            {row?.paid === true ? "Đã thanh toán" : "Chưa thanh toán"}
          </span>
        ),
      },
      {
        name: "",
        button: true,
        cell: (row) => (
          <div className="d-flex flex-row gap-2">
            <Link href={`/order/${row.id}`}>
              <button className="btn btn-primary" style={{ fontSize: "13px" }}>
                Chi tiết
              </button>
            </Link>
          </div>
        ),
      },
      {
        name: "",
        button: true,
        cell: (row) => (
          <button
            className="btn btn-success"
            onClick={() => {
              handleShow();
              setIdOrder(row.id);
            }}
            style={{ fontSize: "13px" }}
          >
            Xác nhận
          </button>
        ),
      },
      {
        name: "",
        button: true,
        cell: (row) =>
          row.paid === false && (
            <button
              className="btn btn-danger"
              onClick={() => {
                setShow1(true);
                setIdOrder(row.id);
              }}
              style={{ fontSize: "13px" }}
            >
              Từ chối
            </button>
          ),
      },
    ],
    []
  );

  const { user } = useUserContext();
  const [orders, setOrders] = useState();
  const getAllOrder = async (id) => {
    const { data: order } = await getAllSellOrderByUserId(id);
    if (order) {
      setOrders(
        order.filter((onep) => onep.status === 0 && onep.is_refund === false)
      );
    }
  };

  const handleChange = async (status) => {
    const res = await updateStatusOrder(idOrder, status);
    getAllOrder(user?.id);
    handleClose();
    handleClose1();
    refreshCount(user?.id);
    toast.success("Cập nhập thành công");
  };

  useEffect(() => {
    getAllOrder(user?.id);
  }, [user]);

  return (
    <div className="mt-4 mb-4">
      {orders ? (
        orders.length > 0 ? (
          <DataTable
            columns={columns}
            data={orders}
            customStyles={customStyles}
            pagination
            paginationPerPage={10}
            paginationComponentOptions={paginationComponentOptions}
            noDataComponent={
              <span className="text-danger pt-3">Bạn chưa có đơn hàng nào</span>
            }
            persistTableHead
          />
        ) : (
          <div style={{ textAlign: "center" }}>
            <span className="text-danger pt-3">Bạn chưa có đơn hàng nào</span>
          </div>
        )
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="danger" />
        </div>
      )}

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "17px", fontWeight: "bold" }}>
            Thông báo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn từ chối đơn hàng này không?</Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="danger" onClick={handleClose1}>
            Không
          </Button>
          <Button variant="success" onClick={() => handleChange(-1)}>
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "17px", fontWeight: "bold" }}>
            Thông báo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn xác nhận đơn hàng này không?</Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="danger" onClick={handleClose}>
            Không
          </Button>
          <Button variant="success" onClick={() => handleChange(1)}>
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ApprovalOrder;
