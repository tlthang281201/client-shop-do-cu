import { redirect } from "next/navigation";

import crypto from "crypto-js";
import axios from "axios";
import { createOrder } from "@/services/OrderService";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const { res } = await createOrder(data.order);

  var partnerCode = "MOMOBKUN20180529";
  var accessKey = "klm05TvNBzhg7h7j";
  var secretkey = "at67qH6mk8w5Y1nAyMoYKMWACiEi2bsa";
  var requestId = partnerCode + new Date().getTime();
  var orderId = `${res.data.order_code}`;
  var orderInfo = `Thanh toán đơn hàng ${orderId}`;
  var redirectUrl = "http://localhost:3000/api/checkout/callback";
  var ipnUrl = "http://localhost:3000/api/checkout/callback";
  var amount = `${res.data.total}`;
  var requestType = "payWithMethod";
  var extraData = "";

  var rawSignature =
    "accessKey=" +
    accessKey +
    "&amount=" +
    amount +
    "&extraData=" +
    extraData +
    "&ipnUrl=" +
    ipnUrl +
    "&orderId=" +
    orderId +
    "&orderInfo=" +
    orderInfo +
    "&partnerCode=" +
    partnerCode +
    "&redirectUrl=" +
    redirectUrl +
    "&requestId=" +
    requestId +
    "&requestType=" +
    requestType;

  const signature = crypto
    .HmacSHA256(rawSignature, secretkey)
    .toString(crypto.enc.Hex);

  const requestBody = JSON.stringify({
    partnerCode: partnerCode,
    accessKey: accessKey,
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    redirectUrl: redirectUrl,
    ipnUrl: ipnUrl,
    extraData: extraData,
    requestType: requestType,
    signature: signature,
    lang: "en",
  });

  const response = await axios.post(
    "https://test-payment.momo.vn/v2/gateway/api/create",
    requestBody,
    {
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(requestBody),
      },
    }
  );
  // return NextResponse.redirect(new URL(response.data.payUrl));
  console.log(response.data);
  return Response.json({ url: response.data.payUrl });
}
