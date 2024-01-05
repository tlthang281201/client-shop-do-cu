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

export const UpdatePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(/^\S.*$/, "Vui lòng nhập mật khẩu")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
    .required("Vui lòng nhập lại mật khẩu"),
});

export const CreatePostSchema = Yup.object().shape({
  title: Yup.string()
    .matches(/^\S.*$/, "Vui lòng tiêu đề")
    .min(10, "Tiêu đề phải có ít nhất 10 ký tự")
    .max(20, "Tên không được vượt quá 20 ký tự")
    .required("Vui lòng nhập tiêu đề"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Số điện thoại không hợp lệ")
    .required("Vui lòng nhập số điện thoại"),
  name: Yup.string()
    .matches(/^\S.*$/, "Vui lòng nhập tên")
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(20, "Tên không được vượt quá 20 ký tự")
    .required("Vui lòng nhập tên"),
});
