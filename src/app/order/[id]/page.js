import AcceptedOrder from "@/component/order/AcceptedOrder";
import ApprovalOrder from "@/component/order/ApprovalOrder";
import CompletedOrder from "@/component/order/CompletedOrder";
import DeliveryOrder from "@/component/order/DeliveryOrder";
import RejectedOrder from "@/component/order/RejectedOrder";
import { getOrderById } from "@/services/OrderService";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
export async function generateMetadata({ params }) {
  return {
    title: `Thông tin đơn hàng`,
  };
}
const OrderInformationPage = async ({ params }) => {
  // o - chưa xác nhận, 1 - đã xác nhận, 2- đang giao, 3- đã hoàn thành, -1- từ chối
  let cookie = cookies();
  let user = cookie.get("user");
  if (!user) {
    return redirect("/dang-nhap");
  }
  const { data } = await getOrderById(params.id);
  if (!data) {
    return redirect("/error/404");
  }
  if (user) {
    const currentUser = JSON.parse(user.value);
    if (
      currentUser.id !== data.seller_id.id &&
      currentUser.id !== data.buyer_id
    ) {
      return redirect("/error/404");
    }
  }
  revalidatePath("/order/[id]/page", "page");
  return (
    <>
      {data.status === 0 && <ApprovalOrder status={data.status} order={data} />}
      {data.status === 1 && <AcceptedOrder status={data.status} order={data} />}
      {data.status === 2 && <DeliveryOrder status={data.status} order={data} />}
      {data.status === 3 && (
        <CompletedOrder status={data.status} order={data} />
      )}
      {data.status === -1 && (
        <RejectedOrder status={data.status} order={data} />
      )}
    </>
  );
};

export default OrderInformationPage;
