import formatter from "@/utils/format";
import moment from "moment";
import React, { useEffect } from "react";
import "moment/locale/vi";
import { capitalizeFirstLetter } from "@/utils/utils";

const TitlePost = ({ data }) => {
  moment.locale("vi");
  const date = capitalizeFirstLetter(moment(data?.created_at).format("LLLL"));
  return (
    <>
      <div style={{ margin: "20px 0 10px" }}>
        <h1 className="title-detail">{data.title}</h1>
      </div>
      <p className="info-posting-time">{date}</p>
      <div className="box-price" style={{ position: "relative" }}>
        <p className="price-current">
          Giá:
          <span className="price-current-value">
            {" "}
            {data.price ? formatter.format(data?.price) : "Thoả thuận"}
          </span>
        </p>
        {/* <button
          className="btn-fav"
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          Lưu tin
        </button> */}
      </div>
      <div className="info-location">
        <span style={{ fontWeight: "bold", color: "black" }}>Địa chỉ: </span>
        {data?.ward_id?.name}, {data?.district_id?.name}, {data?.city_id?.name}
      </div>
      <div className="info-location mt-1">
        <span style={{ fontWeight: "bold", color: "black" }}>
          Tên người liên hệ:{" "}
        </span>
        <span className="text-black">{data?.fullname}</span>
      </div>
      <div className="info-location mt-1">
        <span style={{ fontWeight: "bold", color: "black" }}>
          Số điện thoại liên hệ:{" "}
        </span>
        <span className="text-black">{data?.phone}</span>
      </div>
      <div className="info-location mt-1">
        <span style={{ fontWeight: "bold", color: "black" }}>
          Tình trạng sản phẩm:{" "}
        </span>
        <span className="text-black">
          {data?.is_new ? "Mới" : "Đã sử dụng"}
        </span>
      </div>
    </>
  );
};

export default TitlePost;
