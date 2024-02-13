"use client"
import { Divider, NextUIProvider } from "@nextui-org/react";
import CardGroup from "@/components/CardGroup";
import Header from "@/components/Header";
import projects from "@/utils/projects";

export default function Blog() {
  return (
    <NextUIProvider>
      <main className="layout">
        <div className="page">
          <Header title="Projects" />
          <Divider className="print:hidden" />
          <div className="w-full flex flex-col items-center justify-center min-h-60 px-2 text-sm">
            <CardGroup title="Recent works" items={projects} action={undefined} />
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
