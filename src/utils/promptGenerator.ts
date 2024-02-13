// promptGenerator.ts

export interface ProfileData {
  fullName: string;
  jobTitle: string;
  originalCoverLetter: string;
  cvSections: string;
  jobDescription: string;
}

export function generateCoverLetterPrompt(formData: ProfileData): string {
  // Construct the prompt dynamically using the user input
  const prompt = `
    *Candidate Information:
    - Name: ${formData.fullName}
    - Position Applied For: ${formData.jobTitle}

    *Task Description:
    Your task is to enhance the candidate's existing cover letter by incorporating the feedback provided below. Additionally, utilize information from the candidate's CV to personalize the cover letter further. The goal is to create a cover letter that aligns seamlessly with the job description and showcases the candidate's qualifications.

    *Instructions (HR Recruiter Perspective):
    1. Retrieve the candidate's original cover letter.
    2. Perform an initial evaluation by analyzing the candidate's CV and existing cover letter.
    3. Extract relevant details from the candidate's CV, focusing on responsibilities, achievements, and skills related to the target position.
    4. Use the STAR method (Situation, Task, Action, Result) to describe specific accomplishments.
    5. Integrate the CV information into the revised cover letter.
    6. Ensure that the revised cover letter addresses the following points:
       - Relevance to the job description
       - Clarity and organization
       - Customization for this specific role
       - Professional tone and grammar

    *Instructions (Experienced Professional Perspective):
    1. Imagine you are an experienced professional in the same job position.
    2. Consider what factors would capture your interest when evaluating a cover letter.
    3. Highlight any industry-specific insights or nuances that would make a candidate stand out.
    4. Provide additional recommendations for improving the cover letter.

    *Language Consideration:
    - If the candidate's CV or cover letter is not in the same language as the job description, ensure that the revised cover letter is accurately translated while maintaining its effectiveness.
  
    *Job Description:
    ${formData.jobDescription}
    

    *Candidate's CV (Relevant Sections):
    ${formData.cvSections}

    *Original Cover Letter:
    ${formData.originalCoverLetter}

    *Revised Cover Letter:
    {{revised_cover_letter}}

    *Output Format (JSON):
      {
        "revised_cover_letter": {
          "content": "..."
        },
        "initial_evaluation": {
          "strengths": "...",
          "weaknesses": "...",
          "how_well_it_matches": "..."
        }
      }
    `;

  return prompt;
}


// todo remove
export const testPrompt = `
*Candidate Information:
- Name: Albert Dylan
- Position Applied For: Développeur/développeuse de cycle complet

*Task Description:
Your task is to enhance the candidate's existing cover letter by incorporating the feedback provided below. Additionally, utilize information from the candidate's CV to personalize the cover letter further. The goal is to create a cover letter that aligns seamlessly with the job description and showcases the candidate's qualifications.

*Instructions (HR Recruiter Perspective):
1. Retrieve the candidate's original cover letter.
2. Perform an initial evaluation by analyzing the candidate's CV and existing cover letter.
3. Extract relevant details from the candidate's CV, focusing on responsibilities, achievements, and skills related to the target position.
4. Use the STAR method (Situation, Task, Action, Result) to describe specific accomplishments.
5. Integrate the CV information into the revised cover letter.
6. Ensure that the revised cover letter addresses the following points:
   - Relevance to the job description
   - Clarity and organization
   - Customization for this specific role
   - Professional tone and grammar

*Instructions (Experienced Professional Perspective):
1. Imagine you are an experienced professional in the same job position.
2. Consider what factors would capture your interest when evaluating a cover letter.
3. Highlight any industry-specific insights or nuances that would make a candidate stand out.
4. Provide additional recommendations for improving the cover letter.

*Language Consideration:
- If the candidate's CV or cover letter is not in the same language as the job description, ensure that the revised cover letter is accurately translated while maintaining its effectiveness.

*Job Description:
Responsabilités
Tâches
Déterminer et documenter avec les clients les exigences du site Web
Assurer la mise à jour des programmes informatiques existants en effectuant les modifications de manière spécifiée
Préparer des maquettes et des scénarimages
Concevoir l'architecture du site Web et déterminer les besoins logiciels et matériels
Préparer les rapports, manuels et autres documents sur l'état, l'exploitation et l'entretien des logiciels
Prêter assistance dans la collecte et la documentation des besoins des utilisateurs
Créer et optimiser le contenu du site Web en utilisant une variété de graphiques, de bases de données, d'animations et d'autres logiciels
Étudier et évaluer un grand nombre de logiciels de médias interactifs
Planifier, concevoir, écrire, modifier, intégrer et mettre à l'essai les codes informatiques pour les sites Web
Écrire, modifier, intégrer et mettre à l'essai le code des logiciels destinés au commerce électronique ou à toute autre application Internet
Communiquer avec les clients après la vente pour assurer un suivi
Expérience et spécialisation
Systèmes de gestion (sig ou bd)
Java
Python
Renseignements supplémentaires
Conditions de travail et capacités physiques
Délais serrés
Souci du détail
Qualités personnelles
Créativité
Intégrité


*Candidate's CV (Relevant Sections):
Work Experience
Relocation
Alithya Canada Inc
September 2023 to January 2024
Relocated by Alithya Canada Inc for a Full Stack developer position in Montreal Quebec (Current work permit)
Technical Co-Founder (startup)
Freelancing - Casablanca May 2022 to September 2023
• Full-Stack development, Technical planning and features roadmap, tasks attribution, implementation and refactoring
• Backend and Frontend implementation, Code review, low cost scalable microservices design, API versioning, testing
Dev stacks: Python / C# (migration), Javascript, GCP, AWS, Server management, GPU/Cuda, Nvidia Jetson, DevOps AI/ML
Full-Stack Developer
Monk.ai - Paris (75)
December 2020 to February 2022
Contributed to MonkJs SDK, an open-source library for capturing and visualizing vehicle damage for AI assisted inspection
1st Member of the Frontend Team, Led the realization of the Monk’s Legacy Mobile App at Nimbleways Morocco, and

participated in new SDK development, managing product roadmaps, user stories, and technical specifications
Backend migration of APIs dependencies from firebase (NoSQL) to Postgres SQL and Frontend development of DataGuru, a
dashboard for visualizing datasets/images used by Monk’s Data Scientists for models training
Dev stacks: Typescript, React, React Native / Expo, Python, Flask, SQL Alchemy, Firestore, Docker, CircleCI, GCP
Full-Stack Developer - AI DevOps
Buttertech - Paris (75) March 2018 to May 2020
Led the development of Viize Traffic, a product that measures and classifies road traffic in real-time using vision analytics
Designed the software architecture for ingesting, storing, and processing video streams for computer vision pipelines
Implemented Camvas (Viize Traffic), a dashboard that displays multiples video streams and real-time camera processing results
3 products deployed: Edge GPU capture device, a backend ML/APIs, a frontend SDK for monitoring and visualisation
Dev stacks: Python, FastAPI, PyTorch, Docker, ZeroMQ, FFMPEG, OpenCV, React / Typescript, Image processing

*Original Cover Letter:
Greetings! My name is Albert Dylan,

Am a Software Developer with 5 years of experience in Full-Stack development, with solid DevOps skills.
Plus, I have a valuable experience with AI deploying and optimizing Machine Learning and Computer Vision models in production for Video & Image processing applications.
Familiar with working with scalable SQL/NoSQL databases or data intensives APIs and microservices

On the backend, I have proficiency in Python, C# and NodeJs.
On the frontend, I utilize React, React Native, Typescript, mostly with Tailwind & Next.
on the DevOps CI/CD with emphasis on optimisation, cost reduction and scalability.

I possess valuable experience in architecting and building applications for both cloud and edge devices.
My approach involves a strong focus on understanding business requirements and clients needs.

My stack keywords includes, but are not limited to:

Python, C#, NodeJS
React, TypeScript, TailwindCSS, Next JS
DevOps / packaging / docker
Microservices & SQL databases
CI/CD deployment / monitoring
AI / ML / Computer vision pipeline with PyTorch
Async I/O APIs, queues, sockets, configs
Cloud and Edge GCP/AWS development

Am a team player, a fast onboarding and agile teammate !
I would love to work on your exciting project.

Feel free to reach out!
Regards

*Revised Cover Letter:
{{revised_cover_letter}}

*Output Format (JSON):
  {
    "revised_cover_letter": {
      "content": "..."
    },
    "initial_evaluation": {
      "strengths": "...",
      "weaknesses": "...",
      "how_well_it_matches": "..."
    }
  }
`;