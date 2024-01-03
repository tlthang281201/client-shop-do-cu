import Image from "next/image";
import React from "react";

const PostInfo = () => {
  return (
    <div className="pe-4 ps-4 pb-2 pt-4">
      <div className="d-flex flex-row gap-3">
        <Image
          src={
            "https://cdn.chotot.com/MZvn2c4GiXg8YFfyO_-oEZzS6ulw3bLEZAHWXym888U/preset:view/plain/5b77d68aec4138d6c3e6bd3e0025fa03-2858458707755483284.jpg"
          }
          style={{ objectFit: "cover" }}
          width={130}
          height={130}
        />
        <div className="d-flex flex-column">
          <span>Bán bộ bàn ghế đỏ 8 ghế</span>
          <span style={{ color: "red", fontWeight: "bold" }}>1.200.000 đ</span>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
