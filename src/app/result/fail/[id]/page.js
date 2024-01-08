import FailComponent from "@/component/result/fail/FailComponent";
import { getTransactionById } from "@/services/TransactionHistoryServices";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { Container } from "react-bootstrap";
export async function generateMetadata({ params }) {
  return {
    title: `Thanh toán thất bại`,
  };
}
const SuccessPayment = async ({ params }) => {
  let cookie = cookies();
  let user = cookie.get("user");
  if (!user) {
    return redirect("/dang-nhap");
  }
  const { data } = await getTransactionById(params.id);
  if (!data) {
    return redirect("/error/404");
  }
  if (data.status === 0) {
    return redirect("/error/404");
  }
  if (user) {
    const currentUser = JSON.parse(user.value);
    if (currentUser.id !== data.user.id) {
      return redirect("/error/404");
    }
  }
  return (
    <Container>
      <FailComponent data={data} />
    </Container>
  );
};

export default SuccessPayment;
