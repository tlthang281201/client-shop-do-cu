"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const CashWallet = () => {
  const [type, setType] = useState("1");
  return (
    <div className="mt-4">
      <div className="sodu">
        <span className="fw-bold">Số dư:</span>
        <span className="ms-5 fw-bold" style={{ color: "red" }}>
          0
        </span>
        <span className="ms-2">VND</span>
      </div>
      <div className="mt-3">
        <Row>
          <Form>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Form.Group>
                <Form.Label>Nhập số tiền cần rút</Form.Label>
                <Form.Control type="number" placeholder="Nhập số tiền" />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Rút về tài khoản ngân hàng hoặc momo</Form.Label>
                <Form.Select
                  defaultValue={"1"}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="1">Tài khoản Ngân hàng</option>
                  <option value="2">Tài khoản Momo</option>
                </Form.Select>
              </Form.Group>
              {type === "1" ? (
                <>
                  <Form.Group className="mt-3">
                    <Form.Label>Chọn ngân hàng</Form.Label>
                    <Form.Select defaultValue={"1"}>
                      <option value="1">Ngân hàng VP bank</option>
                      <option value="2">Ngân hàng BIDV</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label>Nhập số tài khoản</Form.Label>
                    <Form.Control type="text" placeholder="Nhập số tài khoản" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label>Tên người thụ hưởng</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập tên ngân hàng hoặc momo"
                    />
                  </Form.Group>
                </>
              ) : (
                <>
                  <Form.Group className="mt-3">
                    <Form.Label>Nhập số điện thoại</Form.Label>
                    <Form.Control type="text" placeholder="Nhập số tài khoản" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label>Tên người thụ hưởng</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập tên ngân hàng hoặc momo"
                    />
                  </Form.Group>
                </>
              )}
            </Col>
            <Button
              type="submit"
              className="btn btn-danger mt-3 text-decoration-none"
            >
              Gửi yêu cầu
            </Button>
          </Form>
        </Row>
      </div>
    </div>
  );
};

export default CashWallet;
