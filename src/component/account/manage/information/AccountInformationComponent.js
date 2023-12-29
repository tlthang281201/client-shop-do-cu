"use client";
import { useState } from "react";
import { Form } from "react-bootstrap";

const AccountInformationComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-white mt-2 p-3 mb-5">
      <div className="border-3 border-bottom">
        <h2 style={{ fontSize: "17px", fontWeight: "bold" }}>
          Thông tin tài khoản
        </h2>
      </div>
      <div>
        <form>
          <div className="mt-3">
            <label htmlFor="name" className="form-label">
              Họ và tên
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mt-3">
            <label htmlFor="phone" className="form-label">
              Số điện thoại
            </label>
            <input type="tel" className="form-control" id="phone" />
          </div>
          <div className="mt-3 d-flex flex-row gap-3">
            <div className="d-flex flex-column" style={{ width: "30%" }}>
              <label htmlFor="city" className="form-label">
                Thành phố
              </label>
              <Form.Select id="city" defaultValue={""}>
                <option value={""} disabled>
                  ---Chọn thành phố---
                </option>
              </Form.Select>
            </div>
            <div className="d-flex flex-column" style={{ width: "30%" }}>
              <label htmlFor="district" className="form-label">
                Quận/huyện
              </label>
              <Form.Select id="district" defaultValue={""}>
                <option value={""} disabled>
                  ---Chọn quận huyện---
                </option>
              </Form.Select>
            </div>
            <div className="d-flex flex-column" style={{ width: "30%" }}>
              <label htmlFor="ward" className="form-label">
                Phường/xã
              </label>
              <Form.Select id="ward" defaultValue={""}>
                <option value={""} disabled>
                  ---Chọn phường xã---
                </option>
              </Form.Select>
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="phone" className="form-label">
              Địa chỉ
            </label>
            <input type="tel" className="form-control" id="phone" />
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
                onClick={() => setShow(true)}
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

            <div className="mt-3">
              <button className="btn btn-success">Cập nhập</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountInformationComponent;
