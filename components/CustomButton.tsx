"use client";

import Image from "next/image";
import { CustomBottonProps } from "@/types";

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
}: CustomBottonProps) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}
