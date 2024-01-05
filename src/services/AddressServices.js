import { supabase } from "@/utils/supabase-config";
export const fetchCity = async () => {
  const { data, errors } = await supabase.from("city").select();
  return { data };
};

export const fetchDistrict = async (id) => {
  const { data, errors } = await supabase
    .from("district")
    .select()
    .eq("city_id", id);
  return { data };
};

export const fetchWard = async (id) => {
  const { data, errors } = await supabase
    .from("ward")
    .select()
    .eq("district_id", id);

  return { data };
};
