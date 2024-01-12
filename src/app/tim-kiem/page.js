import Breadcumber from "@/component/breadcumber/Breadcumber";
import Slide from "@/component/slides/slides";
import SearchComponent from "@/component/tim-kiem/SearchComponent";
import { supabase } from "@/utils/supabase-config";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export async function generateMetadata() {
  return {
    title: `Kết quả tìm kiếm`,
  };
}
const SearchResultComponent = async () => {
  const { data: slides } = await supabase.from("slides").select();
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
      <div className="d-none d-md-block">
        <Slide data={slides} />
      </div>
      <Container>
        <div className="mt-2">
          <Breadcumber data={[`Tìm kiếm`]} />
        </div>

        <SearchComponent data={posts} />
      </Container>
    </>
  );
};

export default SearchResultComponent;
