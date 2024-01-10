import React from "react";
import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useUserContext } from "@/context/context";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import {
  getAllBuyOrderByUserId,
  updateCompletedOrder,
} from "@/services/OrderService";
import { formatter } from "@/utils/format-currency";
import { toast } from "sonner";
import { CircularProgress, Rating } from "@mui/material";
import { addComment } from "@/services/CommentServices";

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

const ShippingOrder = ({ refreshCount }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [idOrder, setIdOrder] = useState("");
  const [payType, setPayType] = useState("");
  const [total, setTotal] = useState("");
  const [idSeller, setIdSeller] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const handleClose = () => setShow(false);
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
            {row.post_id?.price
              ? formatter.format(row.post_id?.price)
              : "Thoả thuận"}
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
        name: "Phương thức",
        wrap: true,
        width: "140px",
        selector: (row) => (
          <span>{row?.payment_type === 1 ? "Ví MOMO" : "Ship COD"}</span>
        ),
      },
      {
        name: "Ngày giao hàng",
        wrap: true,
        sortable: true,
        width: "180px",
        selector: (row) => (
          <span>
            {moment(row.shipping_time).format("DD/MM/YYYY, HH:mm:ss")}
          </span>
        ),
      },
      {
        name: "",
        width: "230px",
        cell: (row) => (
          <div className="d-flex flex-row gap-2">
            <Link href={`/order/${row.id}`}>
              <button className="btn btn-primary" style={{ fontSize: "13px" }}>
                Chi tiết
              </button>
            </Link>
            <button
              className="btn btn-success"
              onClick={() => {
                setShow(true);
                setIdOrder(row.id);
                setPayType(row.payment_type);
                setIdSeller(row.seller_id);
                setTotal(row.total);
              }}
              style={{ fontSize: "13px" }}
            >
              Đã nhận hàng
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const { user } = useUserContext();
  const [orders, setOrders] = useState();
  const getAllOrder = async (id) => {
    const { data: order } = await getAllBuyOrderByUserId(id);
    if (order) {
      setOrders(
        order.filter((onep) => onep.status === 2 && onep.is_refund === false)
      );
    }
  };
  const handleChange = async () => {
    setLoading(true);
    setShow1(true);
    const { res } = await updateCompletedOrder(
      idOrder,
      payType,
      idSeller,
      total
    );
    getAllOrder(user?.id);
    handleClose();
    refreshCount(user?.id);
    setLoading(false);
  };

  const handleComment = async () => {
    setLoading1(true);
    const { data } = await addComment(idSeller, rating, comment, user?.id);
    console.log(data);
    toast.success("Cập nhập thành công");
    setShow1(false);
    setLoading1(false);
    setRating("");
    setComment("");
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "17px", fontWeight: "bold" }}>
            Thông báo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn đã nhận được hàng?</Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="danger" onClick={handleClose} disabled={loading}>
            Không
          </Button>

          <div style={{ position: "relative" }}>
            <Button variant="success" onClick={handleChange} disabled={loading}>
              Đồng ý
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  color: "green",
                  top: "50%",
                  left: "50%",
                  marginLeft: "-12px",
                  marginTop: "-15px",
                }}
              />
            )}
          </div>
        </Modal.Footer>
      </Modal>

      {/* modoal coment */}

      <Modal show={show1} onHide={() => setShow1(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "17px", fontWeight: "bold" }}>
            Đánh giá về người bán
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action={handleComment}>
            <div>
              <div
                className="d-flex flex-row gap-2 align-items-center p-3"
                style={{ backgroundColor: "#ddddff" }}
              >
                <i className="bi bi-info-circle-fill text-primary"></i>
                <span>
                  Đánh giá để xây dựng cộng đồng mua bán chất lượng hơn
                </span>
              </div>
              <div className="fw-bold mt-2" style={{ textAlign: "center" }}>
                Trải nghiệm mua bán của bạn với người bán như thế nào?
              </div>
              <div className="d-flex justify-content-center">
                <Rating
                  name="size-large"
                  size="large"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </div>
              <div className="mt-3">
                <Form.Control
                  required
                  as="textarea"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                />
              </div>
              <div className="mt-3 w-100">
                <Button
                  type="submit"
                  disabled={loading1}
                  className="w-100"
                  style={{ backgroundColor: "#FF5757", border: "none" }}
                >
                  {loading1 && <Spinner size="sm me-2" />}
                  ĐÁNH GIÁ
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="danger"
            onClick={() => setShow1(false)}
            disabled={loading1}
          >
            Đóng
          </Button>

          <div style={{ position: "relative" }}>
            <Button variant="success" disabled={loading1}>
              Gửi
            </Button>
            {loading1 && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  color: "green",
                  top: "50%",
                  left: "50%",
                  marginLeft: "-12px",
                  marginTop: "-15px",
                }}
              />
            )}
          </div>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ShippingOrder;
