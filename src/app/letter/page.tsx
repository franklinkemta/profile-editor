"use client"
import Header from "@/components/Header";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Divider, Button, NextUIProvider } from "@nextui-org/react";
import Link from "next/link";

export default function OpenLetter() {
  return (
    <NextUIProvider>
      <main className="layout">
        <div className="page">
          <Header title="About" />
          <Divider className="print:hidden" />
          <div className="flex flex-col items-center justify-center min-h-60 px-2 py-3 text-sm">
            <div className="w-full flex flex-row flex-wrap gap-2">
              <div>
                <p>Dear Explorer,</p>
              </div>
              <div className="ml-auto print:hidden">
                <Button
                  radius="full"
                  variant="solid" color="primary"
                  as={Link}
                  href="/editor"
                  startContent={<PencilIcon className="h-5 w-5" />}
                  endContent={<span className="text-2xl"> ✨ </span>}
                >
                  Enhance </Button>
              </div>
            </div>
            <p className="">
              ☕️ Welcome, Hello bonjour ! It&apos;s Franklin 👋🏼 <br /><br />

              I&apos;m a Senior Full Stack and Devops Developer <br /> <br />

              In few points: <br />
              ● Almost 6 years of experience as a Full Stack Developer, AI and IT Project Management <br />
              ● Solid devOps skills with Terraform, Ansible, Docker and Git on GCP and AWS, <br />
              ● Distributed solution architect with APIs, REST, Sockets, ZeroMQ, Images, Real-time <br />
              ● AI/ML Lifecycle Manager, LLMs, Airflow, DVC, ml flow, Cloud/GPU Inference <br />
              ● Passionate about Computer Vision, Digital Simulation, 3D/BIM, Cloud/Edge IoT <br />
              ● Program in Python, C#, C++, NodeJs, Typescript, React, assets in Java, Rust and Go <br /><br />

              I deeply encourage opportunities embracing my diverse Full-Stack skillset and experience in Computer Vision development <br /><br />

              I&apos;m very open and passionate about building innovative solutions using AI/ML, LLMs, or Immersive 3D and Real World simulation experiences <br /><br />

              Reach out ! 🤝
            </p>
          </div>
          <Divider className="print:hidden" />
          <p className="text-right">
            <a href="#" className="print:hidden"> <small> Franklin</small> </a>
          </p>
        </div>
      </main>
    </NextUIProvider>
  );
}
