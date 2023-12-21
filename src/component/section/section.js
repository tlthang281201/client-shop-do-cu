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
    const Fuse = (await import("./styles.css")).default;
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
    <section className="d-flex" style={{ backgroundColor: "#092353" }}>
      <Container>
        <div className="d-flex justify-content-center flex-row">
          {category?.parent?.map((parent, index) => (
            <div
              style={{ borderLeft: index !== 0 ? "1px solid gray" : "none" }}
              key={index}
            >
              <Dropdown key={index} className="drop">
                <Dropdown.Toggle
                  style={{
                    background: "none",
                    border: "none",
                    borderRadius: "unset",
                    padding: "0 20px 0 20px",
                  }}
                  value={index}
                  className="py-3"
                  id="dropdown-basic"
                  onClick={() => router.push("/danh-muc/1")}
                >
                  {parent.name}
                </Dropdown.Toggle>

                <Dropdown.Menu
                  show={true}
                  variant="light"
                  className="dropmenu"
                  style={{ marginTop: "-2px" }}
                >
                  {category?.children?.map(
                    (children) =>
                      children.parent === parent.id && (
                        <Dropdown.Item className="dropitem">
                          <Link
                            style={{ textDecoration: "none" }}
                            href={`/danh-muc/${children.id}`}
                          >
                            {children.name}
                          </Link>
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
