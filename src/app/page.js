import CategorySection from "@/component/category_menu";
import FeaturedPost from "@/component/listpost/component/FeaturedPosts";
import NewPost from "@/component/listpost/component/NewPosts";

import Slide from "@/component/slides/slides";
import { supabase } from "@/utils/supabase-config";
import { revalidatePath } from "next/cache";
import { Container } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: "Chợ Nhà Việt - Website mua bán đồ cũ",
  };
}
export default async function Index() {
  revalidatePath("/");
  const { data } = await supabase.from("slides").select();
  const { data: posts } = await supabase
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
      <Slide data={data} />
      <div className="mt-2">
        <CategorySection />
      </div>
      <Container>
        <div className="mt-2">
          <FeaturedPost data={posts} title={"Tin nổi bật"} />
        </div>

        <div className="mt-2">
          <NewPost title={"Tin mới đăng"} />
        </div>
      </Container>
    </>
  );
}
