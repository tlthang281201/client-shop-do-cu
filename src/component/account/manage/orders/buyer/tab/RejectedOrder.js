import React from "react";
import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useUserContext } from "@/context/context";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Spinner } from "react-bootstrap";
import { getAllBuyOrderByUserId } from "@/services/OrderService";
import { formatter } from "@/utils/format-currency";

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

const RejectedOrder = () => {
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
        name: "Phương thức",
        wrap: true,
        width: "140px",
        selector: (row) => (
          <span>{row?.payment_type === 1 ? "Ví MOMO" : "Ship COD"}</span>
        ),
      },

      {
        name: "Trạng thái",
        wrap: true,
        sortable: true,
        width: "160px",
        selector: (row) => (
          <span
            className={
              row?.is_refund === true
                ? "text-warning fw-bold"
                : "text-danger fw-bold"
            }
          >
            {row?.is_refund === true ? "Hoàn tiền" : "Đã huỷ đơn hàng"}
          </span>
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
        order.filter((onep) => onep.status === -1 || onep.is_refund === true)
      );
    }
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
    </div>
  );
};

export default RejectedOrder;
