"use client";
import Link from "next/link";
import styles from "./styles.css";
import Image from "next/image";
import CreateSlug from "@/utils/create-slug";
const cate = [
  {
    title: "Đồ điện tử",
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F5000.png&w=256&q=95",
  },
  {
    title: "Xe cộ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5tUBcNypQTgnDjR3b9oEBmdKlx5NProIBQ&usqp=CAU",
  },
  {
    title: "Đồ dùng văn phòng",
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F8000.png&w=256&q=95",
  },
  {
    title: "Thời trang, đồ dùng cá nhân",
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F14000.png&w=256&q=95",
  },
  {
    title: "Tủ lạnh, máy lạnh, máy giặt",
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F9000.png&w=256&q=95",
  },
  {
    title: "Giải trí, thể thao, sở thich",
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F4000.png&w=256&q=95",
  },
  {
    title: "Danh mục khác",
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2Ftat-ca-danh-muc.png&w=256&q=95",
  },
];
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
