import { Rating } from "@mui/material";
import Image from "next/image";

const UserInfo = ({ data }) => {
  return (
    <div className="mt-3">
      <div className="bg-white p-3 d-flex flex-row">
        <Image
          alt="avatar"
          src={data?.avatar}
          width={80}
          height={80}
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div className="d-flex flex-column ps-3">
          <span style={{ fontSize: "18px", fontWeight: "400" }}>
            {data?.name}
          </span>
          <div
            className="d-flex align-items-center mt-1"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            <span style={{ marginTop: "2px" }}>
              {data?.number_reviews > 0
                ? data?.rating / data?.number_reviews
                : 0}
            </span>
            <div className="d-flex align-items-center">
              <Rating
                name="half-rating-read"
                value={
                  data?.number_reviews > 0
                    ? data?.rating / data?.number_reviews
                    : 0
                }
                precision={0.5}
                readOnly
              />
            </div>
          </div>
          {/* <span className="mt-1" style={{ fontSize: "14px", color: "#777" }}>
            21 đánh giá
          </span> */}
          {data?.number_reviews === 0 && (
            <span style={{ fontSize: "13px" }} className="text-secondary mt-1">
              (Chưa có đánh giá)
            </span>
          )}
          {data?.number_reviews !== 0 && (
            <span style={{ fontSize: "13px" }} className="text-secondary mt-1">
              {data?.number_reviews} đánh giá
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
