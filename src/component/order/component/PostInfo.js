import { formatter } from "@/utils/format-currency";
import Image from "next/image";
import React from "react";

const PostInfo = ({ data }) => {
  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex flex-row gap-2 align-items-center">
        <Image
          src={data?.seller_id?.avatar}
          width={30}
          height={30}
          alt="a"
          style={{ objectFit: "cover", borderRadius: 100 }}
        />
        <span className="fw-bold" style={{ fontSize: "15px" }}>
          {data?.seller_id?.name} ({data?.post_id?.phone})
        </span>
      </div>
      <div className="d-flex flex-row gap-2">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.post_id?.images[0]}`}
          width={80}
          height={80}
          alt="a"
          style={{ objectFit: "cover", borderRadius: 3 }}
        />
        <div className="d-flex flex-column gap-2">
          <span>{data?.post_id?.title}</span>
          <span style={{ color: "#d0021b", fontWeight: "bold" }}>
            {data?.post_id?.price
              ? formatter.format(data?.post_id?.price)
              : "Thoả thuận"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
