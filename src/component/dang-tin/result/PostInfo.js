import { formatter } from "@/utils/format-currency";
import Image from "next/image";
import React from "react";

const PostInfo = ({ data }) => {
  return (
    <div className="pe-4 ps-4 pb-2 pt-4">
      <div className="d-flex flex-row gap-3">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.images[0]}`}
          style={{ objectFit: "cover" }}
          width={130}
          height={130}
        />
        <div className="d-flex flex-column">
          <span>{data.title}</span>
          <span style={{ color: "red", fontWeight: "bold" }}>
            {data?.price ? formatter.format(data.price) : "Thoả thuận"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
