import { supabase } from "@/utils/supabase-config";

export async function addPost(post) {
  const {
    title,
    pcid,
    ccid,
    price,
    district,
    city,
    ward,
    address,
    description,
    name,
    phone,
    image,
    is_new,
    seller_id,
  } = post;
  const res = await supabase
    .from("post")
    .insert({
      title,
      cate_p_id: pcid,
      cate_c_id: ccid,
      price: price ? price : null,
      district_id: district,
      city_id: city,
      ward_id: ward,
      address,
      description,
      fullname: name,
      phone,
      images: image,
      detail: null,
      is_new: is_new === "0" ? true : false,
      seller_id,
    })
    .select()
    .single();
  return res;
}

export async function getPostById(id) {
  const { data } = await supabase
    .from("post")
    .select(
      `*,city_id(name),district_id(name),ward_id(name),seller_id(id,name,avatar,rating,number_reviews)`
    )
    .eq("id", id)
    .single();
  return { data };
}

export async function getPostByUserId(id) {
  const { data } = await supabase
    .from("post")
    .select(`*,cate_p_id(name)`)
    .eq("seller_id", id)
    .order("created_at", { ascending: false });
  return { data };
}

export async function getAllPost() {
  const { data } = await supabase
    .from("post")
    .select(`*,city_id(name)`)
    .match({ status: 1, is_show: true, is_sold: false })
    .order("created_at", { ascending: false });
  return { data };
}

export async function getAllPostByCategory(id) {
  const { data } = await supabase
    .from("post")
    .select(`*,city_id(name),district_id(name),ward_id(name)`)
    .match({ status: 1, is_show: true, is_sold: false, cate_p_id: id })
    .order("created_at", { ascending: false });
  return { data };
}

export async function updatePostIsSelling(id) {
  const { data } = await supabase
    .from("post")
    .update({ is_selling: true })
    .eq("id", id);
  return { data };
}

export async function getPostOfSeller(id) {
  const { data } = await supabase
    .from("post")
    .select(
      `*,seller_id(id,name,avatar,rating,number_reviews,created_at),city_id(name)`
    )
    .eq("seller_id", id)
    .match({ is_show: true, status: 1, is_selling: false })
    .order("created_at", { ascending: false });
  return { data };
}

export async function updatePostShowOrHide(id, status) {
  const { data } = await supabase
    .from("post")
    .update({ is_show: status })
    .eq("id", id);
  return { data };
}
