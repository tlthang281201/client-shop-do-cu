import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { getPostByUserId, updatePostShowOrHide } from "@/services/PostServices";
import { useUserContext } from "@/context/context";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Button, Modal, Spinner } from "react-bootstrap";
import CreateSlug from "@/utils/create-slug";
import { toast } from "sonner";
import { supabase } from "@/utils/supabase-config";
import { currentUser } from "@/services/AuthService";
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

const ShowingPosts = () => {
  const { user, getUserInfo } = useUserContext();
  const [posts, setPosts] = useState();
  const [id, setID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const getAllPostByUserId = async (id) => {
    const { data: post } = await getPostByUserId(id);
    if (post) {
      setPosts(
        post.filter(
          (onep) =>
            onep.status === 1 &&
            onep.is_show === true &&
            onep.is_sold === false &&
            onep.is_selling === false
        )
      );
    }
  };
  useEffect(() => {
    getAllPostByUserId(user?.id);
  }, [user]);

  const hidePost = async (id) => {
    const { data } = await updatePostShowOrHide(id, false);
    toast.success("Ẩn tin thành công");
    getAllPostByUserId(user?.id);
  };

  const featuredPost = async (id) => {
    setLoading(true);
    const { data } = await currentUser(user?.id);
    if (data.coin_wallet < 50000) {
      toast.error(
        "Bạn không đủ Đồng Cũ để thanh toán, vui lòng nạp thêm Đồng Cũ"
      );
      setShow(false);
    } else {
      const response = await supabase
        .from("users")
        .update({ coin_wallet: data.coin_wallet - 50000 })
        .eq("id", user?.id);
      const res = await supabase.from("transaction_history").insert({
        content:
          "Thanh toán thành công dịch vụ tin đăng nổi bật với 50.000 Đồng Cũ",
        status: 0,
        total: 50000,
        title: "Thanh toán thành công",
        type: 2,
        user: user?.id,
      });
      const res1 = await supabase
        .from("post")
        .update({ is_featured: true })
        .eq("id", id);
      getUserInfo();
      if (!res1.error) {
        toast.success("Thanh toán thành công");
        getAllPostByUserId(user?.id);
      }
      if (res1.error) {
        toast.error(`Lỗi ${error.message}`);
      }
      setShow(false);
    }

    setLoading(false);
  };

  const columns = useMemo(
    () => [
      {
        name: "Hình ảnh",
        wrap: true,
        width: "150px",
        cell: (row) => (
          <Link href={`/${CreateSlug(row.title)}-${row.id}`}>
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
        width: "190px",
        cell: (row) => (
          <div className="d-flex flex-column">
            <Link
              className="text-decoration-none fw-bold text-black"
              href={`/${CreateSlug(row.title)}-${row.id}`}
            >
              {row.title}
            </Link>
            {row.is_featured === true && (
              <span className="text-danger mt-1">Tin nổi bật</span>
            )}
          </div>
        ),
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
      {
        name: "",
        button: true,
        width: "100px",
        cell: (row) => (
          <button className="btn btn-primary" onClick={() => hidePost(row.id)}>
            <i className="bi bi-eye-slash me-1"></i>Ẩn tin
          </button>
        ),
      },
      {
        name: "",
        button: true,
        width: "120px",
        cell: (row) =>
          row.is_featured === false && (
            <button
              className="btn btn-success"
              onClick={() => {
                setID(row.id);
                setShow(true);
              }}
            >
              Tin nổi bật
            </button>
          ),
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
            <span className="text-danger pt-3">
              Bạn chưa có tin đăng nào đang hiển thị
            </span>
          }
          persistTableHead
        />
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="danger" />
        </div>
      )}

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Để chuyển tin đăng này thành tin đăng nổi bật, bạn cần thanh toán{" "}
            <span className="fw-bold text-danger">50.000 Đồng Cũ</span>
          </p>
          <p style={{ fontSize: "13px", fontStyle: "italic" }}>
            Tin đăng nổi bật sẽ được hiển thị ở mục Tin nổi bật
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            disabled={loading}
            onClick={() => setShow(false)}
          >
            Không
          </Button>
          <Button
            variant="success"
            disabled={loading}
            onClick={() => featuredPost(id)}
          >
            {loading && <Spinner size="sm me-1" />}
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShowingPosts;
