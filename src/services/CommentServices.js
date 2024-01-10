import { supabase } from "@/utils/supabase-config";
import { currentUser } from "./AuthService";

export const addComment = async (seller, rating, content, user_id) => {
  const { data } = await currentUser(seller);
  const res1 = await supabase
    .from("users")
    .update({
      rating: data.rating + rating,
      number_reviews: data.number_reviews + 1,
    })
    .eq("id", seller);
  const res = await supabase.from("comment").insert({
    user_cmt: user_id,
    seller: seller,
    rating: rating,
    content: content,
  });

  return { data };
};

export const getAllCommentByUserId = async (id) => {
  const { data } = await supabase
    .from("comment")
    .select(`*,user_cmt(avatar,name)`)
    .eq("seller", id);

  return { data };
};
