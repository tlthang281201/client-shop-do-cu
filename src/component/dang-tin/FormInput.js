"use client";
import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { Editor } from "@tinymce/tinymce-react";
const FormInput = () => {
  const [isPrice, setIsPrice] = useState(true);
  const editorRef = useRef(null);
  const [data, setData] = useState({ price: "" });
  return (
    <Form>
      <Form.Group className="mb-4">
        <Row>
          <Col lg={5}>
            <Form.Label>
              Chọn danh mục (<span className="text-danger">*</span>):
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>

          <Col lg={5}>
            <div className="d-xs-block d-lg-none mt-4"></div>
            <Form.Label>
              Chọn nhóm (<span className="text-danger">*</span>):
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Tiêu đề (<span className="text-danger">*</span>):
        </Form.Label>
        <Form.Control type="text" />
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
              name="price"
              suffix="  VNĐ"
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
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>

          <Col lg={4}>
            <div className="d-xs-block d-lg-none mt-3"></div>

            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col lg={4}>
            <div className="d-xs-block d-lg-none mt-3"></div>

            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Địa chỉ cụ thể" type="text" />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>
          Thông tin liên hệ (<span className="text-danger">*</span>):
        </Form.Label>
        <Row>
          <Col lg={5} md={5} sm={6} xs={6}>
            <Form.Control placeholder="Tên liên hệ" type="text" />
          </Col>

          <Col lg={5} md={5} sm={6} xs={6}>
            <Form.Control placeholder="Số điện thoại liên hệ" type="text" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Hình ảnh:</Form.Label>
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
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Mô tả chi tiết (<span className="text-danger">*</span>)::
        </Form.Label>
        <Editor
          apiKey="1q9rjamh7noaeyfgaccykoxra3rna2v9p4byz9yios24igux"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="Nhập mô tả sản phẩm, thông tin chi tiết"
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
          // onEditorChange={(content) => {
          //   checkValidDescription(content);
          // }}
        />
      </Form.Group>
      <Form.Group className="pb-5 d-flex justify-content-center">
        <Button className="d-flex align-items-center">
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
      </Form.Group>
    </Form>
  );
};

export default FormInput;
