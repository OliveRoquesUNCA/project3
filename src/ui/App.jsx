import React from "react";

export default async function Square() {
  const resp = await fetch("/api/v1/hello");
  console.log(resp);
}