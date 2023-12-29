import { useMemo } from "react";
import DataTable from "react-data-table-component";

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
    },
  },
};
const paginationComponentOptions = {
  rowsPerPageText: "Số hàng mỗi trang",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Tất cả",
};

const ShowingPosts = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        name: "Người mua",
        selector: (row) => row?.buyer_id?.name,
        sortable: true,
        wrap: true,
        width: "170px",
      },
      {
        name: "Người bán",
        selector: (row) => row?.seller_id?.name,
        sortable: true,
        wrap: true,
        width: "170px",
      },
      {
        name: "Bài đăng",
        selector: (row) => row?.post_id?.title,
        sortable: true,
        wrap: true,
        width: "220px",
      },
    ],
    []
  );
  return (
    <div className="mt-4 mb-4">
      <DataTable
        columns={columns}
        data={[]}
        customStyles={customStyles}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        persistTableHead
        noDataComponent={
          <span className="text-danger pt-4">Không tìm thấy dữ liệu</span>
        }
      />
    </div>
  );
};

export default ShowingPosts;
