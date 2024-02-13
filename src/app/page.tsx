"use client"
import { Avatar, Divider, Chip, NextUIProvider } from "@nextui-org/react";
import { ArrowUpIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import CardGroup from "@/components/CardGroup";
import Ask from "@/components/Ask";
import projects from "@/utils/projects";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="layout">
        <div className="page">
          <Header title="Welcome" />
          <div className="flex flex-col gap-2 py-1 px-3 min-h-60">
            <div className="flex flex-row flex-wrap gap-3">
              <Avatar isBordered isFocusable radius="full" color="primary" className="w-20 h-20 text-large" src="https://avatars.githubusercontent.com/u/17672563?v=4" />
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg">Franklin Kemta</h2>
                {/* <div className="flex flex-wrap gap-2 px-0">
                  <Chip size="sm" color="default" variant="flat">Prev:</Chip>
                  <Chip size="sm" color="primary" variant="dot">Software developer</Chip>
                  <Chip size="sm" color="warning" variant="dot">Full stack</Chip>
                  <Chip size="sm" color="secondary" variant="dot" radius="sm">DevOps</Chip>
                  <Chip size="sm" color="primary" variant="dot" radius="lg">Cloud & Edge</Chip>
                  <Chip size="sm" color="primary" variant="dot" radius="sm">AI/CV/ML</Chip>
                  <Chip size="sm" color="primary" variant="dot" radius="sm">3D sim/AR</Chip>
                </div> */}
                <div className="flex flex-wrap gap-2 px-0">
                  <Chip size="sm" color="default" variant="light">Best:</Chip>
                  <Chip className="text-3xl" size="sm" color="default" variant="flat">☕️</Chip>
                  <Chip size="sm" color="primary" variant="dot">Python</Chip>
                  <Chip size="sm" color="warning" variant="dot" radius="lg" startContent={
                    <ArrowUpRightIcon className="h-2 w-2" />
                  }>C#</Chip>
                  <Chip size="sm" color="secondary" variant="dot" radius="sm">Typescript / React</Chip>
                  <Chip size="sm" variant="light" radius="sm" startContent={
                    <ArrowUpIcon className="h-2 w-2" />
                  }>Check resume</Chip>
                </div>
              </div>
            </div>
            <Divider />
            <div className="w-full flex flex-row gap-2 items-center justify-center">
              <p> <strong>Update Notice:</strong> Hi! am actually adding some exciting features to this <a href="https://github.com/franklinkemta/profile-editor" target="_blank" className="underline font-semibold">profile-editor github</a> project...</p>
              <a href="https://franklinkemta-2020.web.app" className="underline ml-auto">prev version here</a>
            </div>
            <Ask />
            <CardGroup title="recent works" moreLink="/projects" items={projects} action="Ask about" />
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
