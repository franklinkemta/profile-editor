"use client"
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import About from "@/components/cv/About";
import Section from "@/components/cv/Section";
import Line from "@/components/cv/Line";
import Experience from "@/components/cv/Experience";
import Education from "@/components/cv/Education";
import Reveal from "@/components/cv/Reveal";

export default function Resume() {
  return (
    <NextUIProvider>
      <main className="layout">
        <div className="page">
          <Header title="Resume" />
          <About />
          <Section>
            <div>
              <p className="flex gap-1">
                <Reveal placeholder="View phone number"><a className="text-middle-blue underline" href="tel:+14384674620">(438) 467 4620 ·</a></Reveal>
                <Reveal placeholder="View email"><a href="mailto:franklinkemta@gmail.com" className="underline">franklinkemta@gmail.com</a></Reveal></p>
              <p><a className="underline" href="https://maps.app.goo.gl/nM3aiCSLrQdv72y1A" target="_blank">(Montreal QC, Canada)</a> · French · English </p>
            </div>
          </Section>

          <div className="flex flex-col justify-center">
            <Section title="Profile" underlineTitle>
              <div className="justify-center text-center">
                <h2 className="bold">Software Developer | Computer Vision | Cloud & Edge | ex Full-Stack</h2>
                <p className="pt-3 italic">
                  5 years of experience in Software Development, Computer Vision, Digital Simulation Hobbyist
                </p>
              </div>
            </Section>
            <Line />
            <Section title="Key SKILLs">
              <div>
                <table className="text-xs">
                  <tbody>
                    <tr>
                      <td>Mainly Python, C#, C++</td>
                      <td>Javascript / Typescript (React)</td>
                      <td>Plus (in Java, Rust and Go)</td>
                    </tr>
                    <tr>
                      <td>PyTorch, OpenCV, Numpy, FFmpeg</td>
                      <td>YOLO, Detects, Tracks, Segs</td>
                      <td>Features extraction, re-Captioning (LLMs)</td>
                    </tr>
                    <tr>
                      <td>ZeroMQ, gRPC, Kafka, REST</td>
                      <td>GraphQL, PostgresQL, MongoDB</td>
                      <td>Websocket, Redis, ElasticSearch</td>
                    </tr>
                    <tr>
                      <td>DevOps for AI/ML, CI/CD, Git</td>
                      <td>Bash, Docker, Ansible, Terraform</td>
                      <td>Cloud, GCP, AWS, Azure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>
            <Line />
            <Section title="Experience">
              <div>
                <Experience
                  organizationName="Relocation"
                  period="Sept 2023 - Jan 2024"
                >
                  <p className="text-hard-blue">
                    Relocated by <b>Alithya Canada Inc</b> for a <b>Full Stack developer</b> position in <b>Montreal Quebec</b>
                  </p>
                </Experience>
                <Experience
                  organizationName="Buttertech, Cameroon"
                  organizationUrl="https://buttertech.fr"
                  role="Technical Consultant - AI Integration"
                  period="May 2022 - Sept 2023"
                >
                  <div className="description">
                    <p>
                      • While transitioning to Montreal, I resolved customer issues with crashing computer vision pipelines, improving output video quality and real time latency
                    </p>
                    <p>
                      • Migrated computer vision pipelines to edge devices with GPU acceleration, enabling on-device feature extraction and improving video quality while reducing network load, cloud processing and architecture costs
                    </p>
                    <p>
                      • Developed the MVP of an edge sensor-based pipeline combining video and LiDAR to measure the CO2 emission of the traffic data from their AI extracted features
                    </p>
                    <p>
                      Stack: Python, PyTorch, OpenCV, FFmpeg, GCP, AWS, PostgreSQL, NextJs, FastAPI, Docker CI/CD, Cuda GPU, Nvidia Containers, Embedded, Balena, Jetson, Lidar Detection and 3D Mapping
                    </p>
                  </div>
                </Experience>
                <Experience
                  organizationName="Monk.ai · (Paris France)"
                  organizationUrl="https://monk.ai"
                  role="Full-Stack Developer  (Joined as first Frontend team member)"
                  period="Dec 2020 - Feb 2022"
                >
                  <div className="description">
                    <p>
                      • Developed the MonkApp MVP, a mobile interface that leverages computer vision backend services to <a target="_blank" href="https://github.com/monkvision/monkjs">assist</a> agents/clients in the car damage inspection process
                    </p>
                    <p>
                      • Contributed to the design and development of the UX/UI open-source SDK <a target="_blank" href="https://monkvision.github.io/monkjs/">MonkJS</a>, focusing on functional aspects, backend integration, annotation and visualization
                    </p>
                    <p>
                      • Worked with the data scientists and the delivery team to iterate on roadmap features, modified the backend for rapid integration of urgent features, e.g OCR, pdf generation
                    </p>
                    <p>
                      • Migrated the backend APIs using Firebase Cloud functions to Rest API and built a simple dashboard (Dataguru) to organize training images datasets
                    </p>
                    <p>
                      Stack: TypeScript, React, React Native, Expo, Jira, Users support, PDF Generation, Documents OCR,
                      Python, Flask, REST, PostgreSQL, SQLAlchemy, Docker, CircleCI, GCP, Auth0, Git
                    </p>
                  </div>
                </Experience>
                <Experience
                  organizationName="Buttertech · (Paris France)"
                  organizationUrl="https://buttertech.fr"
                  role="Full-Stack Developer - Lead Computer Vision"
                  period="March 2018 - May 2020"
                >
                  <div className="description">
                    <p>
                      Led the development of the core video processing product for real-time traffic analysis using Computer Vision. This involved:
                    </p>
                    <p>
                      • Designing and implementing the backend architecture, the database and the GPU video processing pipelines, enabling efficient ingestion, storage, and processing of frames from multiple video sources simultaneously, ensuring optimal models performance
                    </p>
                    <p>
                      • Managing and implementing DevOps delivery strategy, including CI/CD pipelines for models and microservices, automating cloud builds and deployments
                    </p>
                    <p>
                      • Developing the Camvas frontend dashboard, a real-time visualization tool for video streams, processing results and Region of interest (ROI) annotation
                    </p>
                    <p>
                      Stack: Python, FastAPI, PyTorch, ZeroMQ, FFMPEG, OpenCV, Websocket, image processing, NginX, Docker, GCP, Circle CI, Ansible, React, Next JS, Canvas, WebGL, Pixi JS, TailwindCss
                    </p>
                  </div>
                </Experience>
              </div>
            </Section>
            <Line />
            <Section title="Education">
              <div>
                <Education
                  organizationName="FST Settat : Hassan 1er University, Morocco"
                  organizationUrl="https://www.uh1.ac.ma"
                  role="Master's degree in Business Analytics and Big Data"
                  period="Sept 2020 - Aug 2021"
                >
                  <div className="description">
                    <p>
                      • Specialty in Cloud architectures, Machine Learning, Business analytics, Big data frameworks like Hadoop, Kafka with Python, Java
                    </p>
                  </div>
                </Education>
                <Education
                  organizationName="EURELEC, Casablanca, Morocco"
                  organizationUrl="https://www.efetmaroc.com"
                  role="Master's degree in IT Project Management - IT Project Manager"
                  period="Sept 2018 - Aug 2019"
                >
                  <div className="description">
                    <p>
                      • Specialty in IT project management for software development
                    </p>
                  </div>
                </Education>
                <Education
                  organizationName="University of Yaoundee 1, Cameroon"
                  organizationUrl="https://uy1.uninet.cm"
                  role="Bachelor's degree in Computer Science"
                  period="Sept 2014 - July 2017"
                >
                  <div className="description">
                    <p>
                      • Specialty in information technology, software engineering and IT security
                    </p>
                  </div>
                </Education>
              </div>
            </Section>
          </div>

        </div>
      </main>
    </NextUIProvider>
  );
}
