"use client";
import { Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { supabaseAdmin } from "@/utils/supabase-config";
import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const a = [1, 2, 3, 4, 5, 6];

export const SectionMenu = () => {
  const [category, setCategory] = useState({ parent: [], children: [] });
  const router = useRouter();
  const importnew = async () => {
    const Fuse = await import("./styles.css");
  };

  const getCategories = async () => {
    const { data } = await supabaseAdmin.from("category_parent").select();
    const catechildren = await supabaseAdmin.from("category_children").select();
    setCategory((prev) => ({
      ...prev,
      parent: data,
      children: catechildren.data,
    }));
    importnew();
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <section
      className="d-flex"
      style={{
        backgroundColor: "#092353",
        position: "sticky",
        top: 0,
        zIndex: 9999,
      }}
    >
      <Container>
        <div className="d-flex justify-content-center flex-row">
          {category?.parent?.map((parent, i) => (
            <div
              style={{ borderLeft: i !== 0 ? "1px solid gray" : "none" }}
              key={i}
            >
              <Dropdown key={i} className="drop">
                <Dropdown.Toggle
                  style={{
                    background: "none",
                    border: "none",
                    borderRadius: "unset",
                    padding: "0 20px 0 20px",
                  }}
                  value={i}
                  className="py-3"
                  id="dropdown-basic"
                  onClick={() => router.push("/danh-muc/1")}
                >
                  {parent.name}
                </Dropdown.Toggle>

                <Dropdown.Menu
                  key={i}
                  show={true}
                  variant="light"
                  className="dropmenu"
                  style={{
                    marginTop: "-2px",
                    display: "none",
                    zIndex: "9999",
                  }}
                >
                  {category?.children?.map(
                    (children, index) =>
                      children.parent === parent.id && (
                        <Dropdown.Item
                          className="dropitem"
                          key={index}
                          onClick={() =>
                            router.push(`/danh-muc/${children.id}`)
                          }
                        >
                          {children.name}
                        </Dropdown.Item>
                      )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
