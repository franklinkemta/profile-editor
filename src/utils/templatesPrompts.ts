const formData: any = {} // a place holder for the templates

const informalTemplate = `
    *Candidate Information:
    - Name: ${formData.fullName}
    - Position Applied For: ${formData.jobTitle}

    *Task Description:
    Your task is to enhance the candidate's existing cover letter by incorporating the feedback provided below. Additionally, utilize information from the candidate's CV to personalize the cover letter further. The goal is to create a cover letter that aligns seamlessly with the job description and showcases the candidate's qualifications in a compelling manner.

    *Instructions (HR Recruiter Perspective):
    1. Retrieve the candidate's original cover letter.
    2. Perform an initial evaluation by analyzing the candidate's CV and existing cover letter.
    3. Extract relevant details from the candidate's CV, focusing on **achievements** and **quantifiable skills** related to the target position. Use the STAR method (Situation, Task, Action, Result) to describe accomplishments.
    4. Integrate the CV information into the revised cover letter.

    *Instructions (Experienced Professional Perspective):
    1. Imagine you are an experienced professional in the same job position.
    2. Consider what factors would capture your interest when evaluating a cover letter.
    3. Considering the industry mentioned in the job description, highlight any **industry-specific insights or nuances** that would make a candidate stand out.
    4. Provide additional recommendations for improving the cover letter.

    *Language Consideration:
    - If the candidate's CV or cover letter is not in the same language as the job description, ensure that the revised cover letter is accurately translated while maintaining its effectiveness.
    - Use **modern phrases and informal language where appropriate** while maintaining professionalism. 
        - Example: replace "achieved objectives" with "crushed our goals."

    *Job Description:
    ${formData.jobDescription}

    *Candidate's CV (Relevant Sections):
    ${formData.cvSections}

    *Original Letter:
    ${formData.originalCoverLetter}

    *Revised Letter:
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
`