import LoginComponent from "@/component/account/login/LoginComponent";

export async function generateMetadata() {
  return {
    title: `Đăng nhập`,
  };
}

const LoginPage = () => {
  return (
    <LoginComponent />
  );
};

export default LoginPage;
