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
          <Header title="Open Letter" />
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

              I&apos;m a Software Developer with 5+ years of experience in Full-Stack Development, <br /> Computer Vision, Cloud & Edge technologies. <br /><br />

              My key Skills are: <br />
              ● Mainly Python, C#, C++, Javascript / Typescript (React), Plus (in Java, Rust and Go) <br />
              ● PyTorch, OpenCV, Numpy, FFmpeg, YOLO, Dets, Features extraction, re-Captioning (LLMs) <br />
              ● ZeroMQ, gRPC, Kafka, REST, GraphQL, PostgresQL, MongoDB, ElasticSearch, WebSocket <br />
              ● DevOps for AI / ML, CI/CD, Git, Bash, Docker, Ansible, Terraform, Cloud, GCP, AWS, Azure <br /><br />

              I deeply encourage opportunities embracing my diverse Full-Stack skillset and experience in Computer Vision development <br /><br />

              I&apos;m very open and passionate about building innovative solutions using AI/ML, LLMs, or Immersive 3D and Real World simulation experiences <br /><br />

              Reach out ! 🤝
            </p>
          </div>
          <Divider className="print:hidden" />
          <p className="text-right">
            <a href="#" className="print:hidden"> <small> Get your specific cover letter</small> </a>
          </p>
        </div>
      </main>
    </NextUIProvider>
  );
}
