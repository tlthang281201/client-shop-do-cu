"use client";
import { useUserContext } from "@/context/context";
import { getTransactionByUserId } from "@/services/TransactionHistoryServices";
import { formatter } from "@/utils/format-currency";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { Spinner } from "react-bootstrap";
import DataTable from "react-data-table-component";
import ModalServicePayment from "./ModalServicePayment";
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

const ServicePayment = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const { user } = useUserContext();
  const [transaction, setTransaction] = useState();
  const getAllTransaction = async (id) => {
    const { data: transaction } = await getTransactionByUserId(id);
    if (transaction) {
      setTransaction(
        transaction.filter(
          (one) => one.type === 1 || one.type === 2 || one.type === 3
        )
      );
    }
  };

  const columns = useMemo(
    () => [
      {
        name: "ID",
        selector: (row) => row.id,
        width: "70px",
      },
      {
        name: "Nội dung",
        width: "260px",
        wrap: true,
        cell: (row) => <div className="d-flex">{row.content}</div>,
      },
      {
        name: "Tổng tiền",
        width: "120px",
        sortable: true,
        selector: (row) => (
          <div className="text-danger fw-bold">
            {formatter.format(row.total)}
          </div>
        ),
      },
      {
        name: "Thời gian",
        width: "200px",
        sortable: true,
        selector: (row) => (
          <div>{moment(row.created_at).format("DD/MM/YYYY - H:m:ss")}</div>
        ),
      },
      {
        name: "Trạng thái",
        wrap: true,
        width: "140px",
        selector: (row) => (
          <span
            className={
              row?.status === 0 ? `text-success fw-bold` : "text-danger fw-bold"
            }
          >
            {row?.status === 0 ? "Thành công" : "Thất bại"}
          </span>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    getAllTransaction(user?.id);
  }, [user]);
  return (
    <div className="mt-4 mb-4">
      {transaction ? (
        transaction.length > 0 ? (
          <DataTable
            columns={columns}
            data={transaction}
            customStyles={customStyles}
            pagination
            paginationPerPage={10}
            paginationComponentOptions={paginationComponentOptions}
            noDataComponent={
              <span className="text-danger pt-3">
                Bạn chưa có giao dịch nào
              </span>
            }
            persistTableHead
          />
        ) : (
          <div style={{ textAlign: "center" }}>
            <span className="text-danger pt-3">Bạn chưa có giao dịch nào</span>
          </div>
        )
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
      <ModalServicePayment show={show} setShow={setShow} data={data} />
    </div>
  );
};

export default ServicePayment;
