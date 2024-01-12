import Breadcumber from "@/component/breadcumber/Breadcumber";
import PostOfSeller from "@/component/profile_seller/PostOfSeller";
import Profile from "@/component/profile_seller/Profile";
import { currentUser } from "@/services/AuthService";
import { getPostOfSeller } from "@/services/PostServices";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata({ params }) {
  const { data } = await currentUser(params.id);
  return {
    title: `Trang cá nhân của ${data?.name}`,
  };
}
const SellerProfile = async ({ params }) => {
  revalidatePath("/profile/[id]", "page");
  const { data: user } = await currentUser(params.id);
  if (!user) {
    return redirect("/error/404");
  }

  return (
    <>
      <Container>
        <Breadcumber data={[`Trang cá nhân của ${user.name}`]} />
      </Container>
      <Container className="con">
        <div className="mt-3 pb-3">
          <Row>
            <Col lg={4} md={4} sm={12} xs={12} className="mb-3 ">
              <Profile data={user} />
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <PostOfSeller id={params.id} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SellerProfile;
