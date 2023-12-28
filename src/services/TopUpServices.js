import { supabase } from "@/utils/supabase-config";

export const getCoin = async () => {
  const { data } = await supabase
    .from("exchange_coin")
    .select()
    .eq("active", true);

  return { data };
};
