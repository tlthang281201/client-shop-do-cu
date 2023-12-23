import formatter from "@/utils/format";
import React from "react";

const TitlePost = () => {
  return (
    <>
      <div style={{ margin: "20px 0 10px" }}>
        <h1 className="title-detail">
          Bán lô đất hẻm 1 xẹt phường An Lạc kế bên khu dân cư Hương Lộ
        </h1>
      </div>
      <p className="info-posting-time">Thứ năm, 21/12/2023, 16:48 (GMT+7)</p>
      <div className="box-price">
        <p className="price-current">
          Gia:
          <span className="price-current-value">
            {" "}
            {formatter.format(1400000)}
          </span>
        </p>
      </div>
      <div className="info-location">
        <span style={{ fontWeight: "bold", color: "black" }}>Địa chỉ: </span>
        Tên Lửa , Quận Bình Tân, TP Hồ Chí Minh
      </div>
    </>
  );
};

export default TitlePost;
