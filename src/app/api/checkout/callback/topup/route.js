import {
  deleteOrder,
  getOrderByOrderCode,
  updatePaidOrder,
} from "@/services/OrderService";
import { updateCoinWalletByUserId } from "@/services/TopUpServices";
import { createTransaction } from "@/services/TransactionHistoryServices";
import { redirect } from "next/navigation";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const result = searchParams.get("resultCode");
  const orderId = searchParams.get("orderId");

  const temp = orderId.split("-");

  const coin_id = temp.slice(-2, -1)[0];

  const temp2 = temp.pop();
  const temp3 = temp.join("-");
  const temp5 = temp.pop();

  const user_id = temp.join("-");
  if (result === "0") {
    const transaction = await updateCoinWalletByUserId(user_id, coin_id, 0);

    return redirect(`/result/success/${transaction.id}`);
  } else {
    const transaction = await updateCoinWalletByUserId(user_id, coin_id, 1);

    return redirect(`/result/fail/${transaction.id}`);
  }
}
