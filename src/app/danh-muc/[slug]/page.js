import Breadcumber from "@/component/breadcumber/Breadcumber";
import CategoryChildrenSection from "@/component/category_menu/children_category";
import FilterComponent from "@/component/filter/FilterComponent";
import LeftPost from "@/component/listpost/left/LeftPost";
import RightPost from "@/component/listpost/right/RightPost";
import Slide from "@/component/slides/slides";
import { getCategoryParentById } from "@/services/CategoryServices";
import { supabase } from "@/utils/supabase-config";
import { redirect } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata({ params }) {
  const slug = params.slug.split("-");
  const id = slug[slug.length - 1];
  const { data } = await getCategoryParentById(id);
  return {
    title: `Mua Bán ${data?.name}`,
  };
}
const Page = async ({ params, searchParams }) => {
  const slug = params.slug.split("-");
  const id = slug[slug.length - 1];
  const { data } = await getCategoryParentById(id);
  if (!data) {
    return redirect("/error/403");
  }
  const { data: slides } = await supabase.from("slides").select();
  let posts = [];
  if (
    searchParams?.city &&
    !searchParams?.district &&
    !searchParams?.ward &&
    !searchParams?.min &&
    !searchParams?.max
  ) {
    const { data } = await supabase
      .from("post")
      .select(`*,city_id(name),district_id(name),ward_id(name)`)
      .match({
        status: 1,
        is_show: true,
        is_sold: false,
        cate_p_id: id,
        is_selling: false,
        is_featured: false,
        city_id: searchParams?.city,
      })
      .order("created_at", { ascending: false });
    posts = data;
  } else if (
    searchParams?.city &&
    searchParams?.district &&
    !searchParams?.ward &&
    !searchParams?.min &&
    !searchParams?.max
  ) {
    const { data } = await supabase
      .from("post")
      .select(`*,city_id(name),district_id(name),ward_id(name)`)
      .match({
        status: 1,
        is_show: true,
        is_sold: false,
        cate_p_id: id,
        is_selling: false,
        is_featured: false,
        city_id: searchParams?.city,
        district_id: searchParams?.district,
      })
      .order("created_at", { ascending: false });
    posts = data;
  } else if (
    searchParams?.city &&
    searchParams?.district &&
    searchParams?.ward &&
    !searchParams?.min &&
    !searchParams?.max
  ) {
    const { data } = await supabase
      .from("post")
      .select(`*,city_id(name),district_id(name),ward_id(name)`)
      .match({
        status: 1,
        is_show: true,
        is_sold: false,
        cate_p_id: id,
        is_selling: false,
        is_featured: false,
        city_id: searchParams?.city,
        district_id: searchParams?.district,
        ward_id: searchParams?.ward,
      })
      .order("created_at", { ascending: false });
    posts = data;
  } else if (
    searchParams?.city &&
    searchParams?.district &&
    searchParams?.ward &&
    !searchParams?.min &&
    !searchParams?.max
  ) {
    const { data } = await supabase
      .from("post")
      .select(`*,city_id(name),district_id(name),ward_id(name)`)
      .match({
        status: 1,
        is_show: true,
        is_sold: false,
        cate_p_id: id,
        is_selling: false,
        is_featured: false,
        city_id: searchParams?.city,
        district_id: searchParams?.district,
        ward_id: searchParams?.ward,
      })
      .order("created_at", { ascending: false });
    posts = data;
  } else if (
    searchParams?.city &&
    searchParams?.district &&
    searchParams?.ward &&
    searchParams?.min &&
    searchParams?.max
  ) {
    const { data } = await supabase
      .from("post")
      .select(`*,city_id(name),district_id(name),ward_id(name)`)
      .match({
        status: 1,
        is_show: true,
        is_sold: false,
        cate_p_id: id,
        is_selling: false,
        is_featured: false,
        city_id: searchParams?.city,
        district_id: searchParams?.district,
        ward_id: searchParams?.ward,
      })
      .gte("price", searchParams?.min)
      .lte("price", searchParams?.max)
      .order("created_at", { ascending: false });
    posts = data;
  } else if (
    !searchParams?.city &&
    !searchParams?.district &&
    !searchParams?.ward &&
    !searchParams?.min &&
    !searchParams?.max
  ) {
    const { data } = await supabase
      .from("post")
      .select(`*,city_id(name),district_id(name),ward_id(name)`)
      .match({
        status: 1,
        is_show: true,
        is_sold: false,
        cate_p_id: id,
        is_selling: false,
        is_featured: false,
      })
      .order("created_at", { ascending: false });
    posts = data;
  } else if (
    !searchParams?.city &&
    !searchParams?.district &&
    !searchParams?.ward &&
    searchParams?.min &&
    searchParams?.max
  ) {
    const { data } = await supabase
      .from("post")
      .select(`*,city_id(name),district_id(name),ward_id(name)`)
      .match({
        status: 1,
        is_show: true,
        is_sold: false,
        cate_p_id: id,
        is_selling: false,
        is_featured: false,
      })
      .gte("price", searchParams?.min)
      .lte("price", searchParams?.max)
      .order("created_at", { ascending: false });
    posts = data;
  }

  const { data: featureposts } = await supabase
    .from("post")
    .select(`*,city_id(name),district_id(name),ward_id(name)`)
    .match({
      is_show: true,
      status: 1,
      is_selling: false,
      is_featured: true,
    })

    .order("created_at", { ascending: false })
    .limit(6);
  return (
    <>
      <div className="d-none d-md-block">
        <Slide data={slides} />
      </div>
      <Container>
        <Breadcumber data={["Danh mục", `${data.name}`]} />
      </Container>
      <div className="mt-2">
        <CategoryChildrenSection slug={params.slug} />
      </div>
      <Container>
        <FilterComponent />
        <div className="mt-2">
          <Row>
            <Col lg={8} md={12} sm={12} xs={12}>
              <LeftPost data={posts} title={`Mua bán ${data.name}`} />
            </Col>
            <Col lg={4} md={12} sm={12} xs={12}>
              <RightPost data={featureposts} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Page;
