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

export async function updatePaidOrder(code) {
  const { data } = await supabase
    .from("orders")
    .update({ paid: true, paid_time: new Date() })
    .eq("order_code", code)
    .select(`total,buyer_id,post_id(id,title)`)
    .single();
  return { data };
}

export async function getOrderByOrderCode(code) {
  const { data } = await supabase
    .from("orders")
    .select(`total,buyer_id,post_id(title)`)
    .eq("order_code", code)
    .single();
  return { data };
}

export async function deleteOrder(code) {
  const { data } = await supabase
    .from("orders")
    .delete()
    .eq("order_code", code);
  //   const res2 = await updatePostIsSelling(data.post_id);
  return { data };
}

export async function getOrderById(id) {
  const { data } = await supabase
    .from("orders")
    .select(
      `*,seller_id(id,name,avatar),post_id(id,title,images,price,phone),city(name),district(name),ward(name)`
    )
    .eq("id", id)
    .single();
  return { data };
}

export async function getAllBuyOrderByUserId(id) {
  const { data } = await supabase
    .from("orders")
    .select(`*,post_id(id,title,images,price)`)
    .eq("buyer_id", id)
    .order("created_at", { ascending: false });
  return { data };
}

export async function getAllSellOrderByUserId(id) {
  const { data } = await supabase
    .from("orders")
    .select(`*,post_id(id,title,images,price)`)
    .eq("seller_id", id)
    .order("created_at", { ascending: false });
  return { data };
}

export async function deleteOrderById(id) {
  const { data } = await supabase.from("orders").delete().eq("id", id);
  return { data };
}

export async function updateStatusOrder(id, value) {
  const { data } = await supabase
    .from("orders")
    .update({ status: value })
    .eq("id", id);
  return { data };
}

export async function updateShippingOrder(id) {
  const { data } = await supabase
    .from("orders")
    .update({ status: 2, shipping_time: new Date() })
    .eq("id", id);
  return { data };
}

export async function updateCompletedOrder(id, payment_type, seller_id, total) {
  // Note: update bai post thành đã bán nữa
  if (payment_type === 1) {
    const { data } = await supabase
      .from("orders")
      .update({ status: 3, received_at: new Date() })
      .eq("id", id)
      .select(`seller_id(cash_wallet)`)
      .single();
    // const seller = await supabase
    //   .from("users")
    //   .select()
    //   .eq("id", seller_id)
    //   .single();

    const res = await supabase
      .from("users")
      .update({ cash_wallet: data.seller_id.cash_wallet + total })
      .eq("id", seller_id);

    return { res };
  } else if (payment_type === 2) {
    const { data } = await supabase
      .from("orders")
      .update({
        status: 3,
        received_at: new Date(),
        paid: true,
        paid_time: new Date(),
      })
      .eq("id", id);
    return { data };
  }
}
