import LoginComponent from "@/component/account/login/LoginComponent";

export async function generateMetadata() {
  return {
    title: `Đăng nhập`,
  };
}

const LoginPage = async () => {
  return <LoginComponent />;
};

export default LoginPage;
