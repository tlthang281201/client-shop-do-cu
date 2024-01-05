import { useUserContext } from "@/context/context";
import { supabase } from "@/utils/supabase-config";
import { capitalizeFirstLetter } from "@/utils/utils";
import { setCookie } from "cookies-next";

export async function currentUser(id) {
  const { data } = await supabase
    .from("users")
    .select(`*,city(name),district(name),ward(name)`)
    .eq("id", id)
    .single();

  return { data };
}

export async function signUpWithEmail(email, password, name) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: capitalizeFirstLetter(name),
        avatar:
          "https://static.chotot.com/storage/marketplace/common/png/default_user.png",
        token: null,
      },
    },
  });
  return { data, error };
}

export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
}

export async function updateProfile(data, id) {
  const { error } = await supabase
    .from("users")
    .update({
      name: data.name,
      phone: data.phone,
    })
    .eq("id", id);
  return { error };
}

export async function updateAddress(data, id) {
  const { error } = await supabase
    .from("users")
    .update({
      city: data.city,
      district: data.district,
      ward: data.ward,
      address: data.address,
    })
    .eq("id", id);
  return { error };
}

export async function updateAvatar(url, id) {
  const { error } = await supabase
    .from("users")
    .update({
      avatar: url,
    })
    .eq("id", id);
  return { error };
}
