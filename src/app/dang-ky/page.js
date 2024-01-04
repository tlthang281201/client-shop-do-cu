import SignUpComponent from "@/component/account/signup/SignUpComponent";
import { readUserSession } from "@/services/Auth";
import { redirect } from "next/navigation";
export async function generateMetadata() {
  return {
    title: `Đăng ký`,
  };
}
const SignUpPage = async () => {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/");
  }
  return <SignUpComponent />;
};

export default SignUpPage;
