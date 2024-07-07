"use client";
import Image from "next/image";
import Band from "./components/Band";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="block mx-auto container">
      <Band />
      <Products />
    </main>
  );
}
