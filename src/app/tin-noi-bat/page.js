import React from "react";
import FeaturedPostComponent from "./FeaturedPostComponent";
import Slide from "@/component/slides/slides";
import { Container } from "react-bootstrap";
import { supabase } from "@/utils/supabase-config";
import Breadcumber from "@/component/breadcumber/Breadcumber";
export async function generateMetadata() {
  return {
    title: `Tin nổi bật`,
  };
}
const FeaturePostPage = async () => {
  const { data: slides } = await supabase.from("slides").select();
  return (
    <>
      <div className="d-none d-md-block">
        <Slide data={slides} />
      </div>
      <Container>
        <div className="mt-2">
          <Breadcumber data={[`Tin nổi bật`]} />
        </div>
        <FeaturedPostComponent title={"Tin đăng nổi bật"} />
        {/* <SearchComponent data={posts} /> */}
      </Container>
    </>
  );
};

export default FeaturePostPage;
