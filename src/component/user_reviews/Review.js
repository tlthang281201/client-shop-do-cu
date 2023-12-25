import { Rating } from "@mui/material";
import Image from "next/image";
import styles from "./styles.css";
const Review = () => {
  return (
    <div className="d-flex flex-column border-top pt-3 pb-3">
      <div className="d-flex flex-row">
        <Image
          alt="avatar"
          src={"https://cdn.chotot.com/uac2/25945262"}
          width={32}
          height={32}
          style={{ objectFit: "cover" }}
          className="rounded-circle"
        />
        <div
          style={{ fontSize: "1rem", lineHeight: "20px" }}
          className="ms-3 mb-2 text-black fw-bold"
        >
          Nguyễn tường minh
        </div>
      </div>
      <div className="ms-5">
        <div>
          <div
            style={{ fontSize: "0.93rem", lineHeight: "20px" }}
            className="text-black"
          >
            Chất lượng sản phẩm tốt
          </div>
          <div className="mt-2">
            <div
              className="d-flex flex-row align-items-center"
              style={{ gap: "16px" }}
            >
              <Rating
                name="half-rating-read"
                defaultValue={4.4}
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
                3 tháng trước
              </div>
            </div>
            <div
              className="d-flex align-items-center mt-2"
              style={{
                backgroundColor: "#f8f8f8",
                height: "56px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <div>
                <Image
                  alt="image"
                  src={
                    "https://cdn.chotot.com/yVT329FcTuPDBkPad2RqlsspUt1eL-M1PQFNZuczVzE/preset:listing/plain/ea4ae673b9c8fdc45bd9f7c056e10c8c-2833451602298198376.jpg"
                  }
                  width={56}
                  height={56}
                />
              </div>
              <div className="p-3" style={{ flex: "1" }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    paddingBottom: "4px",
                  }}
                >
                  Bán ipad air 2 máy đẹp như mới, 4G, Wifi đầy đủ
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "18px",
                    color: "#d0021b",
                  }}
                >
                  2.350.000 đ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
