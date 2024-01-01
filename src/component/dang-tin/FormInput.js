"use client";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";

const FormInput = () => {
  const [isPrice, setIsPrice] = useState(true);
  const [data, setData] = useState({ price: "" });
  return (
    <Form>
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          Tiêu đề (<span className="text-danger">*</span>):
        </Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
    </Form>
  );
};

export default FormInput;
