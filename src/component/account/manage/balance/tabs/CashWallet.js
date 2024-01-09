"use client";

import { useUserContext } from "@/context/context";
import { currentUser } from "@/services/AuthService";
import { createWithdrawRequest } from "@/services/WithdrawServices";
import { formatDongCu } from "@/utils/format-currency";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { toast } from "sonner";
const options = [
  { value: "Vietcombank", label: "Vietcombank" },
  { value: "Agribank", label: "Agribank" },
  { value: "BIDV", label: "BIDV" },
  { value: "Techcombank", label: "Techcombank" },
  { value: "MBBank", label: "MBBank" },
  { value: "VPBank", label: "VPBank" },
  { value: "Sacombank", label: "Sacombank" },
  { value: "ACB", label: "ACB" },
  { value: "VietinBank", label: "VietinBank" },
  { value: "TPBank", label: "TPBank" },
  { value: "OceanBank", label: "OceanBank" },
  { value: "HDBank", label: "HDBank" },
  { value: "NamABank", label: "NamABank" },
  { value: "ABBANK", label: "ABBANK" },
  { value: "SeaBank", label: "SeaBank" },
  { value: "PGBank", label: "PGBank" },
  { value: "VietCapitalBank", label: "VietCapitalBank" },
];
const CashWallet = () => {
  const router = useRouter();
  const [type, setType] = useState("1");
  const { user } = useUserContext();
  const [cash, setCash] = useState(0);
  const [errors, setErrors] = useState({
    amount: null,
    bank_number: null,
    name: null,
    momo_phone: null,
  });
  const [loading, setLoading] = useState(false);
  const [dataBanking, setDataBanking] = useState({
    user_id: "",
    amount: "",
    bank_name: "Vietcombank",
    bank_number: "",
    name: "",
  });

  const [dataMomo, setDataMomo] = useState({
    user_id: "",
    amount: "",
    momo_phone: "",
    name: "",
  });

  const handleAmountChange = (enteredAmount) => {
    setDataBanking({ ...dataBanking, amount: enteredAmount });
    setDataMomo({ ...dataMomo, amount: enteredAmount });
    if (enteredAmount > 100000) {
      if (enteredAmount < 10000000) {
      }
      if (enteredAmount && parseInt(enteredAmount) > cash) {
        setErrors({
          ...errors,
          amount: "Vui lòng nhập giá trị không quá số dư",
        });
      } else {
        setErrors({ ...errors, amount: null });
      }
    } else {
      setErrors({
        ...errors,
        amount: "Vui lòng nhập ít nhất 100,000đ",
      });
    }
  };

  const validateInputBanking = (value) => {
    const regex = /^\S.*$/;
    setDataBanking({ ...dataBanking, bank_number: value });
    const isValid = regex.test(value);
    if (isValid) {
      setErrors({ ...errors, bank_number: null });
    } else {
      setErrors({
        ...errors,
        bank_number: "Vui lòng nhập số tài khoản ngân hàng",
      });
    }
  };

  const validateInputBanking2 = (value) => {
    const regex = /^\S.*$/;
    setDataBanking({ ...dataBanking, name: value.toUpperCase() });
    setDataMomo({ ...dataMomo, name: value.toUpperCase() });
    const isValid = regex.test(value);
    if (isValid) {
      setErrors({ ...errors, name: null });
    } else {
      setErrors({
        ...errors,
        name: "Vui lòng nhập tên người thụ hưởng",
      });
    }
  };

  const getBalance = async (id) => {
    const { data } = await currentUser(id);
    setCash(data?.cash_wallet);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (type === "1") {
      if (
        dataBanking.amount &&
        !errors.amount &&
        dataBanking.bank_number &&
        !errors.bank_number &&
        dataBanking.name &&
        !errors.name
      ) {
        const res = await createWithdrawRequest(dataBanking, type);
        toast.success("Gửi yêu cầu rút tiền thành công");
        router.push("/user/transaction");
        setLoading(false);
      } else {
        toast.error("Vui lòng không để trống các mục");
        setLoading(false);
      }
    } else {
      if (
        dataMomo.amount &&
        !errors.amount &&
        dataMomo.momo_phone &&
        !errors.momo_phone &&
        dataMomo.name &&
        !errors.name
      ) {
        const res = await createWithdrawRequest(dataMomo, type);
        toast.success("Gửi yêu cầu rút tiền thành công");
        router.push("/user/transaction");
      } else {
        toast.error("Vui lòng không để trống các mục");
      }
      setLoading(false);
    }
  };
  function validatePhoneNumber(value) {
    const phoneRegex = /^(0\d{9})$/;
    const result = phoneRegex.test(value);
    setDataMomo({ ...dataMomo, momo_phone: value });
    if (result) {
      setErrors({
        ...errors,
        momo_phone: null,
      });
    } else {
      setErrors({
        ...errors,
        momo_phone: "Vui lòng nhập đúng định dạng số điện thoại",
      });
    }
  }
  useEffect(() => {
    getBalance(user?.id);
    setDataBanking({ ...dataBanking, user_id: user?.id });
    setDataMomo({ ...dataMomo, user_id: user?.id });
  }, [user]);
  return (
    <div className="mt-4">
      <div className="sodu">
        <span className="fw-bold">Số dư:</span>
        <span className="ms-5 fw-bold" style={{ color: "red" }}>
          {user ? formatDongCu(cash) : 0}
        </span>
        <span className="ms-2">VND</span>
      </div>
      <div className="mt-3">
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label>Nhập số tiền cần rút</Form.Label>

              <CurrencyInput
                value={dataBanking.amount}
                suffix="  VNĐ"
                min={10000}
                placeholder="Nhập số tiền"
                className="form-control"
                onValueChange={(value) => {
                  handleAmountChange(value);
                }}
                allowNegativeValue={false}
              />
              {errors.amount && (
                <span className="text-danger">{errors.amount}</span>
              )}
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
                  <Form.Select
                    defaultValue={dataBanking.bank_name}
                    onChange={(e) =>
                      setDataBanking({
                        ...dataBanking,
                        bank_name: e.target.value,
                      })
                    }
                  >
                    {options.map((item, i) => (
                      <option key={i} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Nhập số tài khoản</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => validateInputBanking(e.target.value)}
                    placeholder="Nhập số tài khoản"
                    value={dataBanking.bank_number}
                  />
                  {errors.bank_number && (
                    <span className="text-danger">{errors.bank_number}</span>
                  )}
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Tên người thụ hưởng</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => validateInputBanking2(e.target.value)}
                    value={dataBanking.name}
                    placeholder="Nhập tên ngân hàng hoặc momo"
                  />
                  {errors.name && (
                    <span className="text-danger">
                      Vui lòng nhập tên người thụ hưởng
                    </span>
                  )}
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group className="mt-3">
                  <Form.Label>Nhập số điện thoại momo</Form.Label>
                  <Form.Control
                    onChange={(e) => validatePhoneNumber(e.target.value)}
                    value={dataMomo.momo_phone}
                    type="text"
                    placeholder="Nhập số điện thoại"
                  />
                  {errors.momo_phone && (
                    <span className="text-danger">{errors.momo_phone}</span>
                  )}
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Tên người thụ hưởng</Form.Label>
                  <Form.Control
                    onChange={(e) => validateInputBanking2(e.target.value)}
                    value={dataMomo.name}
                    type="text"
                    placeholder="Nhập tên ngân hàng hoặc momo"
                  />
                  {errors.name && (
                    <span className="text-danger">
                      Vui lòng nhập tên người thụ hưởng
                    </span>
                  )}
                </Form.Group>
              </>
            )}
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Button
              onClick={() => handleSubmit()}
              disabled={loading}
              className="btn btn-danger mt-3 text-decoration-none"
            >
              {loading && <Spinner size="sm" className="me-2" />}
              Gửi yêu cầu
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CashWallet;
