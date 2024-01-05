"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { fetchDistrict, fetchWard } from "@/services/AddressServices";
import { Button, CircularProgress } from "@mui/material";
import { updateAddress } from "@/services/AuthService";
import { toast } from "sonner";

const ModalUpdateAddress = ({ show, setShow, city, id, getUserInfo }) => {
  const [address, setAddress] = useState({
    city: city,
    district: [],
    ward: [],
  });
  const [addressData, setAddressData] = useState({
    city: null,
    district: null,
    ward: null,
    address: null,
  });
  const [errors, setErrors] = useState({
    city: null,
    district: null,
    ward: null,
    address: null,
  });
  const [loading, setLoading] = useState({
    district: false,
    ward: false,
    pending: false,
  });
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
  const handleClose = () => {
    setAddressData({ city: null, district: null, ward: null, address: null });
    setErrors({ city: null, district: null, ward: null, address: null });
    setShow(false);
  };
  const validateAddress = (val) => {
    if (val) {
      let name = val.replace(/\s/g, "");
      if (name.length > 5) {
        setAddressData({ ...addressData, address: val });
        setErrors({ ...errors, address: null });
      } else {
        setAddressData({ ...addressData, address: null });
        setErrors({ ...errors, address: "Địa chỉ ít nhất 6 kí tự" });
      }
    } else {
      setErrors({ ...errors, address: null });
    }
  };
  const update = async (data, id) => {
    setLoading({ ...loading, pending: true });
    const { error } = await updateAddress(data, id);
    if (error) {
      toast.error("Có lỗi khi đang cập nhập");
    }
    if (!error) {
      getUserInfo();
      setShow(false);
      toast.success("Cập nhập thành công");
    }
    setLoading({ ...loading, pending: false });
  };
  const handleSubmit = () => {
    if (!addressData.city) {
      setErrors({ ...errors, city: "Vui lòng chọn thành phố" });
      return;
    }
    if (!addressData.district) {
      setErrors({ ...errors, district: "Vui lòng chọn quận, huyện" });
      return;
    }
    if (!addressData.ward) {
      setErrors({ ...errors, ward: "Vui lòng chọn phường, xã" });
      return;
    }
    if (!addressData.address) {
      setErrors({ ...errors, address: "Vui lòng nhập số nhà, tên đường" });
      return;
    }

    update(addressData, id);
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <div
            style={{
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            <span>Địa chỉ</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mt-3 d-flex flex-column gap-3">
          <Form.Select
            id="city"
            defaultValue={""}
            onChange={(e) => {
              getAllDistrict(e.target.value);
              setErrors({ ...errors, city: null });
              setAddressData({ ...addressData, city: e.target.value });
            }}
          >
            <option value={""} disabled>
              Chọn Tỉnh, thành phố
            </option>
            {city?.map((item, i) => (
              <option key={i} value={item.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>
          {errors.city && (
            <span className="text-danger ms-1" style={{ marginTop: -10 }}>
              {errors.city}
            </span>
          )}
          <Form.Select
            id="district"
            disabled={loading.district}
            defaultValue={""}
            onChange={(e) => {
              getAllWard(e.target.value);
              setErrors({ ...errors, district: null });
              setAddressData({ ...addressData, district: e.target.value });
            }}
          >
            <option value={""} disabled>
              Chọn Quận, huyện
            </option>
            {address?.district?.map((item, i) => (
              <option key={i} value={item.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>
          {errors.district && (
            <span className="text-danger ms-1" style={{ marginTop: -10 }}>
              {errors.district}
            </span>
          )}
          <Form.Select
            id="ward"
            disabled={loading.ward}
            defaultValue={""}
            onChange={(e) => {
              setErrors({ ...errors, ward: null });
              setAddressData({ ...addressData, ward: e.target.value });
            }}
          >
            <option value={""} disabled>
              Chọn Phường, Xã
            </option>
            {address?.ward?.map((item, i) => (
              <option key={i} value={item.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>
          {errors.ward && (
            <span className="text-danger ms-1" style={{ marginTop: -10 }}>
              {errors.ward}
            </span>
          )}
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Số nhà, tên đường"
            onChange={(e) => validateAddress(e.target.value)}
          />
          {errors.address && (
            <span className="text-danger ms-1" style={{ marginTop: -10 }}>
              {errors.address}
            </span>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div style={{ position: "relative", width: "100%" }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            disabled={loading.pending}
            style={{ width: "100%" }}
          >
            Cập nhập
          </Button>
          {loading.pending && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                color: "green",
                top: "50%",
                left: "50%",
                marginLeft: "-12px",
                marginTop: "-13px",
              }}
            />
          )}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUpdateAddress;
