import Breadcumber from "@/component/breadcumber/Breadcumber";
import RightPost from "@/component/listpost/right/RightPost";
import PostDetail from "@/component/post/PostDetail";
import BoxContact from "@/component/post/component/BoxContact";
import SuggestedPost from "@/component/post/component/SuggestedPost";
import {
  getAllPost,
  getAllPostByCategory,
  getPostById,
} from "@/services/PostServices";
import { supabase } from "@/utils/supabase-config";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata({ params }) {
  const slug = params.slugpost.split("-");
  const id = slug[slug.length - 1];
  const { data } = await getPostById(id);

  return {
    title: `${data?.title}`,
  };
}
const Post = async ({ params }) => {
  revalidatePath("[slugpost]/page", "page");
  const slug = params.slugpost.split("-");
  const id = slug[slug.length - 1];
  const { data } = await getPostById(id);
  if (!data) {
    return redirect("/error/404");
  }
  // tin dang cung danh muc
  const res = await getAllPostByCategory(data.cate_p_id);

  // Tin dang noi bat
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
    .limit(2);
  return (
    <Container>
      <Breadcumber data={[`${data.title}`]} />
      <div className="mt-2">
        <Row>
          <Col
            lg={8}
            md={12}
            sm={12}
            xs={12}
            style={{ borderRight: "1px solid #F2F5F8" }}
          >
            <PostDetail data={data} />
          </Col>
          <Col lg={4} md={12} sm={12} xs={12}>
            <BoxContact data={data} id={id} />
            <RightPost data={featureposts.filter((onep) => onep.id != id)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <SuggestedPost
              data={res.data.filter((onep) => onep.id !== data.id)}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Post;
