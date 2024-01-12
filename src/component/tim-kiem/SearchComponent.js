"use client";
import { supabase } from "@/utils/supabase-config";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import LeftPost from "../listpost/left/LeftPost";
import { Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RightPost from "../listpost/right/RightPost";
import FeaturePost from "./FeaturePost";

const SearchComponent = ({ data }) => {
  const search = useSearchParams();
  const keyword = search.get("keyword");
  const [loading, setLoading] = useState(true);
  const min = search.get("min");
  const max = search.get("max");
  const [posts, setPosts] = useState([]);
  const getPostsBySearch = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("post")
      .select(`*,district_id(name),ward_id(name),city_id(name)`)
      .match({ status: 1, is_show: true, is_selling: false })
      .ilike("title", `%${keyword}%`)
      .order("created_at", { ascending: false });

    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    getPostsBySearch();
  }, [keyword]);
  return (
    <div className="mt-2">
      <Row>
        <Col lg={8} md={12} sm={12} xs={12}>
          {posts && <LeftPost data={posts} title={"Kết quả tìm kiếm: "} />}

          {loading && (
            <div className="bg-white p-3">
              <Skeleton height={300} style={{ paddingRight: "50px" }} />
            </div>
          )}
        </Col>
        <Col lg={4} md={12} sm={12} xs={12}>
          <FeaturePost data={data} />
        </Col>
      </Row>
    </div>
  );
};

export default SearchComponent;
