import ManagePost from "@/component/account/manage/posts/ManagePost";

export async function generateMetadata() {
  return {
    title: `Quản lý tin đăng`,
  };
}
const ManagePostsPage = () => {
  return <ManagePost />;
};

export default ManagePostsPage;
