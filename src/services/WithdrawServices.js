import { supabase } from "@/utils/supabase-config";

export async function createWithdrawRequest(data, type) {
  if (type === "1") {
    const res = await supabase.from("withdraw_history").insert({
      cash: data.amount,
      user_id: data.user_id,
      type: 1,
      bank_name: data.bank_name,
      account_number: data.bank_number,
      name: data.name,
    });
    console.log(res);
    return res;
  } else {
    const res = await supabase.from("withdraw_history").insert({
      cash: data.amount,
      user_id: data.user_id,
      type: 2,
      momo_phone: data.momo_phone,
      name: data.name,
    });
    console.log(res);
    return res;
  }
}

export async function getWithdrawRequestByUserId(id) {
  const { data } = await supabase
    .from("withdraw_history")
    .select(`*`)
    .eq("user_id", id)
    .order("created_at", { ascending: false });
  return { data };
}
