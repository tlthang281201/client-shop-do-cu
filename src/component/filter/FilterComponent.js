import { useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import style from "./styles.css";
import { Slider } from "@mui/material";
import formatter from "@/utils/format";
import Breadcumber from "../breadcumber/Breadcumber";
const FilterComponent = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState([0, 1000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Breadcumber />
      <div style={{ backgroundColor: "white" }} className="mt-2">
        <div className="p-3">
          <Row>
            <Col lg={2}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="drop1"
                >
                  Toàn quốc
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
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
                  Máy tính bảng
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
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
                      <span style={{ color: "#40A691" }}>
                        {formatter.format(value[0])}
                      </span>{" "}
                      đến{" "}
                      <span style={{ color: "#40A691" }}>
                        {formatter.format(value[1])}
                      </span>
                    </div>
                    <Slider
                      value={value}
                      min={0}
                      max={3000000}
                      step={500000}
                      onChange={handleChange}
                    />
                    <button
                      style={{
                        width: "100%",
                        border: "none",
                        fontWeight: "bold",
                        color: "white",
                        backgroundColor: "#40A691",
                      }}
                    >
                      Áp dụng
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
