"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, CircularProgress, TextField } from "@mui/material";
import { toast } from "sonner";
import { UpdatePasswordSchema } from "@/validation/FormValidation";
import { Formik } from "formik";
import { supabase } from "@/utils/supabase-config";

const ModalUpdatePassword = ({ show, setShow, id }) => {
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const update = async (value) => {
    setLoading(true);
    const { data, error } = await supabase.auth.updateUser({ password: value });
    if (error) {
      toast.error(error.message);
    }
    if (!error) {
      toast.success("Cập nhập mật khẩu thành công");
    }
    setLoading(false);
    setShow(false);
  };
  const handleSubmit = (value) => {
    update(value.password);
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
            <span>Mật khẩu</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <Formik
            initialValues={{ password: "", repassword: "" }}
            validationSchema={UpdatePasswordSchema}
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
              <>
                <TextField
                  key={2}
                  id="outlined-basic"
                  label="Mật khẩu mới"
                  variant="outlined"
                  type="password"
                  name="password"
                  style={{ width: "100%" }}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <TextField
                  key={2}
                  id="outlined-basic"
                  label="Nhập lại mật khẩu"
                  variant="outlined"
                  type="password"
                  className="mt-2 mb-2"
                  name="repassword"
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
                    color="success"
                    onClick={handleSubmit}
                    style={{ width: "100%" }}
                    disabled={loading}
                    className="mt-3 fw-bold fs-6"
                  >
                    CẬP NHẬP
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        position: "absolute",
                        color: "green",
                        top: "50%",
                        left: "50%",
                        marginLeft: "-12px",
                        marginTop: "-5px",
                      }}
                    />
                  )}
                </div>
              </>
            )}
          </Formik>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalUpdatePassword;
