"use client";
import Link from "next/link";
import styles from "./styles.css";
import Image from "next/image";
import CreateSlug from "@/utils/create-slug";
const CategoryMenu = ({ cateparent }) => {
  return (
    <div
      className="p-3 mb-3"
      style={{ backgroundColor: "white", position: "relative" }}
    >
      <h2
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          borderBottom: "3px solid #F2F5F8",
          paddingBottom: "10px",
        }}
      >
        Tất cả danh mục
      </h2>

      <div className="menu-container ">
        <div className="mt-2 menu">
          {cateparent?.data?.map((val, i) => (
            <Link key={i} href={`/danh-muc/${CreateSlug(val.name)}-${val.id}`}>
              <Image
                alt="a"
                src={val.image}
                width={80}
                height={80}
                className="item-img"
              />
              <span className="category-name">{val.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
