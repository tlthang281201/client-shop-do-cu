import {
  deleteOrder,
  getOrderByOrderCode,
  updatePaidOrder,
} from "@/services/OrderService";
import { updatePostIsSelling } from "@/services/PostServices";
import { createTransaction } from "@/services/TransactionHistoryServices";
import { redirect } from "next/navigation";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const result = searchParams.get("resultCode");
  const order_code = searchParams.get("orderId");

  if (result === "0") {
    const { data } = await updatePaidOrder(order_code);
    const res = await createTransaction(data, 0);
    const res2 = await updatePostIsSelling(data.post_id.id);
    // Set post is_selling true
    return redirect(`/result/success/${res.data.id}`);
  } else {
    const { data } = await getOrderByOrderCode(order_code);
    const res1 = await deleteOrder(order_code);
    const res = await createTransaction(data, 1);
    return redirect(`/result/fail/${res.data.id}`);
  }
}
