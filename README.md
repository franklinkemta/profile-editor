## Profile editor 📄🍻

### Description
profile-editor is a tool that help you draft a company specific CV profile for a job that you are applying for.
Given a job description at a target company, the user actual CV profile and other details and expectations, then feed a LLM to draft a ready for application job matching resume.

Tired of manually adapting your CV profile for each employer and job application ? 
If you are looking for an advanced copy-paste tool to simplify your job seeking journey, This is the tool for you !
You just need to copy job description, the company description and input your profile details once, if not done yet. 

TODO:
   - Build the profile Generator (Input form)
     - Input the User profile, experience and expectation
     - Input the Job description
     - Input the Target company about
   - Structure the rights prompts with ChatGPT for profile + job + company matching to get a draft application document
   - Make sure GPT API can correctly process the draft document the generate the right output CV profile for the given draft
   - Integrate GPT responses dynamically to current Frontend template
   - Get a shareable and UID CV profile-job link for each generated CV profile, keeping the pre-prompting context (draft application document)
   - Add ability to interact / chat with the generated CV profile on the generated CV profile-job link, by pre-prompting the context with the draft document and allowing GPT to answer question based on the user profil, experience and expectation
   - More:  Generate a cover letter based on the draft application document
