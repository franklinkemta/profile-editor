"use client"
import Header from "@/components/Header";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Divider, Button, NextUIProvider } from "@nextui-org/react";
import Link from "next/link";

export default function CoverLetter() {
  return (
    <NextUIProvider>
      <main className="layout">
        <div className="page">
          <Header title="Cover Letter" />
          <Divider className="print:hidden" />
          <div className="flex flex-col items-center justify-center min-h-60 px-2 py-3 text-lg">
            <div className="w-full flex flex-row flex-wrap gap-2">
              <div>
                <p>To: Dear Explorer&apos;s Company </p>
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
              Greetings! My name is <b>Franklin Kemta</b>, <br /><br />

              Am a Software Developer with 5 years of experience in Full-Stack development, with solid DevOps skills. <br />
              Plus, I have a valuable experience with AI deploying and optimizing Machine Learning and Computer Vision models in production for Video & Image processing applications. <br />
              Familiar with working with scalable SQL/NoSQL databases or data intensives APIs and microservices <br /><br />

              On the backend, I have proficiency in Python, C# and NodeJs. <br />
              On the frontend, I utilize React, React Native, Typescript, mostly with Tailwind & Next. <br />
              on the DevOps CI/CD with emphasis on optimisation, cost reduction and scalability. <br /><br />

              I possess valuable experience in architecting and building applications for both cloud and edge devices. <br />
              My approach involves a strong focus on understanding business requirements and clients needs. <br /><br />

              My stack keywords includes, but are not limited to: <br /><br />

              Python, C#, NodeJS <br />
              React, TypeScript, TailwindCSS, Next JS <br />
              DevOps / packaging / docker <br />
              Microservices & SQL databases <br />
              CI/CD deployment / monitoring <br />
              AI / ML / Computer vision pipeline with PyTorch <br />
              Async I/O APIs, queues, sockets, configs <br />
              Cloud and Edge GCP/AWS development <br /><br />

              I would love to work on your exciting project.<br /><br />
              Feel free to reach out! <br />
              Regards
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
