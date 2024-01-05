import SignUpComponent from "@/component/account/signup/SignUpComponent";

export async function generateMetadata() {
  return {
    title: `Đăng ký`,
  };
}
const SignUpPage = async () => {
  return <SignUpComponent />;
};

export default SignUpPage;
