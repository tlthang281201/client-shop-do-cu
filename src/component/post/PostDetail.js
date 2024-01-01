"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlide from "../slides/SlickSlides";
import styles from "./styles.css";
import formatter from "@/utils/format";
import TitlePost from "./component/TitlePost";
import BoxContact from "./component/BoxContact";
import { PostDescription } from "./component/PostDescription";

const PostDetail = () => {
  return (
    <div style={{ backgroundColor: "white" }} className="p-3 mb-3">
      <div>
        <SlickSlide />
      </div>
      <div className="pb-3">
        <TitlePost />
      </div>
      <PostDescription />
    </div>
  );
};

export default PostDetail;
