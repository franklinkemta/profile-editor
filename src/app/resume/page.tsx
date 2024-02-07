import Header from "@/components/Header";
import About from "@/components/cv/About";
import Section from "@/components/cv/Section";
import Line from "@/components/cv/Line";
import Experience from "@/components/cv/Experience";
import Education from "@/components/cv/Education";
import Reveal from "@/components/cv/Reveal";

export default function Resume() {
  return (
    <main className="layout">
      <div className="page">
        <Header title="Resume" />
        <About />
        <Section>
          <div>
            <p>
              <Reveal placeholder="View phone number"><a className="text-midle-blue underline" href="tel:+14384674620">(438) 467 4620 ·</a></Reveal> <Reveal placeholder="View email"><a href="mailto:franklinkemta@gmail.com" className="underline">franklinkemta@gmail.com ·</a></Reveal> <a className="underline" href="https://dev.franklinkemta.com" target="_blank">Website</a></p>
            <p><a className="underline" href="https://maps.app.goo.gl/nM3aiCSLrQdv72y1A" target="_blank">(Montréal QC, Canada)</a> · French · English </p>
          </div>
        </Section>

        <div className="flex flex-col justify-center">
          <Section title="Profile" underlineTitle>
            <div>
              <h2 className="bold">Software Developer | Full-Stack | Cloud & Edge AI DevOps | Computer vision</h2>
              <p className="pt-3 italic">
                5 years of experience of Full-stack applications development paired with AI DevOps skills, Valuable experience designing and
                deploying robust web, edge and cloud applications to production ready, great understanding of business and clients needs
              </p>
            </div>
          </Section>
          <Line />
          <Section title="Key SKILLs">
            <div>
              <table className="text-xs">
                <tbody>
                  <tr>
                    <td>Backend <b>Python</b>, <b>C#</b> and <b>Node JS</b></td>
                    <td><b>Microservices</b> & SQL databases</td>
                    <td><b>Async I/O</b> APIs, queues, sockets, configs</td>
                  </tr>
                  <tr>
                    <td>Frontend <b>React</b>/ Typescript</td>
                    <td><b>CI/CD</b> deployment / monitoring</td>
                    <td><b>Cloud</b> and <b>Edge</b> GCP/AWS development</td>
                  </tr>
                  <tr>
                    <td><b>DevOps</b> ML / packaging / docker</td>
                    <td>AI / ML / Vision <b>pipeline</b> PyTorch</td>
                    <td><b>Fast onboarding</b>, <b>Agile</b> and <b>team</b> player</td>
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
                organizationName="Freelance"
                organizationUrl="#"
                role="Co-Founder & CTO (startup)"
                period="May 2022 - Sept 2023 "
              >
                <div className="description">
                  <p>
                    - Full-Stack development and IT project management services, Technical business decisions and clients needs
                  </p>
                  <p>
                    - Structure and deliver Videos analytics systems using AI, Cloud and Edge processing, AI/ML Models DevOps CI/CD
                  </p>
                  <p>
                    Dev stacks: Python / C#, JS, GCP, AWS, Server management, DevOps AI/ML, GPU, Nvidia Cuda Jetson, Multiprocessing
                  </p>
                </div>
              </Experience>
              <Experience
                organizationName="Monk.ai · (Paris France)"
                organizationUrl="https://monk.ai"
                role="Full-Stack Developer"
                period="Dec 2020 - Feb 2022"
              >
                <div className="description">
                  <p>
                    - Developed the <a target="_blank" href="https://github.com/monkvision/monkjs">MonkJs SDK</a>, an open-source library for detecting and visualizing vehicle damage using AI inspection
                  </p>
                  <p>
                    - 1st Member of the Frontend Team, Led the realization of the Monk&apos;s Legacy Mobile App at Nimbleways Morocco, and participated in new <a target="_blank" href="https://monkvision.github.io/monkjs/">SDK development</a>, managing product roadmaps, user stories, and technical specifications
                  </p>
                  <p>
                    - Backend migration of APIs dependencies from firebase (NoSQL) to Postgres SQL and Frontend development of DataGuru, a dashboard for visualizing datasets/images used by Monk&apos;s Data Scientists for models training
                  </p>
                  <p>
                    Dev stacks: Typescript, React, React Native / Expo, Python, Flask, Poetry, SQL Alchemy, Docker, CircleCI, GCP
                  </p>
                </div>
              </Experience>
              <Experience
                organizationName="Buttertech · (Paris France)"
                organizationUrl="https://buttertech.fr"
                role="Full-Stack Developer - Lead Computer vision ML, DevOps & Analytics"
                period="March 2018 - May 2020"
              >
                <div className="description">
                  <p>
                    - Led the development of Viize Traffic, a product that measures and classifies road traffic in real-time using vision analytics
                  </p>
                  <p>
                    - Designed the software architecture for ingesting, storing, and processing video streams for computer vision pipelines
                  </p>
                  <p>
                    - Implemented Camvas (Viize Traffic), a dashboard that displays multiples video streams and real-time camera processing results
                  </p>
                  <p>
                    - 3 products deployed: Edge GPU capture device, a backend ML/APIs, a frontend SDK for monitoring and visualisation
                  </p>
                  <p>
                    Dev stacks: Python, C++, FastAPI, PyTorch, Docker, ZeroMQ, FFMPEG, OpenCV, React / Typescript, Image processing
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
                period="August 2021"
              >
                <div className="description">
                  <p>
                    Major in Machine Learning / Statistics / Python & Java Big data frameworks / Hadoop / Kafka / Cloud architecture
                  </p>
                </div>
              </Education>
              <Education
                organizationName="EURELEC : European Institute of Electronics and Computer Science, Casablanca, Morocco"
                organizationUrl="https://www.efetmaroc.com"
                role="Master's degree in IT Project Management - IT Project Manager "
                period="August 2019"
              >
                <div className="description">
                  <p>
                    Major on IT project management for Software developpement
                  </p>
                </div>
              </Education>
              <Education
                organizationName="University of Yaoundee 1, Cameroon"
                organizationUrl="https://uy1.uninet.cm"
                role="Bachelor's degree in Computer Science"
                period="July 2017"
              >
                <div className="description">
                  <p>
                    Software development and major in Information systems security
                  </p>
                </div>
              </Education>
            </div>
          </Section>
        </div>

      </div>
    </main>
  );
}
