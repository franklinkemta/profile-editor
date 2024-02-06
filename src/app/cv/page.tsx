import Header from "@/components/Header";
import About from "@/components/cv/About";
import Section from "@/components/cv/Section";
import Line from "@/components/cv/Line";
import Experience from "@/components/cv/Experience";
import Education from "@/components/cv/Education";
import Reveal from "@/components/cv/Reveal";

export default function CV() {
  return (
    <main className="min-h-screen py-0 lg:px-60 text-xs print:px-0">
      <div className="bg-white py-3 px-8 min-h-screen">
        <Header title="Profile" />
        <About />
        <Section>
          <div>
            <p>
              <Reveal placeholder="View phone number"><a className="text-midle-blue underline" href="tel:+14384674620">(438) 467 4620</a></Reveal> · <Reveal placeholder="View email"><a href="mailto:franklinkemta@gmail.com" className="underline">franklinkemta@gmail.com</a></Reveal> · <a className="underline" href="https://dev.franklinkemta.com" target="_blank">Website</a></p>
            <p><a className="underline" href="https://maps.app.goo.gl/nM3aiCSLrQdv72y1A" target="_blank">(Montréal QC, Canada)</a> · French · English </p>
          </div>
        </Section>

        <div className="flex flex-col justify-center">
          <Section title="Profile" underlineTitle>
            <div>
              <h2 className="bold">Full-stack Developper · Backend Python - NodeJS -  Frontend React & Typescript</h2>
              <h2 className="bold">Cloud Architect · AI/ML DevOps · Python - C# & Java Developer</h2>
              <p className="pt-3 italic">
                5 years of experience as a Full-stack developer and DevOps, Mastering of different frameworks to build production ready applications.
                Strong technical background designing scalable architectures and coding production ready applications
              </p>
            </div>
          </Section>
          <Line />
          <Section title="Key SKILLs">
            <div>
              <table className="text-xs">
                <tbody>
                  <tr>
                    <td>Backend <b>Python</b>, <b>C#</b> and <b>Java</b></td>
                    <td>Microservices <b>APIs</b> & Databases</td>
                    <td><b>Intensive I/O</b> Applications & Debugging skill</td>
                  </tr>
                  <tr>
                    <td>Frontend <b>React</b>/TS/TailwindCSS</td>
                    <td><b>Cloud Deployment</b> / Monitoring</td>
                    <td><b>IT Project Management</b> & <b>Lead</b>ership</td>
                  </tr>
                  <tr>
                    <td><b>Docker</b> & Containers & <b>DevOps</b></td>
                    <td>AI / ML / Vision <b>Pipeline</b> PyTorch</td>
                    <td><b>Excellent</b> communication skills, French & English</td>
                  </tr>
                </tbody>
              </table>
              <p className="pt-2">
                I&apos;ve used various frameworks on different projects, it has provided me a serious advantage in building complex applications
              </p>
            </div>
          </Section>
          <Line />
          <Section title="Experience">
            <div>
              <p>
                <b className="text-hard-blue">Open to work</b> Now Looking for a new position, ability to sponsor myself for fast availability, serious!
              </p>
              <Experience
                organizationName="Alithya Canada Inc"
                organizationUrl="https://www.alithya.com"
                role="Full-Stack Developer"
                period="Sept 2023 - Jan 2024"
              >
                <div className="description">
                  <p>
                    - Relocated in Sept 2023 to Montreal for a Full-Stack developer role prior to a mandate, position not occupied after arrival
                  </p>
                  <p>
                    - Communicated reasons in the meeting : expiry of mandate (supposedly June 2023), freeze of recent international hires
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
                    - Developed the MonkJs SDK, an open-source library for detecting and visualizing vehicle damage using AI inspection
                  </p>
                  <p>
                    - 1st Member of the Frontend Team, Led the realization of the Monk&apos;s Legacy Mobile App at Nimbleways Morocco, and participated in new SDK development, managing product roadmaps, user stories, and technical specifications
                  </p>
                  <p>
                    - Migrated application dependencies to proprietary databases and developed DataGuru, a dashboard for visualizing datasets/images for Monk&apos;s Data Scientists
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
                    - 3 products built: a Custom smart capture device with GPU, a backend ML/APIs, a frontend SDK for monitoring and visualisation
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
                    Focus on Machine Learning / Statistics / Python & Java Big data frameworks / Hadoop / Kafka / Cloud architecture
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
                    Focus on IT project management for Software developpement
                  </p>
                </div>
              </Education>
              <Education
                organizationName="University of Yaoundé 1, Yaoundé, Cameroon"
                organizationUrl="https://uy1.uninet.cm"
                role="Bachelor's degree in Computer Science"
                period="March 2018 - May 2020"
              >
                <div className="description">
                  <p>
                    Focus Software development & major in Information systems security
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
