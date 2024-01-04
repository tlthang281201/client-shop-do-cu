import * as Yup from "yup";
export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^\S.*$/, "Vui lòng nhập tên")
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(20, "Tên không được vượt quá 20 ký tự")
    .required("Vui lòng nhập tên"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email"),
  password: Yup.string()
    .matches(/^\S.*$/, "Vui lòng nhập mật khẩu")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
    .required("Vui lòng nhập lại mật khẩu"),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email"),
  password: Yup.string()
    .matches(/^\S.*$/, "Vui lòng nhập mật khẩu")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
});
