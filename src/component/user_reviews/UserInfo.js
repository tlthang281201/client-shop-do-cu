import { Rating } from "@mui/material";
import Image from "next/image";

const UserInfo = () => {
  return (
    <div className="mt-3">
      <div className="bg-white p-3 d-flex flex-row">
        <Image
          alt="avatar"
          src={"https://cdn.chotot.com/uac2/3421381"}
          width={80}
          height={80}
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div className="d-flex flex-column ps-3">
          <span style={{ fontSize: "18px", fontWeight: "400" }}>
            Thịnh hàng
          </span>
          <div
            className="d-flex align-items-center mt-1"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            <span style={{ marginTop: "2px" }}>4.7</span>
            <div className="d-flex align-items-center">
              <Rating
                name="half-rating-read"
                defaultValue={4.4}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
          <span className="mt-1" style={{ fontSize: "14px", color: "#777" }}>
            21 đánh giá
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
