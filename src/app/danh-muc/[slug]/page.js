import Breadcumber from "@/component/breadcumber/Breadcumber";
import CategoryChildrenSection from "@/component/category_menu/children_category";
import FilterComponent from "@/component/filter/FilterComponent";
import LeftPost from "@/component/listpost/left/LeftPost";
import RightPost from "@/component/listpost/right/RightPost";
import Slide from "@/component/slides/slides";
import { getCategoryParentById } from "@/services/CategoryServices";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata({ params }) {
  const slug = params.slug.split("-");
  const id = slug[slug.length - 1];
  const { data } = await getCategoryParentById(id);
  return {
    title: `Mua Bán ${data?.name}`,
  };
}
const Page = ({ params }) => {
  return (
    <>
      <div className="d-none d-md-block">
        <Slide />
      </div>
      <Container>
        <Breadcumber />
      </Container>
      <div className="mt-2">
        <CategoryChildrenSection slug={params.slug} />
      </div>
      <Container>
        <FilterComponent />
        <div className="mt-2">
          <Row>
            <Col lg={8} md={12} sm={12} xs={12}>
              <LeftPost title={"Tất cả"} />
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
              <RightPost />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Page;
