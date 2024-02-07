## Profile editor 📄🍻

### Description
profile-editor is a tool that help you draft a company specific CV profile for a job that you are applying for.
Given a job description at a target company, the user actual CV profile and other details and expectations, then feed a LLM to draft a ready for application job matching resume.

### Important
This is just a fun tool to play with LLM and showcase how usefull it can be. And you should clone this repo to update with your own information.

### This should not lazy the process of making an employer specific job application
You have to understand the roles requipes, the company culture and goals and your fit with the role you are applying, dont make HRs life harder XD

### Usage: 
You just need to copy job description, the company description and input your profile details once, if not done yet.

WIP: 
  - Fix foreground white text color on dark theme

TODO:
   - Build the profile Generator (Input form)
     - Input the User profile, experience and expectation
     - Input the Job description
     - Input the Target company about
   - Structure the rights prompts with ChatGPT for profile + job + company matching to get a draft application document
   - Make sure GPT API can correctly process the draft document the generate the right output CV profile for the given draft
   - Integrate GPT responses dynamically to current Frontend template
   - Get a shareable and UID CV profile-job link for each generated CV profile, keeping the pre-prompting context (draft application document)
   - Add ability to get a precise cv for a given job description (it appears as a popup on the cv page)
   - Add ability to get a precise cover letter for a given job description (it appears as a popup on the cover letter page)
   - Add ability to interact / chat with the generated CV profile on the generated CV profile-job link, by pre-prompting the context with the draft document and allowing GPT to answer question based on the user profil, experience and expectation
   - More:  Generate a cover letter based on the draft application document
