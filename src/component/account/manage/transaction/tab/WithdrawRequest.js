"use client";
import { useUserContext } from "@/context/context";
import { getWithdrawRequestByUserId } from "@/services/WithdrawServices";
import { formatter } from "@/utils/format-currency";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { Spinner } from "react-bootstrap";
import DataTable from "react-data-table-component";
import ModalDetail from "./Modal";

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

const WithdrawRequest = () => {
  const [show, setShow] = useState(false);
  const { user } = useUserContext();
  const [data, setData] = useState("");
  const [request, setRequest] = useState();
  const getAllRequest = async (id) => {
    const { data } = await getWithdrawRequestByUserId(id);
    if (data) {
      setRequest(data);
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
        cell: (row) => (
          <div className="d-flex">
            Yêu cầu rút tiền vào tài khoản{" "}
            {row.type === 1 ? `Ngân hàng ${row.bank_name}` : "Momo"}
          </div>
        ),
      },
      {
        name: "Số tiền",
        width: "150px",
        wrap: true,
        sortable: true,
        selector: (row) => (
          <div className="text-danger fw-bold">
            {formatter.format(row.cash)}
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
        width: "120px",
        selector: (row) => (
          <span
            className={
              row?.status === 0
                ? `text-primary fw-bold`
                : row?.status === 1
                ? "text-success fw-bold"
                : "text-danger fw-bold"
            }
          >
            {row?.status === 0
              ? "Chưa duyệt"
              : row?.status === 1
              ? "Thành công"
              : "Thất bại"}
          </span>
        ),
      },
      {
        name: "",
        button: true,
        width: "140px",
        cell: (row) => (
          <button
            className="btn btn-primary"
            onClick={() => {
              setShow(true);
              setData(row);
            }}
            style={{ fontSize: "13px" }}
          >
            Chi tiết
          </button>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    getAllRequest(user?.id);
  }, [user]);

  return (
    <div className="mt-4 mb-4">
      {request ? (
        request.length > 0 ? (
          <DataTable
            columns={columns}
            data={request}
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
      <ModalDetail show={show} setShow={setShow} data={data} />
    </div>
  );
};

export default WithdrawRequest;
