"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import PostInfo from "./PostInfo";
import { formatter } from "@/utils/format-currency";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useUserContext } from "@/context/context";
import {
  fetchCity,
  fetchDistrict,
  fetchWard,
} from "@/services/AddressServices";
import { createOrder } from "@/services/OrderService";
import { toast } from "sonner";
import { CircularProgress } from "@mui/material";
import { redirect, useRouter } from "next/navigation";
import { updatePostIsSelling } from "@/services/PostServices";

const FormInputOrder = ({ data }) => {
  const router = useRouter();
  const [address, setAddress] = useState({ city: [], district: [], ward: [] });
  const { userSession } = useUserContext();
  const [loading, setLoading] = useState({
    district: false,
    ward: false,
  });

  const [pending, setPending] = useState(false);

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

  const [orderData, setOrderData] = useState({
    seller: data.seller_id.id,
    buyer: "",
    name: "",
    phone: "",
    city: "",
    district: "",
    ward: "",
    address: "",
    price: "",
    post_id: "",
    payment_type: data?.price ? "1" : "2",
    note: "",
  });

  useEffect(() => {
    setOrderData({
      ...orderData,
      buyer: userSession?.user?.id,
      price: data.price,
      post_id: data.id,
    });
  }, [userSession]);
  useEffect(() => {
    getCity();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    if (orderData.payment_type === "1") {
      const response = await fetch(
        "https://shop-do-cu.vercel.app/api/checkout/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            order: orderData,
          }),
        }
      );
      const res = await response.json();
      router.replace(res.url);
    } else {
      const { res } = await createOrder(orderData);
      const res2 = await updatePostIsSelling(res.data.post_id);
      setPending(false);
      if (!res.error) {
        router.replace("/user/orders/buyer");
        toast.success("Đặt hàng thành công");
      }
      if (res.error) {
        toast.error(`Đặt hàng thất bại, lỗi ${res.error.message}`);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="px-3">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-center gap-1">
            <Image src={"/images/location.svg"} width={20} height={20} />
            <span className="fw-bold">Thông tin người nhận</span>
          </div>
          <div className="d-flex flex-row gap-2 mt-2">
            <div style={{ width: "50%" }}>
              <Form.Control
                type="text"
                placeholder="Họ tên"
                name="name"
                onChange={(e) =>
                  setOrderData({ ...orderData, name: e.target.value })
                }
                required
              />
            </div>
            <div style={{ width: "50%" }}>
              <Form.Control
                type="text"
                pattern="0\d{9}"
                required
                placeholder="Số điện thoại"
                onChange={(e) =>
                  setOrderData({ ...orderData, phone: e.target.value })
                }
                name="phone"
              />
            </div>
          </div>
          <div className="d-flex flex-row gap-2 mt-3">
            <div style={{ width: "30%" }}>
              <Form.Select
                required
                defaultValue={""}
                aria-label="Default select example"
                name="city"
                onChange={(e) => {
                  getAllDistrict(e.target.value);
                  setOrderData({ ...orderData, city: e.target.value });
                }}
              >
                <option value={""} disabled>
                  Thành, phố
                </option>
                {address?.city?.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div style={{ width: "30%" }}>
              <Form.Select
                required
                aria-label="Default select example"
                name="district"
                disabled={loading.district}
                defaultValue={""}
                onChange={(e) => {
                  getAllWard(e.target.value);
                  setOrderData({ ...orderData, district: e.target.value });
                }}
              >
                <option value={""} disabled>
                  Quận, huyện
                </option>
                {address?.district?.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div style={{ width: "30%" }}>
              <Form.Select
                required
                aria-label="Default select example"
                name="ward"
                disabled={loading.ward}
                onChange={(e) =>
                  setOrderData({ ...orderData, ward: e.target.value })
                }
                defaultValue={""}
              >
                <option value={""} disabled>
                  Phường, xã
                </option>
                {address?.ward?.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
          <div className="d-flex flex-row gap-2 mt-3">
            <div style={{ width: "100%" }}>
              <Form.Control
                required
                type="text"
                placeholder="Số nhà, Địa chỉ"
                name="address"
                onChange={(e) =>
                  setOrderData({ ...orderData, address: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />
        <PostInfo data={data} />
        <hr style={{ color: "#e8e8e8", height: "1px", opacity: 1 }} />

        <div className="d-flex flex-row align-items-center gap-2">
          <Image src={"/images/payment_method_v2.svg"} width={20} height={20} />
          <span className="fw-bold">Phương thức thanh toán</span>
        </div>
        <div className="d-flex flex-row mt-2">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={data?.price ? 1 : 2}
            name="payment_type"
            onChange={(e) =>
              setOrderData({ ...orderData, payment_type: e.target.value })
            }
          >
            {data?.price && (
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
        {data?.price && (
          <div className="d-flex flex-column">
            <span className="fw-bold">Thông tin thanh toán</span>
            <div
              className="d-flex justify-content-between mt-2 pb-2"
              style={{ borderBottom: "1px dashed black" }}
            >
              <span>Số tiền</span>
              <span>{formatter.format(data.price)}</span>
            </div>
            <div className="d-flex justify-content-between mt-2 pb-2">
              <span>Tổng thanh toán</span>
              <span className="fw-bold">{formatter.format(data.price)}</span>
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
          className="mt-2"
          rows={3}
          onChange={(e) => setOrderData({ ...orderData, note: e.target.value })}
          placeholder="Nhập ghi chú cho người bán"
        />

        <div className="d-flex flex-row mt-3 gap-5 align-items-center justify-content-between pb-3">
          {data?.price ? (
            <div className="d-flex flex-column">
              <span style={{ fontSize: "13px" }}>Tổng cộng</span>
              <span className="fw-bold" style={{ fontSize: "20px" }}>
                {formatter.format(data.price)}
              </span>
            </div>
          ) : (
            <div></div>
          )}

          <div className="position-relative" style={{ width: "50%" }}>
            <Button
              type="submit"
              disabled={pending}
              style={{
                maxHeight: "40px",
                width: "100%",
                backgroundColor: "#FF5757",
                border: "none",
                fontWeight: "bold",
              }}
            >
              ĐẶT HÀNG
            </Button>
            {pending && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  color: "white",
                  top: "50%",
                  left: "50%",
                  marginLeft: "-12px",
                  marginTop: "-15px",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Form>
  );
};

export default FormInputOrder;
