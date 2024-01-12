"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const Component = () => {
  const search = useSearchParams();
  return <div>{search.get("max")}</div>;
};

export default Component;
