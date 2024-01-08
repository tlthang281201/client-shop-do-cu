import { supabase } from "@/utils/supabase-config";

export const createTransaction = async (data, result) => {
  // type: 0 là thanh toán tin đăng bằng momo
  if (result === 0) {
    const res = await supabase
      .from("transaction_history")
      .insert({
        content: `Thanh toán thành công tin đăng ${data.post_id.title}`,
        status: 0,
        total: data.total,
        title: "Thanh toán đơn hàng thành công",
        type: 0,
        user: data.buyer_id,
      })
      .select()
      .single();
    return res;
  } else {
    const res = await supabase
      .from("transaction_history")
      .insert({
        content: `Thanh toán thất bại`,
        status: 1,
        total: data.total,
        title: "Thanh toán đơn hàng thất bại",
        type: 0,
        user: data.buyer_id,
      })
      .select()
      .single();
    return res;
  }
};

export async function getTransactionById(id) {
  const { data } = await supabase
    .from("transaction_history")
    .select(`*,user(id,name)`)
    .eq("id", id)
    .single();
  return { data };
}

export async function getTransactionByUserId(id) {
  const { data } = await supabase
    .from("transaction_history")
    .select(`*`)
    .eq("user", id)
    .order("created_at", { ascending: false });
  return { data };
}
