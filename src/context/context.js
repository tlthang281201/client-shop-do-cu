"use client";
import { readUserSession } from "@/services/Auth";
import { currentUser, signOut } from "@/services/AuthService";
import { supabase } from "@/utils/supabase-config";
import createSupabaseClient from "@/utils/supabase/client";
import { deleteCookie, getCookie } from "cookies-next";
import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext(null);

export function AppWrapper({ children }) {
  const [user, setUser] = useState(null);
  const [userSession, setUserSession] = useState(null);
  const getUserInfo = async () => {
    const userdata = getCookie("user");
    if (userdata) {
      const usersession = JSON.parse(userdata);
      const { data } = await currentUser(usersession.id);
      if (data) {
        setUser(data);
      }
      if (!data) {
        await signOut();
        deleteCookie("user");
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  const getcurrentUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUserSession(data);
  };
  useEffect(() => {
    getUserInfo();
    getcurrentUser();
  }, []);
  return (
    <UserContext.Provider
      value={{ user, setUser, getUserInfo, userSession, getcurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
