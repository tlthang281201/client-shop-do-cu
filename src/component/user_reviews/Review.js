import { Rating } from "@mui/material";
import Image from "next/image";
import styles from "./styles.css";
import moment from "moment";
const Review = ({ data }) => {
  return (
    <div className="d-flex flex-column border-top pt-3 pb-3">
      <div className="d-flex flex-row">
        <Image
          alt="avatar"
          src={data?.user_cmt?.avatar}
          width={38}
          height={38}
          style={{ objectFit: "cover" }}
          className="rounded-circle"
        />
        <div
          style={{ fontSize: "1rem", lineHeight: "20px" }}
          className="ms-3 mb-2 text-black fw-bold"
        >
          {data?.user_cmt?.name}
        </div>
      </div>
      <div className="ms-5">
        <div>
          <div
            style={{ fontSize: "0.93rem", lineHeight: "20px" }}
            className="text-black ms-2"
          >
            {data?.content}
          </div>
          <div className="mt-2">
            <div
              className="d-flex flex-row align-items-center"
              style={{ gap: "16px" }}
            >
              <Rating
                name="half-rating-read"
                value={data?.rating}
                precision={0.5}
                readOnly
              />
              <div
                className="has-line"
                style={{
                  position: "relative",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9b9b9b",
                }}
              >
                {moment(data?.created_at).format("DD/MM/YYYY")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
