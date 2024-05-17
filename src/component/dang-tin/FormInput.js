"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Modal, Row, Spinner } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { Editor } from "@tinymce/tinymce-react";
import {
  getCategoryChildren,
  getCategoryParent,
} from "@/services/CategoryServices";
import {
  fetchCity,
  fetchDistrict,
  fetchWard,
} from "@/services/AddressServices";
import { useUserContext } from "@/context/context";
import Image from "next/image";
import { upImagePublic } from "@/utils/utils";
import { supabase, supabaseAdmin } from "@/utils/supabase-config";
import { getCookie } from "cookies-next";
import { addPost } from "@/services/PostServices";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { formatDongCu } from "@/utils/format-currency";
import { currentUser } from "@/services/AuthService";

const FormInput = () => {
  const router = useRouter();
  const [address, setAddress] = useState({ city: [], district: [], ward: [] });
  const { userSession } = useUserContext();
  const [show, setShow] = useState(false);
  const [coin, setCoin] = useState(0);
  const getBalance = async (id) => {
    const { data } = await currentUser(id);
    setCoin(data?.coin_wallet);
  };
  useEffect(() => {
    getBalance(userSession?.user?.id);
  }, [userSession, show]);

  const maxFileSize = 5 * 1024 * 1024;
  const [errors, setErrors] = useState({ des: null, image: null });
  const [loading, setLoading] = useState({
    pending: false,
    ccate: false,
    district: false,
    ward: false,
    image: false,
    check: false,
  });
  const [isPrice, setIsPrice] = useState(false);
  const [data, setData] = useState({
    title: "",
    pcid: "",
    ccid: "",
    price: isPrice ? "" : null,
    city: "",
    district: "",
    ward: "",
    address: "",
    description: "",
    name: "",
    phone: "",
    is_new: "",
    image: [],
    seller_id: "",
  });
  const [selectedFile, setSelectedFile] = useState([]);

  const editorRef = useRef(null);
  const [category, setCategory] = useState({ parent: [], children: [] });
  const getCategory = async () => {
    const { cateparent } = await getCategoryParent();
    setCategory({ ...category, parent: cateparent.data });
  };
  const getCity = async () => {
    const { data } = await fetchCity();

    setAddress({ ...address, city: data });
  };
  const getAllDistrict = async (id) => {
    setLoading({ ...loading, district: true });
    const { data } = await fetchDistrict(id);
    setAddress({ ...address, district: data });
    setLoading({ ...loading, district: false });
  };
  const getAllWard = async (id) => {
    setLoading({ ...loading, ward: true });
    const { data } = await fetchWard(id);
    setAddress({ ...address, ward: data });
    setLoading({ ...loading, ward: false });
  };
  const checkValidDescription = (content) => {
    var numChars =
      tinymce.activeEditor.plugins.wordcount.body.getCharacterCount();
    if (numChars < 30 || numChars > 1000) {
      setErrors((prev) => ({
        ...prev,
        des: "Mô tả là trường bắt buộc, mô tả ít nhất 30 kí tự và không quá 1000 kí tự",
      }));
    } else {
      setData((prev) => ({ ...prev, description: content }));
      setErrors((prev) => ({
        ...prev,
        des: null,
      }));
    }
  };

  const uploadImage = async (file) => {
    const fileName = await upImagePublic(file);
    setData((prevData) => ({
      ...prevData,
      image: [...prevData.image, fileName],
    }));
    setSelectedFile((prevFiles) => [...prevFiles, file]);
    setLoading((prev) => ({
      ...prev,
      image: false,
    }));
  };

  const handleFileChange = (event) => {
    setData({ ...data, seller_id: userSession.user.id });
    const files = event.target.files;
    setLoading((prev) => ({
      ...prev,
      image: true,
    }));
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size > maxFileSize) {
        setErrors((prev) => ({
          ...prev,
          image: `File "${file.name}" vượt quá dung lượng cho phép.`,
        }));
      } else if (
        selectedFile.length > 6 ||
        files.length > 6 ||
        selectedFile.length + files.length > 6
      ) {
        setErrors((prev) => ({
          ...prev,
          image: `Chọn tối đa 6 ảnh.`,
        }));
      } else if (
        selectedFile.some((selectedFile) => selectedFile.name === file.name)
      ) {
        setErrors((prev) => ({
          ...prev,
          image: `Ảnh đã được chọn`,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          image: null,
        }));
        uploadImage(file);
      }
    }
    setLoading((prev) => ({
      ...prev,
      image: false,
    }));
  };

  const removeImage = async (indexToRemove) => {
    setLoading((prev) => ({
      ...prev,
      image: true,
    }));
    setErrors((prev) => ({
      ...prev,
      image: null,
    }));
    const updatedFiles = selectedFile.filter(
      (file, index) => index !== indexToRemove
    );
    const fileNameRemove = data.image[indexToRemove];
    const res = await supabaseAdmin.storage
      .from("post_images")
      .remove([`public/${fileNameRemove}`]);
    setLoading((prev) => ({
      ...prev,
      image: false,
    }));
    const images = data.image.filter((file, index) => index !== indexToRemove);
    setData((prevData) => ({
      ...prevData,
      image: images,
    }));
    setSelectedFile(updatedFiles);
  };

  const fetchChildrenCategory = async (id) => {
    setLoading({ ...loading, ccate: true });
    const { catechildren } = await getCategoryChildren(id);
    setCategory({ ...category, children: catechildren.data });
    setLoading({ ...loading, ccate: false });
  };

  const handleCreatePost = async () => {
    setLoading({ ...loading, check: true });

    const user = await currentUser(userSession?.user?.id);
    const res1 = await supabase
      .from("users")
      .update({
        coin_wallet:
          user.data.coin_wallet - Math.round((data?.price * 5) / 100),
      })
      .eq("id", userSession?.user?.id);

    const res2 = await supabase.from("transaction_history").insert({
      content: `Thanh toán thành công phí đăng tin với ${formatDongCu(
        Math.round((data?.price * 5) / 100)
      )} Đồng Cũ`,
      status: 0,
      total: Math.round((data?.price * 5) / 100),
      title: "Thanh toán thành công",
      type: 3,
      user: userSession?.user?.id,
    });
    setLoading({ ...loading, pending: true });
    const res = await addPost(data);

    setShow(false);
    if (!res.error) {
      toast.success("Đăng tin thành công");

      router.push(`/dang-tin/${res.data.id}`);
    }
    if (res.error) {
      setLoading({ ...loading, pending: false });
      toast.error(`Đăng tin thất bại lỗi ${res.error.message}`);
    }

    setLoading({ ...loading, check: false });
  };
  const handleSubmit = async () => {
    if (data.image.length < 3) {
      setErrors((prev) => ({
        ...prev,
        image: "Vui lòng chọn ít nhất 3 file",
      }));
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    getCategory();
    getCity();
  }, []);

  return (
    <Form action={handleSubmit}>
      <Form.Group className="mb-4">
        <Row>
          <Col lg={4}>
            <Form.Label>
              Chọn danh mục (<span className="text-danger">*</span>):
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              defaultValue={""}
              name="pcid"
              required
              onChange={(e) => {
                setData({ ...data, pcid: e.target.value });
                fetchChildrenCategory(e.target.value);
              }}
            >
              <option value={""} disabled>
                -- Chọn danh mục --
              </option>
              {category?.parent?.map((item, i) => (
                <option key={i} value={item.id}>
                  {item?.name}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col lg={4}>
            <div className="d-xs-block d-lg-none mt-4"></div>
            <Form.Label>
              Chọn nhóm (<span className="text-danger">*</span>):
            </Form.Label>
            <Form.Select
              name="ccid"
              aria-label="Default select example"
              required
              defaultValue={""}
              onChange={(e) => {
                setData({ ...data, ccid: e.target.value });
              }}
              disabled={loading.ccate}
            >
              <option value={""} disabled>
                -- Chọn danh mục --
              </option>
              {category?.children?.map((item, i) => (
                <option key={i} value={item.id}>
                  {item?.name}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col lg={4}>
            <div className="d-xs-block d-lg-none mt-4"></div>
            <Form.Label>
              Trạng thái sản phẩm (<span className="text-danger">*</span>):
            </Form.Label>
            <Form.Select
              name="is_new"
              required
              aria-label="Default select example"
              defaultValue={""}
              onChange={(e) => setData({ ...data, is_new: e.target.value })}
            >
              <option value={""} disabled>
                -- Chọn --
              </option>
              <option key={1} value={1}>
                Đã sử dụng
              </option>
              <option key={0} value={0}>
                Mới
              </option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Tiêu đề (<span className="text-danger">*</span>):
        </Form.Label>
        <Form.Control
          type="text"
          required
          name="title"
          onChange={(e) =>
            setData((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder="Tiêu đề bài đăng"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Row className="d-flex align-items-center">
          <Col lg={4} md={4} sm={5} xs={5}>
            <Form.Label>
              Giá (<span className="text-danger">*</span>):
            </Form.Label>
            <CurrencyInput
              value={data.price}
              required={isPrice ? true : false}
              suffix="  VNĐ"
              min={10000}
              className="form-control"
              onValueChange={(value) => {
                setIsPrice(true);
                setData({ ...data, price: value });
              }}
              allowNegativeValue={false}
            />
          </Col>
          <Col>
            <Form.Label></Form.Label>
            <Form.Check // prettier-ignore
              type="radio"
              id={`price`}
              label={`Giá thương lượng`}
              checked={!isPrice}
              onChange={() => {
                setIsPrice(false);
                setData({ ...data, price: "" });
              }}
              className="mt-1"
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Địa chỉ (<span className="text-danger">*</span>):
        </Form.Label>
        <Row>
          <Col lg={4}>
            <Form.Select
              aria-label="Default select example"
              name="city"
              required
              onChange={(e) => {
                setData({ ...data, city: e.target.value });
                getAllDistrict(e.target.value);
              }}
              defaultValue={""}
            >
              <option value={""} disabled>
                -- Chọn thành phố --
              </option>
              {address?.city?.map((item, i) => (
                <option key={i} value={item.id}>
                  {item?.name}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col lg={4}>
            <div className="d-xs-block d-lg-none mt-3"></div>

            <Form.Select
              aria-label="Default select example"
              required
              defaultValue={""}
              name="district"
              disabled={loading.district}
              onChange={(e) => {
                setData({ ...data, district: e.target.value });
                getAllWard(e.target.value);
              }}
            >
              <option value={""} disabled>
                -- Chọn quận huyện --
              </option>
              {address?.district?.map((item, i) => (
                <option key={i} value={item.id}>
                  {item?.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col lg={4}>
            <div className="d-xs-block d-lg-none mt-3"></div>

            <Form.Select
              name="ward"
              aria-label="Default select example"
              required
              defaultValue={""}
              disabled={loading.ward}
              onChange={(e) => {
                setData({ ...data, ward: e.target.value });
              }}
            >
              <option value={""} disabled>
                -- Chọn phường xã --
              </option>
              {address?.ward?.map((item, i) => (
                <option key={i} value={item.id}>
                  {item?.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Địa chỉ cụ thể"
          type="text"
          required
          name="address"
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>
          Thông tin liên hệ (<span className="text-danger">*</span>):
        </Form.Label>
        <Row>
          <Col lg={5} md={5} sm={6} xs={6}>
            <Form.Control
              required
              placeholder="Tên liên hệ"
              type="text"
              name="name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Col>

          <Col lg={5} md={5} sm={6} xs={6}>
            <Form.Control
              placeholder="Số điện thoại liên hệ"
              required
              pattern="0\d{9}"
              title="Vui lòng nhập số điện thoại có 10 chữ số"
              type="text"
              name="phone"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Hình ảnh:</Form.Label>
        <div
          className="w-100 d-flex"
          style={{ flexWrap: "wrap", alignItems: "center" }}
        >
          {selectedFile?.map((file, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100px",
                height: "100px",
                float: "left",
                margin: "0 20px 35px 0",
                background: "#FFFFFF",
                border: "1px solid #D5D5D5",
                borderRadius: "5px",
              }}
            >
              <Image
                alt={index + 1}
                key={index}
                style={{
                  position: "absolute",
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  top: 0,
                  bottom: 0,
                  margin: "auto",
                }}
                src={URL.createObjectURL(file)}
                width={50}
                height={50}
              />
              <div
                onClick={() => removeImage(index)}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  width: "20px",
                  cursor: "pointer",
                  height: "20px",
                  top: 0,
                  right: 0,
                  fontSize: "14px",
                  lineHeight: "20px",
                  padding: 0,
                  color: "gray",
                  backgroundColor: "rgba(225, 225, 225, 0.1)",
                  textAlign: "center",
                  borderRadius: "0 0 0 2px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <Form.Label
          htmlFor="dropzone-file"
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ border: "1px dashed gray", cursor: "pointer" }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center pt-3">
            <svg
              className="mb-2 text-secondary "
              aria-hidden="true"
              width={50}
              height={50}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p
              className="mb-2 text-secondary "
              style={{ fontSize: "13px", fontWeight: "normal" }}
            >
              <span className="font-semibold">Chọn ảnh để tải lên</span>
            </p>
            <p
              className=" text-secondary"
              style={{ fontSize: "13px", fontWeight: "normal" }}
            >
              Lưu ý: Số lượng tối đa là 6 ảnh, định dạng ảnh hỗ trợ: JPG, JPEG,
              PNG
            </p>
            <p
              className=" text-secondary"
              style={{ fontSize: "13px", fontWeight: "normal" }}
            >
              Hãy chọn hình nền đầu tiền, sau đó mới chọn các hình còn lại
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            name="image"
            className="d-none"
            accept="image/png, image/jpg, image/jpeg"
            multiple
            onChange={(e) => handleFileChange(e)}
          />
        </Form.Label>
        {errors.image && <span className="text-danger">{errors.image}</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Mô tả chi tiết (<span className="text-danger">*</span>):
        </Form.Label>
        <Editor
          apiKey="1q9rjamh7noaeyfgaccykoxra3rna2v9p4byz9yios24igux"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="Nhập mô tả sản phẩm"
          init={{
            height: 300,
            menubar: false,
            plugins: "wordcount",
            toolbar:
              "undo redo  | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist | wordcount",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:15px }",
          }}
          onEditorChange={(content) => {
            checkValidDescription(content);
          }}
        />
        {errors.des && <span className="text-danger">{errors.des}</span>}
      </Form.Group>
      {isPrice && (
        <Form.Group className="mb-3 d-flex gap-3">
          <Form.Label>Phí tin đăng (5%):</Form.Label>
          <Form.Label style={{ color: "#FF5757" }}>
            {formatDongCu(Math.round((data?.price * 5) / 100))} Đồng Cũ
          </Form.Label>
        </Form.Group>
      )}
      <Form.Group className="pt-3 pb-5 d-flex justify-content-center">
        <div className="position-relative">
          <Button
            type="submit"
            className="d-flex align-items-center"
            disabled={loading.pending || !data.description}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-square-fill me-2"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
            </svg>
            Đăng tin
          </Button>
          {loading.pending && (
            <Spinner
              animation="border"
              variant="primary"
              style={{ position: "absolute", top: 0, right: "35%" }}
            />
          )}
        </div>
      </Form.Group>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Xác nhận thanh toán phí tin đăng là{" "}
            <span className="fw-bold text-danger">
              {formatDongCu(Math.round((data?.price * 5) / 100))} Đồng cũ{" "}
            </span>
          </p>
          {coin && (
            <p style={{ fontSize: "13px", fontStyle: "italic" }}>
              Số dư hiện tại:{" "}
              <span className="fw-bold">{formatDongCu(coin)} Đồng cũ</span>
            </p>
          )}

          {coin && coin < Math.round((data?.price * 5) / 100) && (
            <p className="text-danger" style={{ fontSize: "13px" }}>
              Số dư hiện tại không đủ để thanh toán
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            disabled={loading.check}
            onClick={() => setShow(false)}
          >
            Không
          </Button>
          <Button
            variant="success"
            disabled={
              loading.check || coin < Math.round((data?.price * 5) / 100)
            }
            onClick={() => handleCreatePost()}
          >
            {loading.check && <Spinner size="sm me-1" />}
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default FormInput;
