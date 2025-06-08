"use client";
import { useEffect } from "react";
export const ThemeInit = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return null;
};
