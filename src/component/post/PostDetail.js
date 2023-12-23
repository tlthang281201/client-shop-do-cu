"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlide from "../slides/SlickSlides";
import styles from "./styles.css";
import formatter from "@/utils/format";
import TitlePost from "./component/TitlePost";
import BoxContact from "./component/BoxContact";
import { PostDescription } from "./component/PostDescription";
import SuggestedPost from "./component/SuggestedPost";

const PostDetail = () => {
  return (
    <div style={{ backgroundColor: "white" }} className="p-3 mb-3">
      <div>
        <SlickSlide />
      </div>
      <div className="pb-3">
        <TitlePost />
      </div>
      <BoxContact />
      <PostDescription />
      <div className="line-break"></div>
      <SuggestedPost />
    </div>
  );
};

export default PostDetail;
