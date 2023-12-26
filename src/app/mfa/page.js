"use client";

import { supabase } from "@/utils/supabase-config";
import { useEffect, useState } from "react";
import AuthMFA from "./auth";
import App from "./app";
import LoginPage from "../dang-nhap/page";

const AppWithMFA = () => {
  const [readyToShow, setReadyToShow] = useState(false);
  const [showMFAScreen, setShowMFAScreen] = useState(false);
  const getusser = async () => {
    const data = await supabase.auth.getUser();
    const data2 = await supabase.auth.getSession();
    console.log(data);
  };
  useEffect(() => {
    (async () => {
      try {
        const { data, error } =
          await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
        if (error) {
          throw error;
        }
        getusser();
        console.log(data);

        if (data.nextLevel === "aal2" && data.nextLevel !== data.currentLevel) {
          setShowMFAScreen(true);
        }
      } finally {
        setReadyToShow(true);
      }
    })();
  }, []);

  if (readyToShow) {
    if (showMFAScreen) {
      return <AuthMFA />;
    }

    return <App />;
  }

  return <></>;
};
export default AppWithMFA;
