import React from "react";
import { useSelector } from "react-redux";

export const Tokens = () => {
  const { tokens } = useSelector((state) => state.tokens);
  return (
    <div>
      <h1>tokens: {tokens}</h1>
    </div>
  );
}
