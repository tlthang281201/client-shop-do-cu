"use client";
import { readUserSession } from "@/services/Auth";
import createSupabaseClient from "@/utils/supabase/client";
import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext(null);

export function AppWrapper({ children }) {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const getUser = async () => {
    const { data } = await readUserSession();
    setUser(data?.session?.user);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
