"use client";
import { useEffect, useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import style from "./styles.css";
import { Slider } from "@mui/material";
import formatter from "@/utils/format";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/utils/supabase-config";
const FilterComponent = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [city, setCity] = useState([]);
  const [value, setValue] = useState([0, 1000000]);
  const searchParams = useSearchParams();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const handleSubmit = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("min", value[0]);
    params.set("max", value[1]);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const getDistrictById = async (id) => {
    const { data } = await supabase
      .from("district")
      .select()
      .match({ city_id: id });

    setDistrict(data);
  };

  const getWardById = async (id) => {
    const { data } = await supabase
      .from("ward")
      .select()
      .match({ district_id: id });

    setWard(data);
  };

  const handleChangeCity = (id) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("city", id);
    getDistrictById(id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleChangeDistrict = (id) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("district", id);
    getWardById(id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleChangeWard = (id) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("ward", id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const allward = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("ward");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const allcity = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("city");
    params.delete("district");
    params.delete("ward");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const allprice = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("min");
    params.delete("max");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const alldistrict = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("district");
    params.delete("ward");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const getAllCity = async () => {
    const { data } = await supabase.from("city").select();

    setCity(data);
  };

  useEffect(() => {
    getAllCity();
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "white" }} className="mt-2">
        <div className="p-3">
          <Row>
            <Col lg={3}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="drop1"
                >
                  Chọn thành phố
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => allcity()}>
                    Tất cả
                  </Dropdown.Item>
                  {city.map((val, i) => (
                    <Dropdown.Item onClick={() => handleChangeCity(val.id)}>
                      {val.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col lg={3}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="drop1"
                >
                  Chọn quận/huyện
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => alldistrict()}>
                    Tất cả
                  </Dropdown.Item>
                  {district.map((item, i) => (
                    <Dropdown.Item
                      onClick={() => handleChangeDistrict(item.id)}
                    >
                      {item.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col lg={3}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="drop1"
                >
                  Chọn phường xã
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => allward()}>
                    Tất cả
                  </Dropdown.Item>
                  {ward.map((item, i) => (
                    <Dropdown.Item onClick={() => handleChangeWard(item.id)}>
                      {item.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col lg={3}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="drop1"
                >
                  {formatter.format(value[0])} - {formatter.format(value[1])}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ width: "300px" }}>
                  <div className="p-2">
                    <div>
                      Giá từ{" "}
                      <span style={{ color: "red" }}>
                        {formatter.format(value[0])}
                      </span>{" "}
                      đến{" "}
                      <span style={{ color: "red" }}>
                        {formatter.format(value[1])}
                      </span>
                    </div>
                    <Slider
                      value={value}
                      style={{ color: "#FF5757" }}
                      min={0}
                      max={10000000}
                      step={500000}
                      onChange={handleChange}
                    />
                    <button
                      style={{
                        width: "100%",
                        border: "none",
                        fontWeight: "bold",
                        color: "white",
                        backgroundColor: "#FF5757",
                      }}
                      onClick={() => handleSubmit()}
                    >
                      Áp dụng
                    </button>

                    <button
                      style={{
                        width: "100%",
                        border: "1px solid black",
                        fontWeight: "bold",
                        color: "black",
                        backgroundColor: "white",
                      }}
                      className="mt-2"
                      onClick={() => allprice()}
                    >
                      Tất cả
                    </button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
