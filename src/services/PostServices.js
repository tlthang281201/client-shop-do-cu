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
  const { data } = await supabase.from("post").select().eq("id", id).single();
  return { data };
}
