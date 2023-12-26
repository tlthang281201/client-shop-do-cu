"use client";
import Image from "next/image";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const AvatarDropdown = () => {
  const [show, setShow] = useState(false);
  return (
    <Dropdown className="me-3 drop">
      <Dropdown.Toggle
        variant="none"
        id="dropdown-basic"
        style={{
          width: "100%",
          maxWidth: "135px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          padding: 0,
        }}
        className="drop"
      >
        <Image
          alt="avatar"
          src={
            "https://a1.vnecdn.net/t71360687213249374259.png?w=60&h=60&s=dDaUYLRDxBW6j49R6JIlyg"
          }
          className="rounded-circle"
          width={30}
          height={30}
        />
        <span
          style={{
            fontSize: "13px",
            lineHeight: "30px",
            maxWidth: "105px",
          }}
          className="ms-2 d-none d-md-inline"
        >
          Thang 281201
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="mt-2">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AvatarDropdown;
