import AcceptedOrder from "@/component/order/AcceptedOrder";
import ApprovalOrder from "@/component/order/ApprovalOrder";
import CompletedOrder from "@/component/order/CompletedOrder";
import DeliveryOrder from "@/component/order/DeliveryOrder";
import RejectedOrder from "@/component/order/RejectedOrder";
import { cookies } from "next/headers";
import React from "react";
export async function generateMetadata({ params }) {
  return {
    title: `Thông tin đơn hàng`,
  };
}
const OrderInformationPage = () => {
  // o - chưa xác nhận, 1 - đã xác nhận, 2- đang giao, 3- đã hoàn thành, -1- từ chối
  const status = 3;
  let cookie = cookies();
  let user = cookie.get("user");
  if (!user) {
    return redirect("/dang-nhap");
  }
  return (
    <>
      {status === 0 && <ApprovalOrder status={status} />}
      {status === 1 && <AcceptedOrder status={status} />}
      {status === 2 && <DeliveryOrder status={status} />}
      {status === 3 && <CompletedOrder status={status} />}
      {status === 4 && <RejectedOrder status={status} />}
    </>
  );
};

export default OrderInformationPage;
