import Link from "next/link";

const Breadcumber = ({ data }) => {
  return (
    <div className="pt-1 ps-2 mt-2" style={{ fontSize: "13px" }}>
      <Link href={"/"} style={{ textDecoration: "none", color: "gray" }}>
        Trang chủ
      </Link>
      {data?.map((value, index) => (
        <span
          key={index}
          style={{
            fontWeight: index === data.length - 1 ? "bold" : "normal",
            color: index === data.length - 1 ? "black" : "gray",
          }}
        >
          {"  "}
          {">"}
          {"  "}
          {value}
        </span>
      ))}
    </div>
  );
};

export default Breadcumber;
