import SignUpComponent from "@/component/account/signup/SignUpComponent";
export async function generateMetadata() {
  return {
    title: `Đăng ký`,
  };
}
const SignUpPage = () => {
  return <SignUpComponent />;
};

export default SignUpPage;
