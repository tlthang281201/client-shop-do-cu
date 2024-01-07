"use client";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import BoxOption from "./BoxOption";
import roundNumber from "@/utils/round-number";
const services = [
  {
    id: 1,
    title: "7 ngày",
    price: 94000,
    // discount: 32,
  },
  {
    id: 2,
    title: "3 ngày",
    price: 63000,
    // discount: 32,
  },
  {
    id: 3,
    title: "1 ngày",
    price: 22000,
    // discount: 32,
  },
  {
    id: 4,
    title: "Tin nổi bật",
    price: 28000,
    type: "feature",
  },
];
const ServiceInfo = () => {
  const [option, setOption] = useState({ option1: null, option2: null });
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const handleChange = (id, type, price) => {
    if (type) {
      if (option.option2) {
        setOption({ ...option, option2: null });
        setTotal((prev) => prev - price);
        setCount((prev) => prev - 1);
      } else {
        setOption({ ...option, option2: id });
        setTotal((prev) => prev + price);
        setCount((prev) => prev + 1);
      }
    } else {
      if (id === option.option1) {
        setOption({ ...option, option1: null });
        setTotal((prev) => prev - price);
        setCount((prev) => prev - 1);
      } else {
        const oldprice = services.find((item) => item.id === option.option1);
        setOption({ ...option, option1: id });
        setCount((prev) => (option.option1 ? prev : prev + 1));
        setTotal((prev) =>
          option.option1 ? prev - oldprice.price + price : prev + price
        );
      }
    }
  };
  return (
    <div className="pe-4 ps-4 pb-2">
      <Row>
        <Col lg={6} md={8} sm={12} xs={12} className="mb-5">
          <div className="fw-bold">Đẩy tin ngay</div>
          <div className="d-flex flex-row gap-2">
            {services?.map(
              (item, i) =>
                !item.type && (
                  <div
                    key={i}
                    style={{ width: "30%", position: "relative" }}
                    onClick={() => handleChange(item.id, item.type, item.price)}
                  >
                    <BoxOption
                      data={item}
                      className={`border p-3 rounded-2 mt-2 option ${
                        option.option1 === item.id && "chose-option"
                      }`}
                    />
                    {option.option1 === item.id && (
                      <i
                        className="bi bi-check-circle-fill"
                        style={{
                          color: "#12a154",
                          position: "absolute",
                          top: 0,
                          right: 0,
                          borderRadius: "100%",
                          backgroundColor: "white",
                        }}
                      ></i>
                    )}
                  </div>
                )
            )}
          </div>
        </Col>
        <Col lg={6} md={4} sm={12} xs={12}>
          <div className="fw-bold">Tin nổi bật</div>
          <div style={{ width: "100%", position: "relative" }}>
            {services?.map(
              (item, i) =>
                item.type === "feature" && (
                  <div
                    key={i}
                    onClick={() => handleChange(item.id, item.type, item.price)}
                  >
                    <BoxOption
                      data={item}
                      className={`border p-3 rounded-2 mt-2 option ${
                        option.option2 === item.id && "chose-option"
                      }`}
                    />
                    {option.option2 === item.id && (
                      <i
                        className="bi bi-check-circle-fill"
                        style={{
                          color: "#12a154",
                          position: "absolute",
                          top: -12,

                          right: 0,
                          borderRadius: "100%",
                          backgroundColor: "white",
                        }}
                      ></i>
                    )}
                  </div>
                )
            )}
          </div>
          <div>
            <Button
              style={{
                backgroundColor: "#12a154",
                width: "100%",
                border: "none",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              THANH TOÁN {count !== 0 && `(${count}) - ${total} đ`}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceInfo;
