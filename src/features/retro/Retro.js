import React from "react";
import { useSelector } from "react-redux";

const getAscii = (num) => {
  const special = [
    "NUL",
    "SOH",
    "STX",
    "ETX",
    "EOT",
    "ENQ",
    "ACK",
    "BEL",
    "BS",
    "TAB",
    "LF",
    "VT",
    "FF",
    "CR",
    "SO",
    "SI",
    "DLE",
    "DC1",
    "DC2",
    "DC3",
    "DC4",
    "NAK",
    "SYN",
    "ETB",
    "CAN",
    "EM",
    "SUB",
    "ESC",
    "FS",
    "GS",
    "RS",
    "US",
    "SP",
  ];

  if (num < 33) {
    return special[num];
  } else if (num === 127) {
    return "DEL";
  } else {
    return String.fromCharCode(num);
  }
};

export const Retro = () => {
  const { value } = useSelector((state) => state.counter);
  return (
    <div>
      <h1>{value} {value.toString(16)} {getAscii(value)}</h1>
    </div>
  );
}