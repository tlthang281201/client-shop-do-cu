import { supabase } from "@/utils/supabase-config";
import { updatePostIsSelling } from "./PostServices";
export async function createOrder(data) {
  const res = await supabase
    .from("orders")
    .insert({
      seller_id: data.seller,
      buyer_id: data.buyer,
      post_id: data.post_id,
      name: data.name,
      phone: data.phone,
      city: data.city,
      district: data.district,
      ward: data.ward,
      address: data.address,
      total: data.price,
      note: data.note,
      status: 0,
      payment_type: data.payment_type,
    })
    .select()
    .single();
  //   const res2 = await updatePostIsSelling(data.post_id);
  return { res };
}

export async function deleteOrder(code) {
  const { data } = await supabase
    .from("orders")
    .delete()
    .eq("order_code", code);
  //   const res2 = await updatePostIsSelling(data.post_id);
  return { data };
}
