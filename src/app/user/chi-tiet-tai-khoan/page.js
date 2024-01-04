import UserInformationComponent from "@/component/account/manage/UserInformationComponent";
import { readUserSession } from "@/services/Auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function generateMetadata() {
  return {
    title: `Thông tin tài khoản`,
  };
}
const UserInformationPage = async () => {
  const { data } = await readUserSession();
  const heads = headers();
  const pathname = heads.get("next-url");
  const uri = encodeURIComponent(pathname);
  if (!data.session) {
    return redirect(`/dang-nhap?return=${uri}`);
  }
  return <UserInformationComponent />;
};

export default UserInformationPage;
