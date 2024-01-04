import LoginComponent from "@/component/account/login/LoginComponent";
import { readUserSession } from "@/services/Auth";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: `Đăng nhập`,
  };
}

const LoginPage = async () => {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/");
  }
  return <LoginComponent />;
};

export default LoginPage;
