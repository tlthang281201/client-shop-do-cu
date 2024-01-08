"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { formatter } from "@/utils/format-currency";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PostInfo from "./PostInfo";

const FormInfo = ({ order }) => {
  return (
    <Form>
      <div className="px-3">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-center gap-1">
            <Image src={"/images/location.svg"} width={20} height={20} />
            <span className="fw-bold">Thông tin người nhận</span>
          </div>
          <div className="d-flex flex-row gap-2 mt-2">
            <div style={{ width: "50%" }}>
              <Form.Label>Họ tên</Form.Label>
              <Form.Control
                type="text"
                value={order?.name}
                disabled
                name="name"
                required
              />
            </div>
            <div style={{ width: "50%" }}>
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="text"
                required
                disabled
                value={order?.phone}
                name="phone"
              />
            </div>
          </div>
          <div className="d-flex flex-row gap-2 mt-3">
            <div style={{ width: "30%" }}>
              <Form.Control
                required
                type="text"
                value={order?.city?.name}
                name="address"
                disabled
              />
            </div>
            <div style={{ width: "30%" }}>
              <Form.Control
                required
                type="text"
                value={order?.district?.name}
                name="address"
                disabled
              />
            </div>
            <div style={{ width: "30%" }}>
              <Form.Control
                required
                type="text"
                value={order?.ward.name}
                name="address"
                disabled
              />
            </div>
          </div>
          <div className="d-flex flex-row gap-2 mt-3">
            <div style={{ width: "100%" }}>
              <Form.Control
                required
                type="text"
                value={order?.address}
                disabled
                name="address"
              />
            </div>
          </div>
        </div>
        <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />
        <PostInfo data={order} />
        <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />

        <div className="d-flex flex-row align-items-center gap-2">
          <Image src={"/images/payment_method_v2.svg"} width={20} height={20} />
          <span className="fw-bold">Phương thức thanh toán</span>
        </div>
        <div className="d-flex flex-row mt-2">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={order?.payment_type}
            name="radio-buttons-group"
          >
            {order?.payment_type === 1 && (
              <div className="d-flex flex-row align-items-center">
                <FormControlLabel value={1} control={<Radio />} />
                <Image
                  src={"/images/momo.png"}
                  width={20}
                  height={20}
                  className="me-2"
                />
                <label>Ví Momo</label>
              </div>
            )}
            {order?.payment_type === 2 && (
              <div className="d-flex flex-row align-items-center">
                <FormControlLabel value={2} control={<Radio />} />
                <Image
                  src={"/images/cash.png"}
                  width={20}
                  height={20}
                  className="me-2"
                />
                <label>Thanh toán COD</label>
              </div>
            )}
          </RadioGroup>
        </div>
        <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />
        <div className="d-flex flex-row align-items-center gap-2">
          <Image
            src={"/images/delivery_dining_v2.svg"}
            width={20}
            height={20}
          />
          <span className="fw-bold">Phương thức giao hàng</span>
        </div>
        <div className="d-flex flex-row align-items-center gap-2 mt-3 border p-3 rounded-2">
          <Image src={"/images/forum.svg"} width={20} height={20} />
          <span className="fw-bold">Tự thoả thuận phương thức giao hàng</span>
        </div>
        <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />
        {order?.post_id?.price && (
          <div className="d-flex flex-column">
            <span className="fw-bold">Thông tin thanh toán</span>
            <div
              className="d-flex justify-content-between mt-2 pb-2"
              style={{ borderBottom: "1px dashed black" }}
            >
              <span>Số tiền</span>
              <span>{formatter.format(order?.post_id?.price)}</span>
            </div>
            <div className="d-flex justify-content-between mt-2 pb-2">
              <span>Tổng thanh toán</span>
              <span className="fw-bold">
                {formatter.format(order?.post_id?.price)}
              </span>
            </div>
            <div className="d-flex flex-row gap-2 align-items-center mt-2">
              <Image src={"/images/verified_user.svg"} width={30} height={30} />
              <span style={{ fontSize: "15px" }}>
                Số tiền thanh toán được đảm bảo trong{" "}
                <span className="fw-bold">7 ngày</span> hoặc đến khi bạn nhận
                được hàng.
              </span>
            </div>
          </div>
        )}

        <div className="d-flex flex-row align-items-center gap-2 mt-4">
          <Image src={"/images/sticky_note.svg"} width={20} height={20} />
          <span className="fw-bold" style={{ fontSize: "17px" }}>
            Ghi chú
          </span>
        </div>
        <Form.Control
          as="textarea"
          className="mt-2 mb-4"
          rows={3}
          disabled
          value={order?.note ? order?.note : ""}
        />
      </div>
    </Form>
  );
};

export default FormInfo;
