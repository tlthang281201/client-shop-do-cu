import { useUserContext } from "@/context/context";
import { getPostByUserId } from "@/services/PostServices";
import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { Spinner } from "react-bootstrap";
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
    },
  },
};
const paginationComponentOptions = {
  rowsPerPageText: "Số hàng mỗi trang",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Tất cả",
};

const SoldPosts = () => {
  const { user } = useUserContext();
  const [posts, setPosts] = useState();
  const getAllPostByUserId = async (id) => {
    const { data: post } = await getPostByUserId(id);
    if (post) {
      setPosts(post.filter((onep) => onep.is_sold === true));
    }
  };
  useEffect(() => {
    getAllPostByUserId(user?.id);
  }, [user]);

  const columns = useMemo(
    () => [
      {
        name: "Hình ảnh",
        wrap: true,
        width: "150px",
        cell: (row) => (
          <Link href="/danh">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${row.images[0]}`}
              width={120}
              height={80}
              style={{ objectFit: "fill", marginBottom: 10, marginTop: 10 }}
            />
          </Link>
        ),
      },
      {
        name: "Tiêu đề",
        wrap: true,
        cell: (row) => <div className="d-flex">{row.title}</div>,
      },
      {
        name: "Danh mục",
        width: "120px",
        selector: (row) => row.cate_p_id?.name,
      },
      {
        name: "Ngày đăng",
        selector: (row) => row.created_at,
        wrap: true,
        sortable: true,
        width: "180px",
        format: (row) => moment(row.created_at).format("DD/MM/YYYY, HH:mm:ss"),
      },
    ],
    []
  );
  return (
    <div className="mt-4 mb-4">
      {posts ? (
        <DataTable
          columns={columns}
          data={posts}
          customStyles={customStyles}
          pagination
          paginationPerPage={10}
          paginationComponentOptions={paginationComponentOptions}
          noDataComponent={
            <span className="text-danger pt-3">Bạn chưa có tin đăng nào</span>
          }
          persistTableHead
        />
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="danger" />
        </div>
      )}

      {/* {posts ? (
        posts.map((item, i) => <PostComponent />)
      ) : (
        
      )} */}
    </div>
  );
};

export default SoldPosts;
