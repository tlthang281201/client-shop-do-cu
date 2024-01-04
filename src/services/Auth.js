"use server";
import createSupabaseServerClient from "@/utils/supabase/server";
import { capitalizeFirstLetter } from "@/utils/utils";
import { redirect } from "next/navigation";

export async function signUp(email, password, name) {
  const supabase = await createSupabaseServerClient();
  const res = await supabase.auth.signUp({
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
  return JSON.stringify(res);
}

export async function signIn(email, password) {
  const supabase = await createSupabaseServerClient();
  const res = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return JSON.stringify(res);
}

export async function readUserSession() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
}

export async function logOut() {
  const supabase = await createSupabaseServerClient();
  const data = await supabase.auth.signOut();
}
