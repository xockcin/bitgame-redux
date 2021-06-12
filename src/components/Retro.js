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
    "space",
  ];

  if (num < 33) {
    return special[num];
  } else if (num === 127) {
    return "DEL";
  } else {
    return String.fromCharCode(num);
  }
}

const getSigned = (number) => {
  const highBit = number & 128
  return highBit ? number - 256 : number
}

export const Retro = () => {
  const { value } = useSelector((state) => state.counter);
  return (
    <div>
      <h3>
        dec: {value} | hex: {value.toString(16)} | ascii: {getAscii(value)} | signed: {getSigned(value)}
      </h3>
    </div>
  );
}