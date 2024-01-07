import { deleteOrder, updatePaidOrder } from "@/services/OrderService";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const result = searchParams.get("resultCode");
  const order_code = searchParams.get("orderId");

  if (result === "0") {
    const { data } = await updatePaidOrder(order_code);
    // Set post is_selling true
    return new Response(`Thanh toán thành công`, {
      status: 200,
    });
  } else {
    const { data } = await deleteOrder(order_code);
    return new Response(`Thanh toán thất bại`, {
      status: 200,
    });
  }
}
