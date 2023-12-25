import Breadcumber from "@/component/breadcumber/Breadcumber";
import Review from "@/component/user_reviews/Review";
import UserInfo from "@/component/user_reviews/UserInfo";

import { Container } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Trang cá nhân của ai`,
  };
}
const UserReviewPage = () => {
  return (
    <>
      <Container>
        <Breadcumber />
        <UserInfo />
        <div className="bg-white mt-3 p-3">
          <Review />
          <Review />
          <Review />
        </div>
      </Container>
    </>
  );
};

export default UserReviewPage;
