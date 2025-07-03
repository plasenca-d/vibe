"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

export default function Client() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.createAI.queryOptions({
      text: "Franzua",
    })
  );

  return (
    <div>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
}
