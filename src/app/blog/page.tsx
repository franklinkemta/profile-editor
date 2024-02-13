"use client"
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";

export default function Blog() {
  return (
    <NextUIProvider>
      <main className="layout">
        <div className="page">
          <Header title="Blog" />
          <div className="w-full flex flex-col items-center justify-center min-h-60 px-2 text-xl">
            <h2 className="text-3xl">🤓😄🏗</h2>
            <p className="py-3"> Blog will be updated soon </p>
            <p className="text-tiny">Please come back later </p>
            <h2 className="text-3xl">☕️</h2>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
