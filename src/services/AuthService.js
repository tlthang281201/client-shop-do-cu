import { useUserContext } from "@/context/context";
import { supabase } from "@/utils/supabase-config";
import { capitalizeFirstLetter } from "@/utils/utils";

export async function currentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function signUpWithEmail(email, password, name) {
  const { error } = await supabase.auth.signUp({
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
  if (error) {
    return false;
  }
  if (!error) {
    return true;
  }
}

export async function signInWithEmail(email, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    // if (error.message.includes("Invalid")) {
    //   setError("Thông tin tài khoản không chính xác");
    // }
    return false;
  }
  if (!error) {
    return true;
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
}
