import Header from "@/components/Header";
import { Divider } from "@nextui-org/react";

export default function Blog() {
  return (
    <main className="layout">
      <div className="page">
        <Header title="Cover Letter" />
        <Divider className="print:hidden" />
        <div className="w-full flex flex-col items-center justify-center min-h-60 px-2 text-lg">
          <p className="py-3">
            <span className="">To: Dear Explorer&apos;s Company</span> <br /><br />
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

            Am a team player, a fast onboarding and agile teammate ! <br />
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
  );
}
