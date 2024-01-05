import UserInformationComponent from "@/component/account/manage/UserInformationComponent";

export async function generateMetadata() {
  return {
    title: `Thông tin tài khoản`,
  };
}
const UserInformationPage = () => {
  return <UserInformationComponent />;
};

export default UserInformationPage;
