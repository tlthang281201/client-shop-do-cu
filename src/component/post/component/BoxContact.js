import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

const BoxContact = () => {
  return (
    <>
      <div className="box-module box-supplier-fluid-2">
        <div className="box-body">
          <div className="box-img" bis_skin_checked="1">
            <Link href="/user/1003765553" title="a" className="box">
              <Image
                src="https://s1.vnecdn.net/myvne/i/v4/graphics/img_60x60.gif"
                alt="a"
                width={60}
                height={60}
                className="avatar-img"
              />
            </Link>
          </div>
          <div className="info-supplier">
            <div className="info-item d-flex flex-column">
              <div>
                <Link href="/user/1003765553" className="fs-6 ms-1">
                  haibinh153
                </Link>
              </div>

              <div className="d-flex flex-row ">
                <Rating
                  name="half-rating-read"
                  defaultValue={4.4}
                  precision={0.5}
                  readOnly
                />
                <span className="fw-bold ms-2 fs-6">3.6</span>
                <Link href={"#"} className="ms-2">( 8 đánh giá )</Link>
              </div>
            </div>
            <div className="border-line" bis_skin_checked="1"></div>

            <p className="info-item">
              <span className="info-label">Bấm để hiện số: </span>
              <Button variant="success" className="ms-2">0123123932</Button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxContact;
