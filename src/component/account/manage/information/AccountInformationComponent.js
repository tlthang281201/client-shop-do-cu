"use client";
import { useUserContext } from "@/context/context";
import { fetchCity } from "@/services/AddressServices";
import { updateProfile } from "@/services/AuthService";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ModalUpdateAddress from "./ModalUpdateAddress";
import { Button, CircularProgress } from "@mui/material";
import ModalUpdatePassword from "./ModalUpdatePassword";

const AccountInformationComponent = ({ data, session }) => {
  const { userSession, getUserInfo } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalPassword, setShowModalPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: null,
    phone: null,
  });
  const [address, setAddress] = useState({ city: [], district: [], ward: [] });

  const [newData, setNewData] = useState({
    name: null,
    phone: null,
  });
  const getAllCity = async () => {
    const { data } = await fetchCity();
    setAddress({ ...address, city: data });
  };

  const validatePhone = (str) => {
    if (str) {
      const phoneRegex = /^0\d{9}$/;
      if (phoneRegex.test(str)) {
        setNewData({ ...newData, phone: str });
        setErrors({ ...errors, phone: null });
      } else {
        setNewData({ ...newData, phone: null });
        setErrors({ ...errors, phone: "Số điện thoại không hợp lệ" });
      }
    } else {
      setErrors({ ...errors, phone: null });
    }
  };
  const validateName = (val) => {
    let name = val.replace(/\s/g, "");
    if (name.length > 2) {
      setNewData({ ...newData, name: val });
      setErrors({ ...errors, name: null });
    } else {
      setNewData({ ...newData, name: null });
      setErrors({ ...errors, name: "Tên hiển thị ít nhất 3 kí tự" });
    }
  };

  useEffect(() => {
    setNewData({
      name: data?.name,
      phone: data?.phone,
    });
  }, [data]);
  useEffect(() => {
    getAllCity();
  }, []);
  const update = async (id) => {
    setLoading(true);
    const { error } = await updateProfile(newData, id);
    if (!error) {
      getUserInfo();
      toast.success("Cập nhập thông tin thành công");
    } else {
      toast.error(error.message);
    }
    setLoading(false);
  };
  const handleSubmit = () => {
    if (
      !errors.phone &&
      !errors.name &&
      !errors.address &&
      !errors.district &&
      !errors.ward
    ) {
      update(userSession.user.id);
    }
  };

  return (
    <>
      <div className="bg-white mt-2 p-3 mb-5">
        <div className="border-3 border-bottom">
          <h2 style={{ fontSize: "17px", fontWeight: "bold" }}>
            Thông tin tài khoản
          </h2>
        </div>
        <div>
          <div className="mt-3">
            <label htmlFor="name" className="form-label">
              Họ và tên
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={newData?.name}
              onChange={(e) => validateName(e.target.value)}
            />
            {errors.name && (
              <div className="pt-2">
                <span className="text-danger">{errors.name}</span>
              </div>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              disabled
              value={session?.user?.email}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="phone" className="form-label">
              Số điện thoại
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={newData?.phone}
              placeholder={`${!newData?.phone ? "Chưa cập nhập" : ""}`}
              onChange={(e) => validatePhone(e.target.value)}
            />
            {errors.phone && (
              <div className="pt-2">
                <span className="text-danger">{errors.phone}</span>
              </div>
            )}
          </div>

          <div className="mt-3 position-relative">
            <label htmlFor="address" className="form-label">
              Địa chỉ
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              disabled
              value={
                data?.address
                  ? `${data?.address}, ${data?.ward?.name}, ${data?.district?.name}, ${data?.city?.name}`
                  : "Chưa cập nhập"
              }
            />
            <div
              className="position-absolute "
              style={{
                right: 0,
                top: 0,
                paddingBottom: "1px",
                color: "#9f9f9f",
                borderBottom: "2px solid #9f9f9f",
                cursor: "pointer",
              }}
              onClick={() => setShowModal(true)}
            >
              Cập nhập địa chỉ
            </div>
          </div>
          <div className="mt-3 position-relative">
            <label
              htmlFor="password"
              className="form-label d-flex justify-content-between"
            >
              Mật khẩu
            </label>
            {show === false && (
              <input
                type="password"
                disabled
                className="form-control"
                id="password"
                value={"**********"}
              />
            )}
            {show === false && (
              <div
                className="position-absolute "
                style={{
                  right: 0,
                  top: 0,
                  paddingBottom: "1px",
                  color: "#9f9f9f",
                  borderBottom: "2px solid #9f9f9f",
                  cursor: "pointer",
                }}
                onClick={() => setShowModalPassword(true)}
              >
                Đổi mật khẩu
              </div>
            )}
            {show && (
              <div
                className="position-absolute "
                style={{
                  right: 0,
                  top: 0,
                  paddingBottom: "1px",
                  color: "#9f9f9f",
                  borderBottom: "2px solid #9f9f9f",
                  cursor: "pointer",
                }}
                onClick={() => setShow(false)}
              >
                Đóng
              </div>
            )}
            {show && (
              <div className="border p-3 mt-2">
                <label
                  htmlFor="oldpassword"
                  className="form-label d-flex justify-content-between"
                >
                  Mật khẩu hiện tại
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="oldpassword"
                />
                <div className="mt-3">
                  <label
                    htmlFor="newpassword"
                    className="form-label d-flex justify-content-between"
                  >
                    Mật khẩu mới
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newpassword"
                  />
                </div>
                <button className="btn btn-primary mt-2">Đổi mật khẩu</button>
              </div>
            )}

            <div style={{ position: "relative" }} className="mt-3">
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
                disabled={loading}
              >
                Cập nhập
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                    color: "green",
                    left: 35,
                    top: "50%",
                    marginTop: "-13px",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalUpdateAddress
        show={showModal}
        setShow={setShowModal}
        city={address.city}
        id={userSession?.user?.id}
        getUserInfo={getUserInfo}
      />

      <ModalUpdatePassword
        show={showModalPassword}
        setShow={setShowModalPassword}
        id={userSession?.user?.id}
      />
    </>
  );
};

export default AccountInformationComponent;
