import Image from "next/image";
import React from "react";

const PostInfo = () => {
  return (
    <div className="d-flex flex-row gap-2 mt-2 mb-3 ">
      <Image
        src="https://cdn.chotot.com/j6x7IlmqJLMaADq_qHpud_wf24gzFhNEBEuKOXKQcuE/preset:listing/plain/b7b988f0adb54d7278331707f519065e-2859194353782525030.jpg"
        width={150}
        height={130}
        alt="a"
        style={{ objectFit: "cover" }}
      />
      <div className="d-flex flex-column justify-content-between">
        <span>Bán laptop dell vostro 5568 đã qua sử dụng</span>
        <div>
          <div className="d-flex flex-row justify-content-between">
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>
              Tin ưu tiên
            </span>
            <span style={{ fontSize: "14px", color: "red" }}>15.000 ĐT</span>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>
              Đẩy tin 1 ngày
            </span>
            <span style={{ fontSize: "14px", color: "red" }}>28.000 ĐT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
