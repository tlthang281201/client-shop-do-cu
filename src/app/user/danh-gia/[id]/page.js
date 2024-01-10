import Breadcumber from "@/component/breadcumber/Breadcumber";
import Review from "@/component/user_reviews/Review";
import UserInfo from "@/component/user_reviews/UserInfo";
import { currentUser } from "@/services/AuthService";
import { getAllCommentByUserId } from "@/services/CommentServices";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { Container } from "react-bootstrap";
export async function generateMetadata({ params }) {
  const { data } = await currentUser(params.id);
  if (!data) {
    return {
      title: `Đánh giá`,
    };
  } else {
    return {
      title: `Đánh giá của ${data.name}`,
    };
  }
}
const UserReviewPage = async ({ params }) => {
  revalidatePath("/user/danh-gia/[id]", "page");
  const { data } = await currentUser(params.id);
  const { data: comment } = await getAllCommentByUserId(params.id);

  if (!data) {
    return redirect("/error/404");
  }
  return (
    <>
      <Container>
        <Breadcumber
          data={[`Trang cá nhân của ${data?.name}`, ["Chi tiết đánh giá"]]}
        />
        <UserInfo data={data} />
        <div className="bg-white mt-3 p-3 mb-3">
          {comment.length <= 0 && (
            <div className="d-flex justify-content-center p-5">
              <span style={{ textAlign: "center" }}>
                Người dùng này chưa có tin đăng nào
              </span>
            </div>
          )}
          {comment.map((val, i) => (
            <Review data={val} key={i} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default UserReviewPage;
