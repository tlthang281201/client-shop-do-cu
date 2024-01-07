"use client";

import { useUserContext } from "@/context/context";
import { signUpWithEmail } from "@/services/AuthService";
import { SignUpSchema } from "@/validation/FormValidation";
import { Button, CircularProgress, TextField } from "@mui/material";
import { setCookie } from "cookies-next";
import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const IconGoogle = () => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2992 10.1951C19.2992 9.47569 19.2395 8.95069 19.1102 8.40625H10.7031V11.6534H15.6379C15.5384 12.4604 15.0012 13.6757 13.8072 14.4923L13.7905 14.601L16.4487 16.6133L16.6328 16.6312C18.3242 15.1048 19.2992 12.859 19.2992 10.1951Z"
        fill="#4285F4"
      ></path>
      <path
        d="M10.7042 18.75C13.1219 18.75 15.1515 17.9722 16.634 16.6306L13.8084 14.4916C13.0522 15.0069 12.0374 15.3666 10.7042 15.3666C8.33635 15.3666 6.32663 13.8403 5.61022 11.7306L5.50522 11.7393L2.74122 13.8296L2.70508 13.9278C4.17754 16.7861 7.2021 18.75 10.7042 18.75Z"
        fill="#34A853"
      ></path>
      <path
        d="M5.61025 11.7322C5.42122 11.1878 5.31182 10.6044 5.31182 10.0016C5.31182 9.39881 5.42122 8.8155 5.6003 8.27106L5.59529 8.15511L2.79666 6.03125L2.7051 6.07381C2.09823 7.25994 1.75 8.59191 1.75 10.0016C1.75 11.4113 2.09823 12.7432 2.7051 13.9294L5.61025 11.7322Z"
        fill="#FBBC05"
      ></path>
      <path
        d="M10.7042 4.63331C12.3856 4.63331 13.5198 5.34303 14.1665 5.93612L16.6936 3.525C15.1416 2.11528 13.1219 1.25 10.7042 1.25C7.2021 1.25 4.17754 3.21387 2.70508 6.07218L5.60028 8.26944C6.32664 6.15972 8.33636 4.63331 10.7042 4.63331Z"
        fill="#EB4335"
      ></path>
    </svg>
  );
};
const SignUpComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { getUserInfo, getcurrentUser } = useUserContext();

  const handleSubmit = async (values) => {
    setMessage("");
    setError("");
    setLoading(true);
    const { data, error } = await signUpWithEmail(
      values.email,
      values.password,
      values.name
    );

    if (!error) {
      setCookie("user", data.user);
      getcurrentUser();
      getUserInfo();
      router.replace("/");
    }
    if (error) {
      setError("Email này đã được đăng ký, vui lòng dùng email khác");
    }
    setLoading(false);
  };
  return (
    <Container>
      <div className="d-flex justify-content-center  bg-white mt-3 p-3">
        <Row
          className="border p-4"
          style={{
            borderRadius: "5px",
            boxShadow: "0 0 8px rgba(30,40,60,.1)",
            maxWidth: "500px",
          }}
        >
          <div className="d-flex justify-content-center">
            <Image
              src="/images/logo.png"
              width={300}
              height={100}
              style={{ objectFit: "cover" }}
            />
          </div>
          <h4 className="fw-bold mt-2" style={{ textAlign: "center" }}>
            Đăng ký tài khoản
          </h4>

          {/* <form> */}
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              repassword: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <Col lg={12}>
                {message && (
                  <div className="alert alert-success mt-2">{message}</div>
                )}
                {error && (
                  <div className="alert alert-danger mt-2">{error}</div>
                )}
                <TextField
                  id="outlined-basic"
                  name="name"
                  label="Họ và tên"
                  variant="outlined"
                  style={{ width: "100%" }}
                  className="mt-3"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name ? errors.name : ""}
                />
                <TextField
                  id="outlined-basic"
                  name="email"
                  label="Email"
                  variant="outlined"
                  style={{ width: "100%" }}
                  className="mt-3"
                  type="email"
                  inputMode="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  id="outlined-basic"
                  label="Mật khẩu"
                  variant="outlined"
                  name="password"
                  type="password"
                  className="mt-4"
                  style={{ width: "100%" }}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <TextField
                  id="outlined-basic"
                  label="Nhập lại mật khẩu"
                  variant="outlined"
                  name="repassword"
                  type="password"
                  className="mt-4 mb-3"
                  style={{ width: "100%" }}
                  value={values.repassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.repassword && Boolean(errors.repassword)}
                  helperText={touched.repassword && errors.repassword}
                />
                <div style={{ position: "relative" }}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#FF5757", width: "100%" }}
                    className="mt-3 fw-bold fs-6"
                    onClick={handleSubmit}
                    type="submit"
                    disabled={loading}
                  >
                    ĐĂNG KÝ
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        position: "absolute",
                        color: "white",
                        top: "50%",
                        left: "50%",
                        marginLeft: "-12px",
                        marginTop: "-5px",
                      }}
                    />
                  )}
                </div>

                {/* <div className="d-flex align-items-center mt-3">
                  <hr style={{ width: "100%", marginRight: "5px" }} />
                  <span style={{ whiteSpace: "nowrap" }}>
                    {" "}
                    hoặc đăng nhập bằng{" "}
                  </span>
                  <hr style={{ width: "100%", marginLeft: "5px" }} />
                </div>
                <Button
                  className="text-black mt-2"
                  style={{ border: "1px solid grey", width: "100%" }}
                  variant="outlined"
                  startIcon={<IconGoogle />}
                >
                  ĐĂNG NHẬP BẰNG GOOGLE
                </Button> */}
                <div className="mt-3 text-center">
                  <span>Đã có tài khoản? </span>
                  <Link className="text-decoration-none" href={`/dang-nhap`}>
                    Đăng nhập
                  </Link>
                </div>
              </Col>
            )}
          </Formik>
          {/* </form> */}
        </Row>
      </div>
    </Container>
  );
};

export default SignUpComponent;
