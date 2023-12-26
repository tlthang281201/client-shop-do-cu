import { supabase } from "@/utils/supabase-config";
import { useEffect, useState } from "react";

/**
 * UnenrollMFA shows a simple table with the list of factors together with a button to unenroll.
 * When a user types in the factorId of the factor that they wish to unenroll and clicks unenroll
 * the corresponding factor will be unenrolled.
 */
/**
 * UnenrollMFA shows a simple table with the list of factors together with a button to unenroll.
 * When a user types in the factorId of the factor that they wish to unenroll and clicks unenroll
 * the corresponding factor will be unenrolled.
 */
export function UnenrollMFA() {
  const [factorId, setFactorId] = useState("");
  const [factors, setFactors] = useState([]);
  const [error, setError] = useState(""); // holds an error message

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.mfa.listFactors();
      if (error) {
        throw error;
      }

      setFactors(data.totp);
    })();
  }, []);

  return (
    <>
      {error && <div className="error">{error}</div>}
      <tbody>
        <tr>
          <td>Factor ID</td>
          <td>Friendly Name</td>
          <td>Factor Status</td>
        </tr>
        {factors.map((factor) => (
          <tr>
            <td>{factor.id}</td>
            <td>{factor.friendly_name}</td>
            <td>{factor.factor_type}</td>
            <td>{factor.status}</td>
          </tr>
        ))}
      </tbody>
      <input type="text" onChange={(e) => setFactorId(e.target.value.trim())} />
      <button onClick={() => supabase.auth.mfa.unenroll({ factorId })}>
        Unenroll
      </button>
    </>
  );
}
