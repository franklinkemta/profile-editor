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
                <a className="underline" href="https://maps.app.goo.gl/nM3aiCSLrQdv72y1A" target="_blank">Montreal QC, Canada ·</a>
                <Reveal placeholder="View phone number"><a className="text-middle-blue underline" href="tel:+14384674620">(438) 467 4620 ·</a></Reveal>
                <Reveal placeholder="View email"><a href="mailto:franklinkemta@gmail.com" className="underline">franklinkemta@gmail.com</a></Reveal> <span>· French · English</span></p>
            </div>
          </Section>
          <Line />
          <div className="flex flex-col justify-center">
            <Section title="Profile" underlineTitle>
              <div className="justify-center text-center">
                <h2 className="text-middle-blue font-semibold">Software Developer | Full-Stack | Computer Vision | AI | DevOps | Cloud & Edge </h2>
              </div>
            </Section>

            <Section title="">
              <div>
                <table className="text-xs">
                  <tbody>
                    <tr>
                      <td><b>• Over 5 years of experience</b> as a Full Stack Developer, AI and IT Project Management</td>
                    </tr>
                    <tr>
                      <td><b>• Solid devOps skills</b> with Terraform, Ansible, Docker and Git on GCP and AWS,</td>
                    </tr>
                    <tr>
                      <td><b>• Distributed solution architect</b> with APIs, REST, Sockets, ZeroMQ, Images, Real-time</td>
                    </tr>
                    <tr>
                      <td><b>• AI/ML Lifecycle Manager,</b> LLMs, Airflow, DVC, ml flow, Cloud/GPU Inference</td>
                    </tr>
                    <tr>
                      <td><b>• Passionate</b> about Computer Vision, Digital Simulation, 3D/BIM, Cloud/Edge IoT</td>
                    </tr>
                    <tr>
                      <td><b>• Program in Python, C#, C++, NodeJs, Typescript, React,</b> assets in Java, Rust and Go</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </Section>
            <Line />
            <Section title="Experience">
              <div>
                <Experience
                  organizationName="Alithya, Canada"
                  organizationUrl="https://alithya.com"
                  role="Full-Stack Developer"
                  period="Sept 2023 - Jan 2024"
                >
                  <p className="text-hard-blue">
                    Relocated for a Full Stack developer position in Montreal Quebec
                  </p>
                </Experience>
                <Experience
                  organizationName="Buttertech, Paris France, (Remote, Cameroon)"
                  organizationUrl="https://buttertech.fr"
                  role="Technical Consultant - AI Integration"
                  period="May 2022 - Sept 2023"
                >
                  <div className="description">
                    <p>
                      • Implement the ML life cycle management infrastructure for Computer Vision AI models in a distributed architecture supporting multiple edge GPU devices, Migrate inference directly on the sensor, improve latency and quality of frames, reduce network load and GCP bill
                    </p>
                    <p>
                      • Automate the deployment process and scalability on demand of production environments in GCP and the Custom Nvidia Jetson devices using Ansible, Terraform, Docker and Balena
                    </p>
                    <p>
                      • Provide technical customer support on API usage and integration, optimize existing code
                    </p>
                    <p>
                      • Add metadata extraction features for speed, duration, direction, CO2 emissions for traffic analysis, and design with RD the MVP architecture for sensor combining Lidar/GPU/Video
                    </p>
                    <p>
                      Stacks: CI/CD, GCP, AWS, Terraform, Ansible, Airflow, MLflow, DVC, Nvidia Docker, Cuda GPU, Lidar
                    </p>
                  </div>
                </Experience>
                <Experience
                  organizationName="Monk.ai · (Paris France)"
                  organizationUrl="https://monk.ai"
                  role="Full-Stack Developer (Joined as principal Frontend Member)"
                  period="Dec 2020 - Feb 2022"
                >
                  <div className="description">
                    <p>
                      • Coordinate and develop the MonkApp MVP, their legacy mobile application allowing AI-assisted vehicle inspection, taking guided photos, displaying damages detected by the API in real time, allowing users to view, sign and export PDF analysis reports damage
                    </p>
                    <p>
                      • Design with a new team an open-source SDK for UX/UI <a target="_blank" href="https://monkvision.github.io/monkjs/">MonkJS</a>, code the functional aspect, backend integration, annotation modules and 360 visualization of damage
                    </p>
                    <p>
                      • Iterate with data scientists and the delivery team on the feature roadmap and integrate urgent features required by the front end, e.g. OCR, PDF generation
                    </p>
                    <p>
                      • Migrate API code and data from Firebase Cloud functions (NodeJs) and Firestore to the new API, develop a dashboard named Dataguru for Image/Train datasets managements
                    </p>
                    <p>
                      Stack: React, Mobile, TypeScript, NodeJs, Expo, Jira, PDF, OCR, Python, Flask, Postgres, CircleCI Python, Flask, REST, PostgreSQL, SQLAlchemy, Docker, CircleCI, GCP, Auth0, Git
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
                      Led the development of the core video processing product for real-time traffic analysis using Computer Vision. This involved
                    </p>
                    <p>
                      • In Backend: Code and architect vision model pipelines, transport of frames and metadata, concurrently use GPU to process frames from multiples video streams devices on GCP
                    </p>
                    <p>
                      • In DevOps: Set up the CI/CD stack for the deployment of Docker images on GCP, AWS and optimize the microservices cycle based on resource usage
                    </p>
                    <p>
                      • In Frontend: Code the Viize Camvas dashboard to display video streams, history and analysis results in real time, manage sensors and annotate regions of interest (ROI)
                    </p>
                    <p>
                      Stack: Python, FastAPI, PyTorch, ZeroMQ, FFMPEG, OpenCV, WebSocket, Images processing, NginX, Docker, Circle CI, Ansible, React, Next JS, Canvas, WebGL, Pixi JS, TailwindCss, NextJs
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
