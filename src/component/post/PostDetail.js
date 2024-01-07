"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlide from "../slides/SlickSlides";
import styles from "./styles.css";
import formatter from "@/utils/format";
import TitlePost from "./component/TitlePost";
import BoxContact from "./component/BoxContact";
import { PostDescription } from "./component/PostDescription";

const PostDetail = ({ data }) => {
  return (
    <div style={{ backgroundColor: "white" }} className="px-3 pt-3 mb-1">
      <div>
        <SlickSlide data={data} />
      </div>
      <div className="pb-3">
        <TitlePost data={data} />
      </div>
      <PostDescription data={data} />
    </div>
  );
};

export default PostDetail;
