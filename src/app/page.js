import CategorySection from "@/component/category_menu";
import FeaturedPost from "@/component/listpost/component/FeaturedPosts";
import NewPost from "@/component/listpost/component/NewPosts";

import Slide from "@/component/slides/slides";
import { Container } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: "Chợ Nhà Việt - Website mua bán đồ cũ",
  };
}
export default function Index() {
  return (
    <>
      <Slide />
      <div className="mt-2">
        <CategorySection />
      </div>
      <Container>
        {/* <div className="mt-2">
          <Row>
            <Col lg={8} md={12} sm={12} xs={12}>
              <LeftPost title={"Bất động sản - giá giảm sâu"} />
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
              <RightPost />
            </Col>
          </Row>
        </div> */}
        <div className="mt-2">
          <FeaturedPost title={"Tin nổi bật"} />
        </div>

        <div className="mt-2">
          <NewPost title={"Tin mới đăng"} />
        </div>
      </Container>
    </>
  );
}
