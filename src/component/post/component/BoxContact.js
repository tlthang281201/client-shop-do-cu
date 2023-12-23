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
            <p className="info-item">
              <span className="info-label">Người đăng: </span>
              <Link href="/user/1003765553" title="haibinh153">
                haibinh153
              </Link>
            </p>
            <div className="border-line" bis_skin_checked="1"></div>
            <p className="info-item">
              <span className="info-label">Người liên hệ: </span>
              <Link href="/user/1003765553" title="haibinh153">
                haibinh153
              </Link>
            </p>
            <p className="info-item">
              <span className="info-label">Bấm để hiện số: </span>
              <Button>0123123932</Button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxContact;
