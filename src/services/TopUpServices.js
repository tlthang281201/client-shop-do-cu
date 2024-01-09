import { supabase } from "@/utils/supabase-config";
import { currentUser } from "./AuthService";
import { createServiceTransaction } from "./TransactionHistoryServices";

export const getCoin = async () => {
  const { data } = await supabase
    .from("exchange_coin")
    .select()
    .eq("active", true)
    .order("price", { ascending: true });

  return { data };
};

export const getCoinById = async (id) => {
  const { data } = await supabase
    .from("exchange_coin")
    .select()
    .eq("id", id)
    .single();

  return { data };
};

export const updateCoinWalletByUserId = async (userid, coinid, result) => {
  const { data: coin } = await getCoinById(coinid);
  const { data: user } = await currentUser(userid);
  if (result === 0) {
    const res2 = await supabase
      .from("users")
      .update({ coin_wallet: user.coin_wallet + coin.coin })
      .eq("id", userid);
  }
  const { data: transaction } = await createServiceTransaction(
    userid,
    coin.coin,
    coin.price,
    result
  );
  return transaction;
};
