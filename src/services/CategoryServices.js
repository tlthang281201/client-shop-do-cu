import { supabase } from "@/utils/supabase-config";

export const getCategoryParent = async () => {
  const cateparent = await supabase
    .from("category_parent")
    .select()
    .eq("active", true);

  return { cateparent };
};

export const getCategoryChildren = async (id) => {
  const catechildren = await supabase
    .from("category_children")
    .select()
    .match({ active: true, parent: id });
  return { catechildren };
};
