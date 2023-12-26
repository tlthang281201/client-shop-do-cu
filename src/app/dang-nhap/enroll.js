"use client";
import { supabase, supabaseAdmin } from "@/utils/supabase-config";
import Image from "next/image";
import { useEffect, useState } from "react";

export function EnrollMFA() {
  const [factorId, setFactorId] = useState("");
  const [qr, setQR] = useState(""); // holds the QR code image SVG
  const [verifyCode, setVerifyCode] = useState(""); // contains the code entered by the user
  const [key, setKey] = useState("");
  const [error, setError] = useState(""); // holds an error message

  const onEnableClicked = () => {
    setError("");
    (async () => {
      const challenge = await supabase.auth.mfa.challenge({ factorId });
      if (challenge.error) {
        setError(challenge.error.message);
        throw challenge.error;
      }

      const challengeId = challenge.data.id;

      const verify = await supabase.auth.mfa.verify({
        factorId,
        challengeId,
        code: verifyCode,
      });
      if (verify.error) {
        setError(verify.error.message);
        throw verify.error;
      }

      onEnrolled();
    })();
  };

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.mfa.enroll({
        factorType: "totp",
      });
      if (error) {
        throw error;
      }

      setFactorId(data.id);
      setKey(data.totp.secret);

      setQR(data.totp.qr_code);
    })();
  }, []);

  return (
    <>
      {error && <div className="error">{error}</div>}
      <Image width={500} height={500} alt="a" src={qr} />
      <input
        type="text"
        onChange={(e) => setVerifyCode(e.target.value.trim())}
      />
      <input type="text" value={key} />
      <input type="button" value="Enable" onClick={onEnableClicked} />
    </>
  );
}
