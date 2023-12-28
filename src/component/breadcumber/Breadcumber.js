import Link from "next/link";

const a = [1, 2, 3, 4, 5, 6];
const Breadcumber = () => {
  return (
    <div className="pt-1 ps-2" style={{ fontSize: "13px" }}>
      <Link href={"/"} style={{ textDecoration: "none", color: "gray" }}>
        Trang chủ
      </Link>
      {a.map((value, index) => (
        <span
          key={index}
          style={{
            fontWeight: index === a.length - 1 ? "bold" : "normal",
            color: index === a.length - 1 ? "black" : "gray",
          }}
        >
          {"  "}
          {">"}
          {"  "}Âm thanh
        </span>
      ))}
    </div>
  );
};

export default Breadcumber;
